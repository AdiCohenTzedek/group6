from flask import Blueprint, render_template, request, jsonify, session
from flask import render_template, redirect, url_for

from connector_DB import users_col

# about blueprint definition
login = Blueprint(
    'login',
    __name__,
    static_folder='static',
    static_url_path='/pages/login',
    template_folder='templates'
)

# Routes
@login.route('/login', methods=['GET', 'POST'])
def login_func():
    request_type = request.method
    if request_type == 'POST':
        data = request.get_json()

        email = data.get("email")
        password = data.get("password")

        # חיפוש המשתמש במסד הנתונים
        user = users_col.find_one({"email": email})

        if user:
            # בדיקת סיסמה
            if user.get("password") == password:
                # שמירת נתוני המשתמש ב-Session
                session['username'] = user.get("email")
                session['logged_in'] = True
                session['user_data'] = {
                    "first_name": user.get("first_name"),
                    "last_name": user.get("last_name"),
                    "phone": user.get("phone"),
                    "age": user.get("age")
                }

                return jsonify({"success": True, "message": "התחברת בהצלחה!"})
            else:
                return jsonify({"error": "סיסמה שגויה"}), 401
        else:
            return jsonify({"error": "משתמש לא קיים"}), 404

    return render_template('login.html')
