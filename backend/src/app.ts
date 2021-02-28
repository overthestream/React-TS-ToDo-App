import { createConnection } from 'typeorm';

import express = require('express');

const app = express();

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
