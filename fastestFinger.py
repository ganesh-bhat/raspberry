import RPi.GPIO as GPIO
import random
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setup(15, GPIO.OUT, initial=GPIO.LOW)

GPIO.setup(16, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(18, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

try:
    while True :
        print "Starting again"
        randomTime = random.randint(1,10)
        print randomTime
        time.sleep(randomTime)
        GPIO.output(15, GPIO.HIGH)

        
        while True:
            value1 = GPIO.input(16)
            value2 = GPIO.input(18)
            if value1 > value2:
                print "player1 won"
                #reset
                value1 = 0
                value2 = 0
                GPIO.output(15, GPIO.LOW)
                break;
            elif value2 > value1:
                print "player2 won"
                #reset
                value1 = 0
                value2 = 0
                GPIO.output(15, GPIO.LOW)
                break;
                  
except KeyboardInterrupt:
    GPIO.cleanup()

    