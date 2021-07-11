'use strict';

// ========================= 1ST PARTY DEPENDENCIES =========================
const Events = require('events');
const events = new Events();

// events.on('hi', (payload) => {
//   console.log('hello', payload.name);
// })

// events.emit('hi', { name: 'mohammad' })

module.exports = events;