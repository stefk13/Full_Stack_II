var express = require('express');
var app = express();
const PORT = 8088

//Start express Server
const server = app.listen(PORT, () => {
    console.log(`Chat app running on port: ${PORT}`);
});

var io = require('socket.io')(server);

//Expose the node_modules folder as static resources (to access socket.io.js in the browser)
//app.use('/', express.static('node_modules'));

//Register the index route of your app that returns the HTML file
app.get('/',  (req, res) => {
    console.log("Home Page");
    res.sendFile(__dirname + '/index.html');
});

//Get new connection from Client
io.on("connection", (socket) => {
    console.log("New Client Connected...")
    //Send welcome msg to client
    socket.emit("welcome", "Welcome to Chat app")

    const news = [
        { title: 'The cure of the Sadness is to play Videogames',date:'04.10.2016'},
        { title: 'Batman saves Racoon City, the Joker is infected once again',date:'05.10.2016'},
        { title: "Deadpool doesn't want to do a third part of the franchise",date:'05.10.2016'},
        { title: 'Quicksilver demand Warner Bros. due to plagiarism with Speedy Gonzales',date:'04.10.2016'},
    ];

    socket.emit("latest-news", news)

    socket.on("news-received", data => {
        console.log(data)
    })
})