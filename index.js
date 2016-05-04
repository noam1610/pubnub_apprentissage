console.log('Debut');

var pubnub = require('pubnub')({
    ssl: true, // <- enable TLS Tunneling over TCP
    publish_key: 'pub-c-b0d3c374-2b10-48b8-b7e5-d4126e75f264',
    subscribe_key: 'sub-c-b6d8cbc2-11d9-11e6-8975-0619f8945a4f',
    error: function(error) {        
        console.log('Error:', error);    
    }
});

var message = {
    'Hello': 'World!'
};

pubnub.publish({
    channel: 'Channel-ztf2z42nx',
    message: message,
    callback: function(e) {
        console.log('SUCCESS!', e);
    },
    error: function(e) {
        console.log('FAILED! RETRY PUBLISH!', e);
    }
});

pubnub.subscribe({
    channel: 'Channel-ztf2z42nx',
    message: function(message) {
        console.log('message', message);
    },
    error: function(error) {
        console.log('error', JSON.stringify(error));
    }
});

console.log('Fin');
