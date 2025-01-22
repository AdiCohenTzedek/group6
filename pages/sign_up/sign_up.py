from flask import Blueprint, render_template
from flask import render_template, redirect, url_for


sign_up = Blueprint(
    'sign_up',
    __name__,
    static_folder='static',
    static_url_path='/pages/sign_up',
    template_folder='templates'
)


# Routes
@sign_up.route('/sign_up')
def sign_up_func():
    return render_template('sign_up.html')


