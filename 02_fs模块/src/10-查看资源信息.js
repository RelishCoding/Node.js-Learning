//1. 导入 fs 模块
const fs = require('fs');

//2. stat 方法  status缩写，意为状态
fs.stat('../资料/笑看风云.mp4', (err, data) => {
  if(err){
    console.log('操作失败');
    return;
  }
  // console.log(data);
  // isFile 
  console.log(data.isFile());
  // isDirectory
  console.log(data.isDirectory());

});