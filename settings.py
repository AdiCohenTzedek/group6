import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Flask environment configurations
FLASK_ENV = os.environ.get('FLASK_ENV', 'production')
DEBUG = os.environ.get('DEBUG', 'FALSE').lower() in ['true', '1']
FLASK_RUN_HOST = os.environ.get('FLASK_RUN_HOST', '127.0.0.1')
FLASK_RUN_PORT = int(os.environ.get('FLASK_RUN_PORT', 5000))

# Secret key setting for Flask sessions
SECRET_KEY = os.environ.get('SECRET_KEY', 'default_secret_key')

# Database configuration
DB_URI = os.environ.get('DB_URI', '')

# Additional DB configuration (optional split)
DB_CONFIG = {
    'host': os.environ.get('DB_HOST', 'localhost'),
    'user': os.environ.get('DB_USER', ''),
    'password': os.environ.get('DB_PASSWORD', ''),
    'database': os.environ.get('DB_NAME', '')
}
