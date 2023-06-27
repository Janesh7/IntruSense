import cv2
import csv
from flask import Flask, render_template, Response, request, redirect, url_for

app = Flask(__name__)

def generate_frames():
    camera = cv2.VideoCapture(0)  # Change the parameter to the desired camera index, if necessary

    while True:
        success, frame = camera.read()  # Read video frames

        if not success:
            break

        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # Generate video stream frames

    camera.release()


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
    with open('flask-server\Past_intrusion.csv', 'r') as file:
        reader = csv.reader(file)
        table_data = list(reader)
    return render_template('index.html', table_data=table_data)


if __name__ == '__main__':
    app.run(debug=True)
