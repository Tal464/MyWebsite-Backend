import { Router } from 'express';
import Controller from '../Controller/Controller.js';

const getRouter = Router();
getRouter.get('/', Controller.getData);
export default getRouter;
