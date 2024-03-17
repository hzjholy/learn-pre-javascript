/* 
  不使用if，判断一个年份是否是闰年，输出是或否

  闰年规则：
  1. 4年一闰，百年不闰
  2. 400年必闰
  上述两点满足其一即可
*/
var year = 1900;

// 判断变量year是否是闰年

/**
 * 1.除以4的余数为0，并且，除以100的余数不为0
 * 2.除以400的余数为0
 * 条件1 || 条件2
 */
// var result = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// result = result ? "是" : "否";
// year = !(year % 4) || false;

var result =
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "是" : "否";

  
console.log("result", result);
