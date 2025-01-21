from connector_DB import get_all_from_collection

def analyze_db():
    collections = ["users", "workouts", "other_collection"]  # הוסף את שמות האוספים שלך כאן
    for collection_name in collections:
        print(f"Collection: {collection_name}")
        data = get_all_from_collection(collection_name)
        if not data:
            print(f"No data found in collection: {collection_name}")
        for item in data:
            print(item)

if __name__ == "__main__":
    analyze_db()
