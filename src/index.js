import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from './register.logger.js';
import proprietarioRouter from './routers/proprietario.router.js';
import animalRouter from './routers/animal.router.js';
import servicoRouter from './routers/servico.router.js';
import postsRouter from './routers/post.router.js';

dotenv.config();
global.logger = logger;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/proprietarios', proprietarioRouter);
app.use('/animais', animalRouter);
app.use('/servicos', servicoRouter);
app.use('/posts', postsRouter);

app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
});

app.listen(process.env.PORT, () => console.log(`API started in ${process.env.PORT}`));