from flask import Blueprint, render_template, session, jsonify, request
from connector_DB import workouts_registration_col, users_col

my_workouts = Blueprint(
    'my_workouts',
    __name__,
    static_folder='static',
    static_url_path='/pages/my_workouts',
    template_folder='templates'
)


@my_workouts.route('/my_workouts')
def my_workouts_func():
    if 'username' not in session:
        return "עליך להתחבר כדי לראות את האימונים שלך", 401

    email = session['username']

    user = users_col.find_one({"email": email})
    first_name = user.get("firstName", "משתמש") if user else "משתמש"


    workouts = list(workouts_registration_col.find({"email": email}))

    return render_template("my_workouts.html", first_name=first_name, workouts=workouts)



@my_workouts.route('/delete_workout', methods=['POST'])
def delete_workout():
    if 'username' not in session:
        return jsonify({"error": "עליך להתחבר"}), 401

    data = request.get_json()
    email = session['username']
    workout_type = data.get("workout_type")
    day = data.get("day")
    time = data.get("time")


    result = workouts_registration_col.delete_one(
        {"email": email, "workout_type": workout_type, "day": day, "time": time})

    if result.deleted_count > 0:
        return jsonify({"success": True, "message": "האימון בוטל בהצלחה!"})
    else:
        return jsonify({"error": "האימון לא נמצא או שכבר בוטל"}), 400
