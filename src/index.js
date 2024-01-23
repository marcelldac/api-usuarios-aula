//import express from 'express';
const express = require('express');
const cors = require('cors');
const userService = require('./services/user-service');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/usuarios', userService.read);
app.post('/usuarios', userService.create);
app.put('/usuarios/:id', userService.update);
app.patch('/usuarios/:id', userService.updateOneAttr);
app.delete('/usuarios/:id', userService.remove);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
