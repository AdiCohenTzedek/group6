from flask import Flask
from flask import redirect, url_for
from flask import render_template

###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')

from pages.home_page.home_page import home_page

app.register_blueprint(home_page)


from pages.login.login import login

app.register_blueprint(login)

from pages.about_us.about_us import about_us

app.register_blueprint(about_us)

from pages.weekly_schedule.weekly_schedule import weekly_schedule

app.register_blueprint(weekly_schedule)

from pages.choose_workout.choose_workout import choose_workout

app.register_blueprint(choose_workout)


from pages.sign_up.sign_up import sign_up

app.register_blueprint(sign_up)

