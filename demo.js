// 定义getForm函数
function getForm(){
    // 获取myform中number1和number2的值
    var number1 = myform.number1.value;
    var number2 = myform.number2.value;
    var list = ["0.0000", "0.0000", "1.0000", "0.8660", "0.7071", "0.5878", "0.5000", "0.4339", "0.3827", "0.3420", "0.3090", "0.2818", "0.2588", "0.2394", "0.2224", "0.2079", "0.1951", "0.1831", "0.1736", "0.1645", "0.1564", "0.1490", "0.1432", "0.1316", "0.1305", "0.1255", "0.1204", "0.1161", "0.1121", "0.1080", "0.1045"];
    var number0 = list[number1];
    // 计算
    var answer = number0 * number2;
    // 弹窗输出结果
    alert(" 弦长应为： " + answer);
}
