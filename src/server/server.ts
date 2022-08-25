 import app from "../app";
 import { createServer } from "http";
 
 const port = (process.env.PORT || "3000");
 app.set("port", port);

 const server = createServer(app);
 
 server.listen(port, () => console.log('server is running on port 3000'));

 
