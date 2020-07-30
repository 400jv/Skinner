const { Router } = require('express');

const routes = Router();

module.exports = (dependencies) => {
  const { io } = dependencies;

  io.on('connection', (socket) => {
    if (socket.handshake.query.match) {
      console.log(`User connected ${socket.handshake.query.match}`);
      socket.join(`match ${socket.handshake.query.match}`);
    } else {
      console.log('a new client connected');
    }
  });

  routes.get('/user', (req, res) => {
    res.send('ok');
  });

  return routes;
};

// routes.post('/user', usersController.create);
// routes.get('/users', usersController.index);
// routes.get('/users/:id', usersController.filter);
