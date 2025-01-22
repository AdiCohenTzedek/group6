from flask import Blueprint, render_template
from flask import render_template, redirect, url_for


about_us = Blueprint(
    'about_us',
    __name__,
    static_folder='static',
    static_url_path='/pages/about_us',
    template_folder='templates'
)


# Routes
@about_us.route('/about_us')
def about_us_func():
    return render_template('about_us.html')
