import cv2
import csv
from flask import Flask, render_template, Response, request, redirect, url_for
from recognize_video import generate_frames,cleanup,video_feed_active

app = Flask(__name__,template_folder='templates', static_folder='static')


@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')  # Stream the video frames

@app.route('/process', methods=['POST'])
def process():
    name = request.form['name']
    # Run your script using the name here
    # Replace the print statement with your script logic
    print("Running script for name: "+name)
    return redirect(url_for('dashboard'))

@app.route('/')
def dashboard():
    with open('identified_persons.csv', 'r') as file:
        reader = csv.reader(file)
        table_data = list(reader)
    return render_template('dashboard.html', table_data=table_data)


if __name__ == '__main__':
    app.run()

