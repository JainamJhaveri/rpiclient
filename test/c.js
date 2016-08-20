PubNub = require('pubnub');

var pubnub = new PubNub({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publishKey: "",
    subscribeKey: "sub-c-35707b44-653e-11e6-9c81-02ee2ddab7fe"
});


pubnub.addListener({
    message: function(msg) {
        console.log(">>>>> " + msg.message);
    }
});

pubnub.subscribe({
    channels: ['my_channel']
});
