import { createConnection } from 'typeorm';
import * as express from 'express';
import * as api from './api/ToDoApi';

const app = express();

app.get('/', api.getList);

app.post('/add/:title/:description', api.addItem);

app.put('/check/:id', api.checkItem);

app.put('/pin/:id', api.pinItem);

app.delete('/delete/:id', api.deleteItem);

const initDatabase = async (): Promise<void> => {
  try {
    await createConnection();
    console.log('database connected!');
  } catch (error) {
    console.error(error);
  }
};

initDatabase();

export default app;
