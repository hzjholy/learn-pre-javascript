/*
 * @Description:
 * @Version: 1.0
 * @Author: hzj
 * @Date: 2024-03-17 06:08:26
 * @LastEditors: hzj
 * @LastEditTime: 2024-03-17 12:10:31
 */
/* 
  不使用if
  根据身高、体重，计算健康状况

  健康状况取决于BMI   BMI=体重÷身高的平方。（体重单位：千克；身高单位：米。）
  BMI的正常值在20~25之间，少于20偏瘦，高于25偏胖

  输出 正常、偏瘦、偏胖
*/
var height = 185, // 身高（厘米）
  weight = 100; // 体重（千克）

/**
 * 体重 / (身高 * 身高)
 * 20-25 正常
 * <20   偏瘦
 * >25   偏胖
 */

// var BMI = weight / ((height / 100) ^ 2);
// 在 JavaScript 中，^ 运算符并不表示幂运算，如果要进行乘方运算，可以使用 Math.pow() 函数或 ** 运算符
var BMI = weight / (height / 100) ** 2;
// var result = BMI < 20 ? "偏瘦" : 25 >= BMI >= 20 ? "正常" : "偏胖";
var result = BMI >= 20 && BMI <= 25 ? "正常" : BMI < 20 ? "偏瘦" : "偏胖";
console.log(BMI);
console.log(result);
