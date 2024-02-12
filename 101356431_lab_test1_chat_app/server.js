const mongoose = require('mongoose')
const express = require('express')
const socketIo = require('socket.io')
const app = express()
const http = require('http').createServer(app)
const signupRoutes = require('./routes/signupRoute')
const ioServer = socketIo(http)
const Messages = require('./models/messages')

const DB_CONNECTION_STRING = "mongodb+srv://admin:pass921@cluster0.ydy4wmd.mongodb.net/COMP3133_LabTest1?retryWrites=true&w=majority"

mongoose.connect(DB_CONNECTION_STRING, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

app.use(express.json());
app.use(express.static('public'))

app.use('/', signupRoutes)

app.get('/messages/:room', async (req, res) => {
    const { room } = req.params
    try {
        const messages = await Messages.find({ room: room }).sort({ date_sent: 1 })
        res.json(messages)
    } catch (error) {
        console.error('Failed to fetch messages:', error)
        res.status(500).send('Server error while fetching messages')
    }
});

ioServer.on('connection', (socket) => {
    console.log(`New user connected: ${socket.id}`)
    
    socket.on('disconnect', () => {
        console.log('user disconnected')
    });

    socket.on('group_message', ({ group, username, message }) => { 
        const newMessage = new Messages({ 
            from_user: username, 
            room: group,
            message: message,
            date_sent: new Date()
        });

        newMessage.save().then(() => {
            ioServer.to(group).emit('group_message_client', { username, message })
        }).catch(err => console.error('Error saving message:', err))
    });

    socket.on('join_group', (room) => {
        console.log(`User ${socket.id} joined room ${room}`)
        socket.join(room)
    })

    socket.on('leave_group', (group) => {
        socket.leave(group)
    })
})

http.listen(3000, () => {
    console.log('Server is running on port 3000')
})
