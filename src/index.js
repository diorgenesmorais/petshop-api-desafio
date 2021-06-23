import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from './register.logger.js';

dotenv.config();
global.logger = logger;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', (req, res, next) => {
    next({message: 'Teste padrão'});
});

app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
});

app.listen(process.env.PORT, () => console.log(`API started in ${process.env.PORT}`));