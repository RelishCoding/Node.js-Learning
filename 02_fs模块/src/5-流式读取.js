//1. 引入 fs 模块
const fs = require('fs');

//2. 创建读取流对象
const rs = fs.createReadStream('../资料/笑看风云.mp4');

//3. 绑定 data 事件，获取读取到的数据   
rs.on('data', chunk => {  //chunk：块儿，大块儿
  console.log(chunk.length); // 每次从文件中读取65536字节即 64KB 的数据
  // console.log(chunk.toString()); // 65536 字节 => 64KB
});

//4. end  可选事件
rs.on('end', () => {
  console.log('读取完成');
});