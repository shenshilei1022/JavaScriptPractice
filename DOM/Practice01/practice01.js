function getElement(id) {
    var value = document.getElementById(id);
    return value;
}

function checkAccount() {
    var account = getElement("inputUser").value;
    var noUser = getElement("noUser");
    var yesUser = getElement("yesUser");
    // 开始设置noUser和yesUser为不显示
    noUser.style.display = "none";
    yesUser.style.display = "none";

    var firstChar = account.charAt(0);
    if (0 == account.length){
        noUser.style.display = "none";
        yesUser.style.display = "none";
    }else if ("a" == firstChar || "A" == firstChar) {
        noUser.style.display = "inline";
    }else {
        yesUser.style.display = "inline";
    }
}

function switch1() {
    var img = getElement("img");
    img.src = "1.jpg";
}

function switch2() {
    var img = getElement("img");
    img.attributes["src"].nodeValue = "0.jpg";
}

function judgeInt() {
    var numStr = getElement("num").value;
    var result = getElement("result");
    if (0 == numStr.length) {
        result.childNodes[0].nodeValue = "输入为空！";
    } else {
        var num = new Number(numStr);
        if (isNaN(num) == true) {
            result.childNodes[0].nodeValue = "输入包含非数字！";
        } else {
            var numList = numStr.split(".");
            if (2 == numList.length) {
                result.childNodes[0].nodeValue = "输入为小数！";
            } else {
                result.childNodes[0].nodeValue = "输入为整数~";
            }
        }
    }
}