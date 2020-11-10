$(function () {

    console.log($("#username"));
    $("#username,#pasw").on("input", function () {
        $(this).parent().append("<b>x</b>").find("b").css({

            position: 'absolute',
            top: '6px',
            right: '10px'
        });
        $(this).parent().find("b").on('click', function () {
            $(this).parent().find("input").val("").end().find("b").remove();

        })
    })

    var flag = false
    $("#btn").on('click', function () {

        // axios.get(`http://localhost:3000/users?name=${$("#username").val()}&password=${$("#pasw").val()}`, {

        // }).then(res => {
        //     console.log(res.data);
        // })
        if ($("#username").val() != "" && $("#pasw").val() != "") {

            axios.get(`http://localhost:3000/users?name=${$("#username").val()}&password=${$("#pasw").val()}`, {

            }).then(res => {
                console.log(res);
                console.log(res.data.length);
                if (res.data.length != 0) {
                    alert("登录成功")

                    flag = true
                } else {
                    alert("检查用户名或密码")
                    flag = false
                }

                if (flag) {
                    $.cookie('username', $("#username").val(), {
                        expires: 7,
                        path: '/',
                        domain: '127.0.0.1',
                        // domain: 'localhost'
                    });
                    $.cookie('username', $("#username").val(), {
                        expires: 7,
                        path: '/',
                        // domain: '127.0.0.1',
                        domain: 'localhost'
                    });
                    var url = '../index.html'
                    $(location).attr('href', url);

                }
            })

            //     $.ajax({
            //         url: 'http://jx.xuzhixiang.top/ap/api/login.php',
            //         type: "get",
            //         data: {
            //             username: $("#username").val(),
            //             password: $("#pasw").val()
            //         },
            //         success: (res) => {
            //             console.log(res);
            //             if (res.code == 1) {
            //                 alert("登录成功")
            //                 alert(res)
            //                 flag = true
            //             } else {
            //                 alert("检查用户名或密码")
            //                 flag = false
            //             }

            //             if (flag) {
            //                 $.cookie('username', $("#username").val(), {
            //                     expires: 7,
            //                     path: '/',
            //                     domain: '127.0.0.1',
            //                     // domain: 'localhost'
            //                 });
            //                 $.cookie('username', $("#username").val(), {
            //                     expires: 7,
            //                     path: '/',
            //                     // domain: '127.0.0.1',
            //                     domain: 'localhost'
            //                 });
            //                 var url = '../index.html'
            //                 $(location).attr('href', url);

            //             }
            //         }

            //     })
            // } else {
            //     // alert("请输入用户名和密码")
        }

    })



})