const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors')

app.use(cors())

server.listen(process.env.PORT, () => {
    console.log('Running on port', process.env.PORT);
    
})
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
  res.send('Hello world')
});

io.on('connection', function (socket) {
  socket.on('slideImage', function (data) {
    io.emit('changeImage', data)
  })
})
