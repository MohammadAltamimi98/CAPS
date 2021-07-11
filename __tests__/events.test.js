'use strict';

const events = require('../events');
require('../caps');
require('../driver');
require('../vendor');

describe('logger', () => {
  let consoleSpy;

  const payload = {
    store: 'Bartoletti - Heathcote',
    orderID: '68e77217-b8ca-40ea-9d7e-e9ab06116ace',
    customer: 'Craig Brekke',
    address: '139 Guadalupe Streets'
  };

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    jest.useFakeTimers();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('pickup', () => {
    events.emit('pickup', payload);
    jest.runAllTimers();
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(`DRIVER: picked up ${payload.orderID}`);
  });

  it('in-transit', () => {
    events.emit('in-transit', payload);
    jest.runAllTimers();
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(`DRIVER: delivered up  ${payload.orderID}`);
  });

  it('delivered', () => {
    events.emit('delivered', payload);
    jest.runAllTimers();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
