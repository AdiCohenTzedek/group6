import os
from pymongo import MongoClient
from dotenv import load_dotenv

# טוען את קובץ ה-.env
load_dotenv()

# חיבור ל-MongoDB
uri = os.getenv('DB_URI')
cluster = MongoClient(uri)
lifted_db = cluster['Lifted']  # שם בסיס הנתונים
users_col = lifted_db['users']
workouts_col = lifted_db['workouts']


# # פונקציה להוספת משתמש
# def add_user(data):
#
#     # יצירת נתוני המשתמש
#     user_data = {
#         "email": data.get("email"),
#         "firstName": data.get("firstName"),
#         "lastName": data.get("lastName"),
#         "age": int(data.get("age", 0)),  # המרת גיל למספר
#         "phone": data.get("phone")
#     }
#
#     result = users_col.insert_one(user_data)
#     return result.inserted_id
#

# פונקציה לבדוק אם משתמש קיים
def user_exists(email):
    collection = users_col["users"]
    return collection.find_one({"email": email}) is not None


# פונקציה להציג את כל הנתונים מאוסף
def get_all_from_collection(collection_name):
    collection = users_col[collection_name]
    return list(collection.find())


# פונקציה לעדכון נתון באוסף
def update_in_collection(collection_name, query, new_values):
    collection = users_col[collection_name]
    result = collection.update_one(query, {"$set": new_values})
    return result.modified_count


# פונקציה למחיקת נתון מאוסף
def delete_from_collection(collection_name, query):
    collection = users_col[collection_name]
    result = collection.delete_one(query)
    return result.deleted_count
