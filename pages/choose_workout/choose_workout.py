from flask import Blueprint, render_template, session, request, jsonify
from connector_DB import workouts_registration_col, workouts_col


choose_workout = Blueprint(
    'choose_workout',
    __name__,
    static_folder='static',
    static_url_path='/pages/choose_workout',
    template_folder='templates'
)

@choose_workout.route('/choose_workout')
def choose_workout_func():
    print("Session Data:", session)
    return render_template('choose_workout.html')

@choose_workout.route('/register_workout', methods=['POST'])
def register_workout():
    if 'username' not in session:
        return jsonify({"error": "אין משתמש מחובר"}), 401  # בדיקה אם המשתמש מחובר

    data = request.get_json()
    if not data:
        return jsonify({"error": "נתונים חסרים"}), 400


    email = session['username']
    workout_type = data.get("workout_type")
    trainer = data.get("trainer")
    time = data.get("time")
    day = data.get("day")

    existing_registration = workouts_registration_col.find_one({
        "email": email,
        "day": day,
        "time": time
    })
    if existing_registration:
        return jsonify({"error": "הינך רשום לאימון זה! לא ניתן להירשם יותר מפעם אחת"}), 400


    registration_count = workouts_registration_col.count_documents({
        "day": day,
        "time": time
    })
    if registration_count >= 10:
        return jsonify({"error": "האימון מלא! לא ניתן להירשם."}), 400


    registration_data = {
        "email": email,
        "workout_type": workout_type,
        "trainer": trainer,
        "time": time,
        "day": day
    }

    try:
        workouts_registration_col.insert_one(registration_data)
        return jsonify({"success": True, "message": "האימון נשמר בהצלחה!"})
    except Exception as e:
        return jsonify({"error": f"שגיאה בהכנסת האימון: {str(e)}"}), 500
