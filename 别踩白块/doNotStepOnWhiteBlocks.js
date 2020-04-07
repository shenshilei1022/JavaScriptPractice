function Step() {
    this.score = 0;
    this.lastScore = 0;
    this.speed = 2;
    // 是否重新开始
    this.start = false;
    // Dom元素
    this.dom = {
        title: $(".title"),
        author: $(".author"),
        main: $(".main"),
        score: $(".score")
    };
    // 整个别踩白块动作交互
    this.bindEvent();
    // 动画定时函数
    this.timer1 = {};
    // 加速定时函数
    this.timer2 = {};
    // 显示分数
    this.timer3 = {};
}

/**
 * bindEvent() 绑定事件
 * @function name: bindEvent
 * @param none
 * @return none
 */
Step.prototype.bindEvent = function () {
    var self = this;
    var topValue = -150;
    self.dom.title.on("click", function () {
        // 隐藏标题和作者信息
        self.dom.title.css("display", "none");
        self.dom.author.css("display", "none");
        // 显示分数信息
        self.dom.score.css("display", "block");
        // 创建第一行钢琴块
        self.createBlock(0);
        // 创建动画定时函数
        self.timer1 = setInterval(function () {
            // 检验是否有漏点
            var main = self.dom.main;
            if (main.children().length == 6) {
                for (var i = 0; i < 4; i++) {
                    if (main.children().eq(5).children().eq(i).attr("class") == "target") {
                        self.start = confirm("最终得分：" + self.score + "\n是否重新开始？");
                        clearInterval(self.timer1);
                        clearInterval(self.timer2);
                        clearInterval(self.timer3);
                        self.startOrNot();
                        return;
                    }
                }
                main.children().eq(5).remove();
            }
            // 通过修改main的位置实现动画效果
            var main = self.dom.main;
            topValue += self.speed;
            if (parseInt(main.css("top")) > 0) {
                topValue = -150;
                self.createBlock(1);
            }
            main.css("top", topValue+"px");
        }, 10);
        // 创建速度定时函数 得分是10的倍数，速度增加
        self.timer2 = setInterval(function () {
            var diffScore = self.score - self.lastScore;
            if (10 == diffScore) {
                self.speed++;
                self.lastScore = self.score;
            }
        }, 100);
        // 显示分数
        self.timer3 = setInterval(function () {
            self.dom.score.text("");
            self.dom.score.append("当前分数：" + self.score);
        }, 10);
    });
}

/**
 * createBlock() 创建钢琴块
 * @function name: createBlock()
 * @param flag flag=0 说明创建第一行钢琴块；flag=1 说明在后面添加钢琴块
 * @return none
 */
Step.prototype.createBlock = function (flag) {
    var self = this;
    var main = self.dom.main;
    var row = $('<div class="row"></div>');
    if (0 == flag) {
        main.append(row);
        main.css("display", "block");
    }
    if (1 == flag) {
        main.prepend(row);
    }
    // 生成四个钢琴块
    for (var i = 0; i < 4; i++) {
        var col = $('<div class="col"></div>');
        row.append(col);
        // 对钢琴块进行点击判定
        col.on("click", function () {
            if ($(this).attr("class") == "target") {
                // 点击了正确的钢琴块
                $(this).css("background-color", "lightgray").attr("class", "col");
                self.score++;
                return;
            }
            // 未点击正确的钢琴块
            alert("最终得分：" + self.score);
            clearInterval(self.timer1);
            clearInterval(self.timer2);
            clearInterval(self.timer3);
        });
    }
    // 生成随机数字标记钢琴块
    var index = parseInt(Math.random() * 4);
    row.children().eq(index).css("background-color", "black").attr("class", "target");
}

Step.prototype.startOrNot = function () {
    if (this.start) {
        window.location.reload();
        // 刷新结束置为false
        this.start = false;
    }
}

new Step();

