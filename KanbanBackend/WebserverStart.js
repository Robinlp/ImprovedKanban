const webSocket = require('./Board/BoardWebSocket.js');
const express = require('Express');
const cors = require('cors');
const app = express();
const boardController = require('./Board/BoardController.js');
const userController = require('./User/UserController.js');
let fs = require('fs');
let https = require('https');
let privateKey = fs.readFileSync('../ssl/my-key.key','utf8');
let cert = fs.readFileSync('../ssl/my-crt.crt','utf8');

let certAndKey = {key:privateKey, cert:cert};
let httpsServer = https.createServer(certAndKey, app);
console.log("It is starting O.o");

webSocket.startWebsocket();
app.use(cors());
app.use(express.json());
app.use('/Board', boardController);
app.use('/User', userController);

//app.listen(8080);
httpsServer.listen(8080);


