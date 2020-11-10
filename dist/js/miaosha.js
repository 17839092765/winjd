// 京东秒杀\


function time(date) {
    var nowDate = new Date();
    var ss = Math.floor((date - nowDate) / 1000);
    var h = Math.floor(ss / 3600);
    var m = Math.floor(ss / 60 % 60);
    var s = Math.floor(ss % 60);

    function format(num) {
        return num < 10 ? "0" + num : num;
    }
    h = format(h);
    m = format(m);
    s = format(s);
    // console.log(h, m, s);
    $("#timeshi").text(h)
    $("#timefen").text(m)
    $("#timemiao").text(s)

    if (s, m, h <= 0) {
        clearInterval(timer)
        $("#timejieshu").html("秒杀结束")

    }
}

var date1 = new Date("2020/11/11 17:08:50")
time(date1);
var timer = setInterval(function () {
    time(date1);
}, 1000)