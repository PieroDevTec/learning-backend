const express = require('express');
const message = require('../components/message/network');
const task = require('../components/task/network');

const routers = function(server) {
  server.use('/message',message);
  server.use('/task',task);
}

module.exports = routers;