function addMessage() {
    var id = getValue("ID");
    var name = getValue("Name");
    var hp = getValue("HP");
    var damage = getValue("damage");

    if (0 == id.length || 0 == name.length || 0 == hp.length || 0 == damage.length) {
        alert("有选项未填写！");
    } else {
        // 创建table元素
        var tableElement = document.createElement("table");

        var className = document.createAttribute("class");
        className.nodeValue = "sort";
        tableElement.setAttributeNode(className);

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

    
}

function getValue(id) {
    var value = document.getElementById(id).value;
    return value;
}


var col = 0;
var reverse = false;
function sort(column) {
    if (col == column) {
        reverse = !reverse;
    }
    col = column;
    var div = document.getElementById("dynamicTable");
    // 提取出来Collection
    var tableCollection = document.getElementsByClassName("sort");
    // 因为Collection没有自带的排序函数，所以需要转换为数组，利用数组的排序。
    var tables = new Array();
    for (var i = 0; i < tableCollection.length; i++) {
        tables.push(tableCollection[i]);
    }
    tables.sort(comparator);
    for (var i = 0; i <tables.length; i++) {
        div.appendChild(tables[i]);
    }
}

function comparator(table1, table2) {
    var td1 = table1.children[0].children[col].innerHTML;
    var td2 = table2.children[0].children[col].innerHTML;
    if (reverse) {
        return td2.localeCompare(td1);
    } else {
        return td1.localeCompare(td2);
    }
}