function getValue(id) {
    var value = document.getElementById(id).value;
    return parseFloat(value);
}

// 取幂
function getPower(num, power) {
    if (0 == power) {
        return 1;
    }else if (1 == power) {
        return num;
    }else {
        var result = 1;
        for (var i = 1; i <= power; i++) {
            result = result * num;
        }
        return result;
    }
}

// 求复利
function getCompoundInterest(rate, numberOfYears) {
    if (0 == numberOfYears || 1 == numberOfYears) {
        return 0;
    } else {
        var interestRate = 0;
        for (var i = numberOfYears-1; i > 0; i--) {
            interestRate += getPower(rate, i);
        }
        return interestRate;
    }
}

function calcProfit() {
    var principal = getValue("principal");
    var profitPerYear = getValue("profitPerYear");
    var numberOfYears = getValue("numberOfYears");
    var appendMoney = getValue("appendMoney");
    var sum1 = principal + appendMoney * (numberOfYears - 1);
    var sum3 = principal * getPower((1 + profitPerYear * 0.01), numberOfYears) + appendMoney * getCompoundInterest((1 + profitPerYear * 0.01), numberOfYears);
    var sum2 = sum3 - sum1;

    document.getElementById("sum1").value = sum1.toFixed(2);
    document.getElementById("sum2").value = sum2.toFixed(2);
    document.getElementById("sum3").value = sum3.toFixed(2);
}