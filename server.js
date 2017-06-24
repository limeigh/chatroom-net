/**
 * 这个文件作为服务器
 * 建立连接的话，是客户端与服务器建立连接
 * 客户端是主动连接
 */
const net = require('net')

// 创建服务器对象
const server = net.createServer(connection => {
  // connection对象表示当前与服务器连接的客户端
  // 当有人与服务器建立连接的时候就会执行这里的代码
  console.log('有人连接了!')

  // 只要有人连接上了，我们就可以接收它发来的消息
  connection.on('data', msg => {
    console.log(msg.toString())
    // connection.write('这是我回给客户端的消息!')
    // connection.end()
  })
  // 监听断开连接的事件
  connection.on('end', () => {
    console.log('连接断开了')
  })
  process.stdin.on('data', msg => {
    connection.write(msg)
    // connection.end() // 断开连接
  })
})

// 服务器是需要监听一个端口的!
server.listen(3000)
