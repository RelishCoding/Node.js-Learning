//导入 http 模块
const http = require('http');

//创建服务对象
const server = http.createServer((request, response) => {
  //1. 设置响应状态码
  response.statusCode = 203;
  response.statusCode = 404;
  //2. 响应状态的描述 
  response.statusMessage = 'iloveyou';
  //3. 响应头的设置
  response.setHeader('content-type', 'text/html;charset=utf-8');
  response.setHeader('Server', 'Node.js');
  response.setHeader('myHeader', 'test test test');//自定义响应头
  response.setHeader('test', ['a','b','c']);//设置多个同名响应头
  //4. 响应体的设置
  response.write('I');
  response.write('love');
  response.write('you');
  response.write('forever');
  response.end('love'); //一般用write设置后end中不再设置内容
  //response.end('xxx'); //回调函数中必须设置end方法且只能设置一个
});

//监听端口, 启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
});
