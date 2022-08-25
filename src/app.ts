import express from "express";
import { createServer } from "http";
import { router } from './router'

const app = express();

app.use(express.json())
;
app.use(router);

const port = (process.env.PORT || "3000");
 
app.set("port", port);

const server = createServer(app);

server.listen(port, () => 
console.log(`server is running on port ${port}`))

export default app;