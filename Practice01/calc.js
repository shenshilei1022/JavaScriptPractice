function getSum() {
    // 注意这里直接得到的值是字符串类型，要转换成Number类型进行计算
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseFloat(num1) + parseFloat(num2);
    document.getElementById("sum").value = sum;
}