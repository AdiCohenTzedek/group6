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
workouts_registration_col = lifted_db['workouts_registration']


def add_workout(workout_type, trainer, time, day):
    workout_data = {
        "workout_type": workout_type,
        "trainer": trainer,
        "time": time,
        "day": day
    }

    try:
        workouts_col.insert_one(workout_data)
        print(f"אימון {workout_type} עם {trainer} בשעה {time} ביום {day} נוסף בהצלחה!")
    except Exception as e:
        print(f"שגיאה בהכנסת האימון: {str(e)}")


def get_all_workouts():
    workouts = list(workouts_col.find({}))
    print(" כל האימונים במסד הנתונים:")
    for workout in workouts:
        print(workout)


# if __name__ == "__main__":
#     print(" מתחילים להוסיף אימונים ל-DB...")
#
#     add_workout("פילאטיס מכשירים", "יובל כהן", "08:30", "ג'")
#     add_workout("פילאטיס מזרן", "יובל כהן", "09:30", "ג'")
#     add_workout("Barre", "נועם לוי", "18:00", "ג'")
#     add_workout("פונקציונלי", "נועם לוי", "19:00", "ג'")
#
#     print(" אימונים נוספו! בודקים את התוצאה:")
#     get_all_workouts()
