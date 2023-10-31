import getRouter from './Router/Router.js';
import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());
app.use('/', getRouter);

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});