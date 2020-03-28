function format() {
    var locate = document.getElementById("locate").value;
    var companyType = document.getElementById("companyType").value;
    var companyName = document.getElementById("companyName").value;
    var bossName = document.getElementById("bossName").value;
    var totalMoney = document.getElementById("totalMoney").value;
    var product = document.getElementById("product").value;
    var moneyUnit = document.getElementById("moneyUnit").value;
    var result = locate + "最大" + companyType + companyName + "倒闭了，王八蛋老板" + bossName + "吃喝嫖赌，欠下了" + totalMoney + "个亿，带着他的小姨子跑了！我们没有办法，拿着" + product + "抵工资！原价都是一" + moneyUnit + "多、两" + moneyUnit + "多、三" + moneyUnit + "多的" + product + "，现在全部只卖二十块，统统只要二十块！" + bossName + "王八蛋，你不是人！我们辛辛苦苦给你干了大半年，你不发工资，你还我血汗钱，还我血汗钱！";
    document.getElementById("result").value = result;
}