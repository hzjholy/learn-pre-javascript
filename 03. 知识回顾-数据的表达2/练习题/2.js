/*
 * @Description:
 * @Version: 1.0
 * @Author: hzj
 * @Date: 2024-03-17 06:08:26
 * @LastEditors: hzj
 * @LastEditTime: 2024-03-17 06:49:39
 */
/* 
于谦，72岁,男，职业捧哏，手机号13812341234，江湖人称谦哥，家住北京八大胡同。
其父亲王老爷子是一位古汉语专家，爱好洗澡

用字面量描述上面的数据
*/

var personInfo = {
  name: "于谦",
  age: "72",
  // alisName: "谦哥",
  nickname: "谦哥",
  // address: "北京八大胡同",
  address: {
    city: "北京",
    road: "八大胡同",
  },
  // sex: "男",
  isMale: true,
  work: "捧眼",
  job: "13812341234", // 使用字符串还是数字？在于这个读法
  // father: {
  //   name: "王老爷子",
  //   work: "古汉语专家",
  //   like: "爱好洗澡",
  // },
  parent: {
    name: "王老爷子",
    job: "古汉语专家",
    love: "洗澡",
  },
};

// 这是一个表达式，用符号连接的都是表达式
console.log(personInfo.address.road);