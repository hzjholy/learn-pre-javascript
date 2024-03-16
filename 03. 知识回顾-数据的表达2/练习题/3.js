/* 
  有一个非常特别的对象，它的键值对是：
  0: 'a'
  1: 'b'
  how are you: 'fine thank you'
*/
// 用字面量表示该对象，然后分别读取它的每个属性输出
var specilObj = {
  '0': "a",
  '1': "b",
  "how are you": "fine thank you",
  name: 'hzj'
};
console.log("specilObj",specilObj);
console.log("001", specilObj["0"]);
console.log("002", specilObj["b"]);
console.log("003", specilObj["how are you"]);

console.log("名字",specilObj['how are you']);
