from picamera import PiCamera
from time import sleep

camera = PiCamera()
camera.capture('/tmp/picture.jpg')
