/**
 * 客户端的代码
 * 用来与服务器建立连接，并发消息给服务器
 */
const net = require('net')

// 1.连接服务器
const client = net.connect({
  port: 3000 // 这是服务器监听的端口
},
() => {
  // 录与服务器连接之后就会执行这个函数
  console.log('与服务连接..!')
  // 给服务器发消息
  // client.write('发给服务器的消息')

  // 这里的on方法，可以用来监听我们在命令行输入的事件
  // 只我们要在命令行输入内容并按下的回车，就会触发这个data事件
  process.stdin.on('data', msg => {
    // console.log('123')
    // 这个msg是我们在命令行中输入的内容!
    client.write(msg)
  })

  // 接收消息
  client.on('data', msg => {
    console.log(msg.toString())
  })
  // xx 协议
  client.on('end', () => {
    console.log('连接断开了!')
  })
})
