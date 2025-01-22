from flask import Blueprint, render_template
from flask import render_template, redirect, url_for

# about blueprint definition
home_page = Blueprint(
    'home_page',
    __name__,
    static_folder='static',
    static_url_path='/home_page',
    template_folder='templates'
)


@home_page.route('/')
@home_page.route('/home_page')
def home_page_func():
    # return "hi"
    return render_template('homepage.html')