// PubNub = require("pubnub");
// var pubnub = new PubNub({
//     ssl           : true,  // <- enable TLS Tunneling over TCP
//     publishKey: "pub-c-a195a3fc-cfa2-4551-a24e-c8d4c08cfcf9",
//     subscribeKey: "sub-c-35707b44-653e-11e6-9c81-02ee2ddab7fe"
// });
//
//
// pubnub.publish(
//     {
//         message: 'my sp. message',
//         channel: 'my_channel'
//     },
//     function (status, response) {
//         if (status.error) {
//             console.log(status);
//         } else {
//             console.log("message Published w/ timetoken" + " " +response.timetoken );
//         }
//     }
// );