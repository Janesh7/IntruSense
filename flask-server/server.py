import cv2
from flask import Flask, render_template, Response

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

if __name__ == '__main__':
    app.run(debug=True)
