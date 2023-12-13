let ledStatus = "OFF"

function OnOff2() {
	console.log('evento click');
	switch (ledStatus) {
		case "OFF":
			message = new Paho.MQTT.Message(ledStatus);
			message.destinationName = publisher;
			mqttClient.send(message);
			ledStatus = 'ON';
			break;
		case "ON":
			message = new Paho.MQTT.Message(ledStatus);
			message.destinationName = publisher;
			mqttClient.send(message);
			ledStatus = 'OFF';
			break
		default:
			console.log("Other value")
	}
};

