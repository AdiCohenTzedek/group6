from flask import Blueprint, render_template
from flask import render_template, redirect, url_for

# about blueprint definition
choose_workout = Blueprint(
    'choose_workout',
    __name__,
    static_folder='static',
    static_url_path='/pages/choose_workout',
    template_folder='templates'
)


# Routes
@choose_workout.route('/choose_workout')
def choose_workout_func():
    return render_template('choose_workout.html')
