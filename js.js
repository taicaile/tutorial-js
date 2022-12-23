
// 字符串
var strMsg = "This is a string";
console.log(strMsg.length)

// 字符串的拼接
console.log("沙漠" + "骆驼" + 123123 + true)
console.log(typeof strMsg)

// 字符串转换
console.log(String(123))
console.log(parseInt("123"))
console.log(parseFloat("3.14"))
console.log(Number("123.123"))

// 逻辑运算
console.log("---- 逻辑运算 ----")
// 逻辑 与，表达式，如果表达式1结果为真，则返回表达式2
console.log(123 && 456);

// 条件
if (1 == 1) {
    console.log("条件成立")
} else if (1 == 2) {
    console.log("条件不成立");
} else {
    console.log("条件不成立");
}

// 三元表达式
console.log(10 > 8 ? "yes" : "No")

// switch

// for loop

for (var i = 0; i < 10; i++) {
    console.log(i)
}

// while loop
var i = 0
while (i <= 10) {
    console.log(i)
    i++
}
// do...while loop

// Array
var arr = [ 1, 2, 3]
console.log(arr);
var arr = new Array();
arr.push(1)
arr.push(2)
arr.push(3)
console.log(arr)

for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}
arr.length = 100
console.log(arr)

var newarr = []
for(var i=0; i<3;i++){
    newarr[newarr.length] = arr[i]
}
console.log(newarr)

// Function

function two_sum(num1, num2){
    // 没有声明的变量，作用域是全局
    num3  = 100
    return num1 + num2
}
var two_sum1 = function(num1, num2){
    return num1 + num2
}
console.log(two_sum(1,2))
console.log(two_sum1(1,2))
console.log(num3)

// es5，js没有块级作用域，花括号中的变量在外部也生效。只有全局作用域和局部作用域（函数内）
