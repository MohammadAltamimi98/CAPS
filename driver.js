'use strict';

const events = require('./events');


// after two one (1000 timeout)
// 1. log to inform that  the driver picked the order
// 2. emit a message a log for in transit to inform the company

events.on('pickup', async (payload) => {

  await setTimeout(() => {
    console.log(`DRIVER: picked up order ${payload.orderId}`);
    events.emit('in-transit', payload);
  }, 1000);



  // after 3 seconds 
  // 1. log "delivered"
  // 2. emit delivered with the same payload


  await setTimeout(() => {
    console.log(`DRIVER: Just Delivered ${payload.orderId}`);
    console.log(`VENDOR:Thank you for delivering ${payload.orderID} `);

    events.emit('delivered', { orderId: payload.orderId, storeName: payload.storeName, customerName: payload.customerName, address: payload.address });

  }, 3000);
});