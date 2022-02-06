import { Express } from 'express';

export const appRoute = (app: Express): void => {
  app.get('/', (req, res) => {
    res.send({ value: 'Welcome to back-end!' });
  });
};
