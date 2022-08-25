import express from "express";
import { router } from './router'

const app = express();

app.use(router);

app.use(express.json());

export default app;