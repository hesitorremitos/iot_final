/* 
 * MQTT-WebClient example for Web-IO 4.0
*/
var hostname = "driver.cloudmqtt.com";
var port = 38946;
var clientId = "webio4mqttexample";
clientId += new Date().getUTCMilliseconds();

var username = "ewdpapwh";
var password = "B4WTn_t0AJUN";
var subscription = "hector/latitud";
let subscription2 = "hector/longitud"

var username = "hector";
var password = "hero";
var subscription = "hector/ldr";
let publisher = "/hectorcc/led/status"

mqttClient = new Paho.MQTT.Client(hostname, port, clientId);
mqttClient.onMessageArrived = MessageArrived;
mqttClient.onConnectionLost = ConnectionLost;
Connect();

/*Initiates a connection to the MQTT broker*/
function Connect() {
	mqttClient.connect({
		onSuccess: Connected,
		onFailure: ConnectionFailed,
		keepAliveInterval: 10,
		userName: username,
		useSSL: true,
		password: password
	});
}

/*Callback for successful MQTT connection */
function Connected() {
	console.log("Connected");
	mqttClient.subscribe(subscription);
	mqttClient.subscribe(subscription2)
}

/*Callback for failed connection*/
function ConnectionFailed(res) {
	console.log("Connect failed:" + res.errorMessage);
}

/*Callback for lost connection*/
function ConnectionLost(res) {
	if (res.errorCode != 0) {
		console.log("Connection lost:" + res.errorMessage);
		Connect();
	}
}

/*Callback for incoming message processing */
function MessageArrived(message) {
	console.log(message.destinationName + " : " + message.payloadString);
	switch (message.destinationName) {
		case "hector/latitud":
			console.log("Latitud recibida")
			latitud = message.payloadString
			break;
		case "hector/longitud":
			console.log("Longitud recibida")
			longitud = message.payloadString
			break;
		default:
			displayClass = "unknown";
	}
}



