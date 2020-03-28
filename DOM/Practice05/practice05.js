function deleteData(className) {
    var flag = confirm("确定删除？");
    if (flag) {
        var trElement = document.getElementsByClassName(className)[0];
        var parent = trElement.parentElement;
        // 删除节点
        parent.removeChild(trElement);
    }
}

function isEmpty() {
    var user = document.getElementById("user").value;
    var pwd = document.getElementById("pwd").value;
    if (0 == user.length) {
        alert("用户名不能为空！");
    } else if (0 == pwd.length) {
        alert("密码不能为空！");
    } else {
        alert("登录成功！");
    }
}

function judgeAccountLength() {
    var account = document.getElementById("account").value;
    if (3 > account.length) {
        alert("用户名至少需要3位！");
    } else {
        alert("注册成功！");
    }
}

function judgeAge() {
    var age = document.getElementById("age").value;
    if (0 == age.length) {
        alert("年龄不能为空！");
    } else {
        var ageNum = new Number(age);
        if (isNaN(ageNum)) {
            alert("输入包含非法字符！");
        } else {
            var numList = age.split(".");
            if (numList.length > 1) {
                alert("输入包含小数！");
            } else {
                alert("注册成功！");
            }
        }
    }
}

function judgeEmail() {
    var email = document.getElementById("email").value;
    var regEmail = /^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/;
    var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9\._-]+[a-zA-Z0-9_-]+$/;
    if (re.test(email)) {
        alert("注册成功！");
    } else {
        alert("请输入正确的邮箱格式！");
    }
}

function hide() {
    var div1 = document.getElementById("closable");
    div1.style.display = "none";
}

function show() {
    var div1 = document.getElementById("closable");
    div1.style.display = "block";
}