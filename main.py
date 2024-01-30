from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/projects')
def projects():
    return render_template('projects.html')


@app.route('/events')
def events():
    return render_template('events.html')


@app.route('/team')
def team():
    return render_template('team.html')


@app.route('/hackathon')
def hackathon():
    return render_template('hackathon.html')


@app.route('/blog')
def blog():
    return render_template('blog.html')


@app.route('/social-media')
def social_media():
    return render_template('social-media.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/tailwind')
def tailwind():
    return render_template('Tailwind_test.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
