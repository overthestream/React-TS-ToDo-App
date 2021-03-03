import { createConnection } from 'typeorm';
import * as express from 'express';
import * as api from './api/ToDoItem/ToDoApi';
// import bodyParser = require( 'body-parser');

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

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/items', api.getList);

app.post('/add/:title/:description', api.addItem);

app.put('/check/:id', api.checkItem);

app.put('/pin/:id', api.pinItem);

app.delete('/delete/:id', api.deleteItem);

export default app;
