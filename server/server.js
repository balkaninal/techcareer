const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();
const cors = require('cors');
const path = require('path');



//Socket Io Real Time Messaging Enviroment Setup

/*
const http = require('http')
const server = http.createServer(app)
const socket = require('socket.io')
const io = socket(server)

io.on("connection", socket => {

    socket.emit("your id", socket.id)
    socket.on("send message", body => {
        io.emit("message", body)
    })
})

*/

//Enviroment
app.use(cors());
dotenv.config()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Database
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {

    console.log('MongoDB connected!!');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});



// Routes

const router = require('./Route/userRouters')
const devRouter = require('./Route/devRouter')
const postRouter = require('./Route/postRouter')
const messageRoomRouter = require('./Route/messageRoomRouter')


app.use('/api/user', router)
//app.use('/dev', devRouter)
app.use('/api/post', postRouter)
app.use('/api/messageroom', messageRoomRouter)

console.log(__dirname)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))


    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    )

} else{
    app.get('/', (req, res)=> {
        res.send('Api is running...')
    })
}


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})