from Tools.scripts.make_ctype import method
from flask import Blueprint, render_template, request, jsonify
from flask import render_template, redirect, url_for

from connector_DB import users_col

sign_up = Blueprint(
    'sign_up',
    __name__,
    static_folder='static',
    static_url_path='/pages/sign_up',
    template_folder='templates'
)


# Routes
@sign_up.route('/sign_up', methods=['GET', 'POST'])
def sign_up_func():
    request_type = request.method
    if request_type == 'POST':
        data = request.get_json()
        user_data = {
            "email": data.get("email"),
            "password": data.get("password"),
            "first_name": data.get("first_name"),
            "last_name": data.get("last_name"),
            "age": int(data.get("age", 0)),
            "phone": data.get("phone")
        }
        # הוספת המשתמש למסד הנתונים
        try:
            users_col.insert_one(user_data)
            return jsonify({"success": True, "message": "משתמש נוסף בהצלחה!"})
        except Exception as e:
            return jsonify({"error": f"שגיאה בהכנסת המשתמש: {str(e)}"}), 500
    else:
     return render_template('sign_up.html')


