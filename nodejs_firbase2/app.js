//Loading Firebase Package
var firebase = require("firebase-admin");


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
	} else {
		console.log('turning off');
	}
},error=>{
	console.log('error:'+error);
})