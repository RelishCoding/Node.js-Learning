//1. 导入 fs 模块
const fs = require('fs');

//2. 创建文件夹  mk：make制作  dir：directory文件夹
fs.mkdir('./html', err => {
  if(err) {
    console.log('创建失败~');
    return;
  }
  console.log('创建成功');
});

//2-2 递归创建
fs.mkdir('./a/b/c', {recursive: true},err => {
  if(err) {
    console.log('创建失败~');
    return;
  }
  console.log('创建成功');
});

//2-3 读取文件夹   read：读取  dir：directory 文件夹
fs.readdir('../资料', (err, data) => {
  if(err){
    console.log('读取失败');
    return;
  }
  console.log(data);
});

fs.readdir('./', (err, data) => {
  if(err){
    console.log('读取失败');
    return;
  }
  console.log(data);
});

//2-4 删除文件夹  rm：remove移除
fs.rmdir('./html', err => {
  if(err){
    console.log('删除失败');
    return;
  }
  console.log('删除成功');
});

//递归删除a文件夹及其子文件夹    
//rmdir方法不推荐使用
// fs.rmdir('./a', {recursive: true},err => {
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log('删除成功');
// });

//建议使用rm方法
fs.rm('./a', {recursive: true},err => {
  if(err){
    console.log(err);
    return;
  }
  console.log('删除成功');
});