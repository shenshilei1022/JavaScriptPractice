function showMenu(className) {
    var menu = document.getElementsByClassName(className)[1];
    var totalMenu = document.getElementsByClassName("d");
    for (var i = 0; i < totalMenu.length; i++) {
        totalMenu[i].style.display = "none";
    }
    menu.style.display = "block";
}

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

function checkClick() {
    var checkboxes = document.getElementsByClassName("check");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
}

function reverseSelect() {
    var checkboxes = document.getElementsByClassName("check");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = ! checkboxes[i].checked;
    }
}