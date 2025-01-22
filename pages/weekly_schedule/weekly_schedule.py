from flask import Blueprint, render_template
from flask import render_template, redirect, url_for

# about blueprint definition
weekly_schedule = Blueprint(
    'weekly_schedule',
    __name__,
    static_folder='static',
    static_url_path='/pages/weekly_schedule',
    template_folder='templates'
)


# Routes
@weekly_schedule.route('/weekly_schedule')
def weekly_schedule_func():
    return render_template('weekly_schedule.html')
