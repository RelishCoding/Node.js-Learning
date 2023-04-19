//buffer与字符串的转换
let buf_4=Buffer.from([105,108,111,118,101,121,111,117]);
console.log(buf_4.toString());//iloveyou

let buf=Buffer.from('hello');
console.log(buf);//<Buffer 68 65 6c 6c 6f>
console.log(buf.toString());//hello
console.log(buf[0]);//104
console.log(buf[0].toString(2));//1101000
buf[0]=95;
console.log(buf);//<Buffer 5f 65 6c 6c 6f>
console.log(buf.toString());//_ello

//溢出
let buf1=Buffer.from('hello');
console.log(buf1);//<Buffer 68 65 6c 6c 6f>
buf1[0]=361;//舍弃高位的数字
console.log(buf1)//<Buffer 69 65 6c 6c 6f>

//中文
let buf2=Buffer.from('你好');
console.log(buf2);//<Buffer e4 bd a0 e5 a5 bd>
