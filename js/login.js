console.log($("#from p"));

$(function () {
    var input = $("#from p ").children("input")
    // input获取焦点时提示信息显示
    input.focus(function () {
        $(this).parent().children("span").css({
            display: 'block'
        })
    })
    // input失去焦点时提示信息隐藏
    input.blur(function () {
        $(this).parent().children("span").css({
            display: 'none'
        })
    })

    // input输入时的信息  验证
    input.on("input", function () {
        console.log($(this).val());
    })


    //检测用户名是否存在
    var flge1 = false
    var flge2 = false
    var flge3 = false
    input.eq(0).on("change ", function () {
        console.log($(this).val());
        $.ajax({
            url: 'http://jx.xuzhixiang.top/ap/api/checkname.php',
            type: 'get',
            data: {
                username: $(this).val(),
            },
            success: (res) => {
                console.log(res);
                console.log($(this).parent().children("span"));
                if (res.code == 1) {
                    flge1 = true
                } else {
                    flge1 = false
                }

                if ($(this).val() != '') {
                    $(this).parent().append("<b></b>").find("b").html(res.msg).css({
                        position: 'absolute',
                        top: '0',
                        left: '80%',
                    })
                }
                if ($(this).val() == "") {
                    $(this).parent().find("b").html("")
                    return;
                }
            }
        })

    })
    var pasd = /^[a-z0-9_-]{6,18}$/
    input.eq(1).on("input", function () {
        if (!pasd.test($(this).val())) {
            $(this).parent().append("<b></b>").find("b").html("密码格式不对").css({
                position: 'absolute',
                top: '0',
                left: '80%',
                fontSize: '14px'
            })
            flge2 = false
        } else {
            $(this).parent().append("<b></b>").find("b").html("此密码可以").css({
                position: 'absolute',
                top: '0',
                left: '80%',
                fontSize: '14px'

            })
            flge2 = true
        }
    })

    input.eq(2).on("input", function () {
        if ($(this).val() != input.eq(1).val()) {
            $(this).parent().append("<b></b>").find("b").html("密码不一致").css({
                position: 'absolute',
                top: '0',
                left: '80%',
                fontSize: '14px'
            })
            flge3 = false
        } else {
            $(this).parent().append("<b></b>").find("b").html("√").css({
                position: 'absolute',
                top: '0',
                left: '80%',
                fontSize: '14px'

            })
            flge3 = true
        }
    })

    $("#from>input").on("click", function () {

        if (flge1 + flge2 + flge3 == 3) {

            $.ajax({
                url: 'http://jx.xuzhixiang.top/ap/api/reg.php',
                type: 'get',

                data: {
                    username: input.eq(0).val(),
                    password: input.eq(2).val()
                },
                success: function (res) {

                    console.log(res);
                    alert(res.msg)
                }
            })



            // console.log('注册成功');

        } else {
            alert("请重试")
        }
    })













})