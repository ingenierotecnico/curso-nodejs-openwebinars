import net from 'net'


const server = net.createServer(socket => {
  socket.on('data', data => {
    console.log(data.toString())
    socket.write(`Me has llamado ${data.toString()}?`)
    socket.resume()
  })
})

server.on('error', err => {
  throw err
})

server.on('connect', () => {
  console.log('Socket connected')
})

server.listen(
  {
    host: 'localhost',
    port: 8000,
    exclusive: true
  },
  () => console.log('Servidor socket abierto en ', server.address())
)
