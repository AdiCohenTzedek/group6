import os
from pymongo import MongoClient
from dotenv import load_dotenv

# טוען את קובץ ה-.env
load_dotenv()

# חיבור ל-MongoDB
uri = os.getenv('DB_URI')
client = MongoClient(uri)
db = client['Lifted']  # שם בסיס הנתונים


# פונקציה להוספת משתמש
def add_user(data):
    collection = db["users"]

    # יצירת נתוני המשתמש
    user_data = {
        "email": data.get("email"),
        "firstName": data.get("firstName"),
        "lastName": data.get("lastName"),
        "age": int(data.get("age", 0)),  # המרת גיל למספר
        "phone": data.get("phone")
    }

    result = collection.insert_one(user_data)
    return result.inserted_id


# פונקציה לבדוק אם משתמש קיים
def user_exists(email):
    collection = db["users"]
    return collection.find_one({"email": email}) is not None


# פונקציה להציג את כל הנתונים מאוסף
def get_all_from_collection(collection_name):
    collection = db[collection_name]
    return list(collection.find())


# פונקציה לעדכון נתון באוסף
def update_in_collection(collection_name, query, new_values):
    collection = db[collection_name]
    result = collection.update_one(query, {"$set": new_values})
    return result.modified_count


# פונקציה למחיקת נתון מאוסף
def delete_from_collection(collection_name, query):
    collection = db[collection_name]
    result = collection.delete_one(query)
    return result.deleted_count
