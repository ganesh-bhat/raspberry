//Loading Firebase Package
var firebase = require("firebase-admin");
var Gpio = require('onoff').Gpio; 
var LED = new Gpio(17, 'out');


/**
* Update your Firebase Project
* Credentials and Firebase Database
* URL
*/
var serviceAccount = require("./iotdemo-633a7-firebase-adminsdk-4hg0j-75f6bbe37a.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://iotdemo-633a7.firebaseio.com"
});


var db = firebase.database();
var ref = db.ref('devices/light');  //Set the current directory you are working in

ref.on('value',(value)=>{
	var data = value.val();
	if(data === 'on') {
		console.log('turning on');
		LED.writeSync(1);
	} else {
		console.log('turning off');
		LED.writeSync(0);
	}
},error=>{
	console.log('error:'+error);
})

function endBlink() { //function to stop blinking // Stop blink intervals
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources
}

setTimeout(endBlink, 10*60*1000);

