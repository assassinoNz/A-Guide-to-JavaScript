//USING EXPRESS, BODY PARSER, EXPRESS_SESSION MODULES
//Requiring Express
const express = require("express");
const app = express();
//Requiring Body-Parser
const jsonParser = require("body-parser").json();
//Requiring Expression-Session
const session = require("express-session");
const sessionMiddleware = session({
    secret: Math.random().toString(),
    saveUninitialized: false,
    resave: true
});

//EXPRESS INITIALIZATION
//Use "Public" directory to serve static content
app.use(express.static("./Public"));
//Initialize session usage
app.use(sessionMiddleware);
//Start express server on port 80
app.listen(80);
console.log(`Express server status: Ready, listening on port ${port}`);

//EXPRESS ROUTING (SENDING FILES)
app.route("/sendingFiles")
    .all(function (request, response) {
        response.sendFile("./Public/index.html");
    });

//EXPRESS ROUTING (SENDING JSON RESPONSE)
app.route("/sendingResponse")
    .get(function (request, response) {
        response.json({
            serverMessage: "You can send whatever you like using JavaScript objects"
        })
    });

//EXPRESS ROUTING (READING JSON REQUEST)
app.route("/readingRequest")
    .get(function (request, response) {
        console.log(request.body.clientMessage);
        response.json({
            serverMessage: "You can send whatever you like using JavaScript objects"
        })
    });

//EXPRESS ROUTING (READING SESSION)
app.route("/readingSession")
    .get(function (request, response) {
        console.log(request.session.sessionData);
        response.json({
            serverMessage: "You can send whatever you like using JavaScript objects"
        })
    });

//EXPRESS ROUTING (READING SESSION)
app.route("/writingSession")
    .get(function (request, response) {
        request.session.myProperty = "We can add any property to the 'session' object like any JavaScript object";
        response.json({
            serverMessage: "You can send whatever you like using JavaScript objects"
        })
    });

