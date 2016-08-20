var app = require("express")();
var http = require('http').Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 8080;
PubNub = require('pubnub');

var pubnub = new PubNub({
    ssl: true,  // <- enable TLS Tunneling over TCP
    publishKey: "",
    subscribeKey: "sub-c-35707b44-653e-11e6-9c81-02ee2ddab7fe"
});

pubnub.subscribe({
    channels: ['my_channel']
});

pubnub.addListener({
    message: function (msgObject) {
        console.log(">>>>> " + msgObject.message);
        io.emit('event_latest', msgObject.message);
    }
});

http.listen(port, function () {
    console.log("Listening on 8080");
});

app.get("/", function (req, res) {
    console.log("A user is connected");
    res.sendFile(__dirname + '/index.html');
});