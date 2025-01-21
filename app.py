from flask import Flask, render_template, request, jsonify
from connector_DB import add_user, user_exists, get_all_from_collection, update_in_collection, delete_from_collection

app = Flask(__name__)

# דף הבית
@app.route('/')
def home():
    return render_template('home_page.html')


# דף אודות
@app.route('/about_us')
def about_us():
    return render_template('about_us.html')


# דף בחירת אימון
@app.route('/choose_workout')
def choose_workout():
    return render_template('choose_workout.html')


# דף התחברות
@app.route('/login')
def login():
    return render_template('login.html')


# דף הרשמה - הוספת משתמש
@app.route('/sign_up', methods=['POST'])
def sign_up():
    data = request.json  # קבלת הנתונים שנשלחים מהלקוח
    email = data.get("email")
    first_name = data.get("firstName")
    last_name = data.get("lastName")
    age = data.get("age")
    phone = data.get("phone")

    # קריאה לפונקציה שלך מה-db functions שמוסיפה את היוזר
    user_id = add_user({
        "email": email,
        "firstName": first_name,
        "lastName": last_name,
        "age": age,
        "phone": phone
    })

    return jsonify({"message": "User registered successfully", "user_id": user_id})


# הצגת נתונים
@app.route('/view', methods=['GET'])
def view_data():
    collection_name = request.args.get("collection", "example_collection")  # שם האוסף
    data = get_all_from_collection(collection_name)

    # הפיכת ה-ID לטקסט קריא
    for item in data:
        item["_id"] = str(item["_id"])

    return jsonify(data)


# עדכון נתונים
@app.route('/update', methods=['PUT'])
def update_data():
    data = request.json
    collection_name = data.get("collection", "example_collection")
    query = data.get("query", {})  # קריטריון למציאת הנתון
    new_values = data.get("new_values", {})  # הערכים החדשים

    modified_count = update_in_collection(collection_name, query, new_values)
    return jsonify({"message": "Data updated", "modified_count": modified_count})


# מחיקת נתונים
@app.route('/delete', methods=['DELETE'])
def delete_data():
    data = request.json
    collection_name = data.get("collection", "example_collection")
    query = data.get("query", {})  # קריטריון למציאת הנתון למחיקה

    deleted_count = delete_from_collection(collection_name, query)
    return jsonify({"message": "Data deleted", "deleted_count": deleted_count})


if __name__ == '__main__':
    app.run(debug=True)
