import { createConnection } from 'typeorm';
import * as express from 'express';

import cors = require('cors');
// eslint-disable-next-line import/first
import * as api from './api/ToDoItem/ToDoApi';

const initDatabase = async (): Promise<void> => {
  try {
    await createConnection();
    console.log('database connected!');
  } catch (error) {
    console.error(error);
  }
};

initDatabase();
const app = express();

app.use(express.json());

app.use(cors());

app.get('/items', api.getList);

app.post('/add/:title/:description', api.addItem);

app.put('/check/:id', api.checkItem);

app.put('/pin/:id', api.pinItem);

app.delete('/delete/:id', api.deleteItem);

app.use(express.static('public'))

export default app;
