function addMessage() {
    var id = getValue("ID");
    var name = getValue("Name");
    var hp = getValue("HP");
    var damage = getValue("damage");

    // 创建table元素
    var tableElement = document.createElement("table");
    // 创建tr元素
    var trElement = document.createElement("tr");
    // 创建td元素
    var tdElement1 = document.createElement("td");
    var tdElement2 = document.createElement("td");
    var tdElement3 = document.createElement("td");
    var tdElement4 = document.createElement("td");
    // 创建文本节点
    var idText = document.createTextNode(id);
    var nameText = document.createTextNode(name);
    var hpText = document.createTextNode(hp);
    var damageText = document.createTextNode(damage);
    // 添加到td元素中
    tdElement1.appendChild(idText);
    tdElement2.appendChild(nameText);
    tdElement3.appendChild(hpText);
    tdElement4.appendChild(damageText);
    // 添加到tr元素中
    trElement.appendChild(tdElement1);
    trElement.appendChild(tdElement2);
    trElement.appendChild(tdElement3);
    trElement.appendChild(tdElement4);
    // 添加到table元素中
    tableElement.appendChild(trElement);

    var div = document.getElementById("dynamicTable");
    div.appendChild(tableElement);

    // 清空输入框的值
    document.getElementById("ID").value = null;
    document.getElementById("Name").value = null;
    document.getElementById("HP").value = null;
    document.getElementById("damage").value = null;
}

function getValue(id) {
    var value = document.getElementById(id).value;
    return value;
}