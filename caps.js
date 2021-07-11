'use strict';
const events = require('./events');
require('./driver');
require('./vendor');


// ------------ pick up -----------

events.on('capPickup', payload => {
  console.log('EVENT:', {
    event: 'pick-up',
    time: new Date(),
    payload: payload
  });

});
events.emit('DriverPickup', payload);

// -----------transit -------------

events.on('capInTransit', payload => {
  console.log('EVENT:', {
    event: 'transit',
    time: new Date(),
    payload: payload
  });
});

events.emit('driverInTransit', payload);


// ----------- delivered ---------
events.on('capDelivered', payload => {
  console.log('Event:', {
    event: 'delivered',
    time: new Date(),
    payload: payload
  });
});

events.emit('DriverDelivered', payload);