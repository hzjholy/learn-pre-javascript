/*
 * @Description: 
 * @Version: 1.0
 * @Author: hzj
 * @Date: 2024-03-17 06:08:26
 * @LastEditors: hzj
 * @LastEditTime: 2024-03-17 07:09:30
 */
/**
 * 文档注释
 * 打印一个对象的某个属性
 * @param {object} obj 要打印的对象
 * @param {string} key 要打印的对象属性名
 */
function printProperty(obj, key) {
  // 完成该函数
  console.log(obj[key]);
}

var user = {
  name: 'monica',
  age: 17,
  sex: '女',
};

printProperty(user, 'name'); // 打印：monica
printProperty(user, 'age'); // 打印：17
printProperty(user, 'sex'); // 打印：女
