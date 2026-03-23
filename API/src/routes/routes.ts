import { Express } from 'express';
import express from 'express';
import person from './person.js';
import auth from './auth.js'; 

export default function (app: Express) {

  app.use(express.json());

  app.use('/api/person', person);
  app.use('/api/auth', auth);
}