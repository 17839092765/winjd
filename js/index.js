//https://dd-search.jd.com/?terminal=pc&newjson=1&ver=2&zip=1&key=a&pvid=f62ff600fa42460881d2d5309c5d3198&t=1604720848491&curr_url=www.jd.com%2F&callback=jQuery2511662



https: //suggest.taobao.com/sug?code=utf-8&q=${oInput.value}&_ksTS=1603364053268_599&callback=foo&k=1&area=c2c&bucketid=13
    $(function () {
        console.log($("input"));

        $(".out").click(function () {
            $('.adwrap').css({
                display: "none"
            })
        })
        var username = $.cookie("username")
        console.log($.cookie("username"));
        // $.getUrlParam = function (name) {
        //     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        //     var r = window.location.search.substr(1).match(reg);
        //     if (r != null) {
        //         // console.log(decodeURIComponent(r[2]));
        //         return unescape(decodeURIComponent(r[2]));
        //     } else {
        //         return null;
        //     }

        // }
        if (username) {
            $(".right").children("li").eq(0).html(`<a href=''>${username}<span class='iconfont iconsanjiao'></span></a> <div class="mydata">
            <a href=''> <p></p></a>
            <input type="button" value="注销">

        </div>`).css({
                width: '100px',
                textAlign: 'center',
                color: "#999",
                background: "#fff",
                // border: '1px solid #cecece',
                fontSize: '12px',
                // overflow: 'hidden'
            }).end().find(".mydata").css({
                width: "200px",
                height: '100px',
                border: '1px solid #cecece',
                borderTop: 'none',
                display: 'none',
                background: "#fff",
                position: 'absolute',
                left: '-1px',
                top: '30px',
            }).end().eq(0).mouseenter(function () {
                $(".mydata").css({
                    display: 'block',
                    zIndex: '1'

                })
            }).end().eq(1).remove().end().eq(2).html(`<a href=''>我的订单</a>`).find("a").css({
                color: "#999",
                // fontSize: '12px',
                // lineHeight: '35px'
                // border: '1px solid #cecece'
            })


            // main部分右边的登陆信息

            $("#main .right .userdata").children(".left").html('<img src="images/no-img_mid_.jpg" alt=""></img>').end().find(".right").html(` <p>Hi,${username}</p> <p><span><a href=""></a></span><span><a id="tuichu" href="">退出</a></span>
            </p> `).end().find(">p").html(" <span>开通PLUS 平均省1210元/年</span>").find("span").css({
                width: "100%",
                height: '25px',
                marginTop: '10px',
                background: "#fff",
                color: 'red',
                webkitBoxShadow: '0 2px 8px rgba(0,0,0,.1)',
                boxShadow: '0 2 px 8 px rgba(0, 0, 0, .1)',

            }).hover(function () {
                $(this).css({
                    background: "#e1251b",
                    color: '#fff'
                })
            }, function () {
                $(this).css({
                    background: "#fff",
                    color: "red"
                })
            })



        }
        $(".mydata").on("mouseleave", function () {
            // console.log("asdasdasd");
            $(this).css({
                display: 'none'
            })
        })

        $(".mydata input ,#tuichu").css({
            width: "50px",
            height: '20px',
            position: 'absolute',
            right: '-1px',
            top: '5px',
        }).on("click", function () {

            // 注销
            console.log("asd");
            $.removeCookie('username', $("#username").val(), {
                expires: 7,
                path: '/',
                domain: '127.0.0.1'
            });
            window.location.reload()
        })





        $('#sou').on("input", function () {

            if ($('#sou').val() == "") {
                $("#fang").html("")
                return;
            }

            document.onclick = function () {

                $("#fang").css({
                    display: 'none'
                })
            }
            $.ajax({
                url: "https://suggest.taobao.com/sug",
                data: {

                    code: 'utf-8',
                    // q: $("#sou").val,
                    q: $('#sou').val(),
                    ksTS: "1603364053268_599",
                    k: '1',
                    area: 'c2c',
                    bucketid: '13'
                },
                dataType: "jsonp",
                success: function (res) {
                    console.log(res);
                    result = res.result;
                    magic = res.magic;
                    console.log(result, magic);

                    let str = "";

                    result.forEach(item => {
                        console.log(item);
                        str +=
                            `<a href=" https://s.taobao.com/search?initiative_id=tbindexz_20170306&ie=utf8&spm=a21bo.2017.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q=${item[0]}&suggest=0_6&_input_charset=utf-8&wq=a&suggest_query=a&source=suggest"> <li>${item[0]}</li></a>`;
                        console.log(str);
                    });
                    $("#fang").html(str)






                }
            })
        })
        $('#sou').click(function (e) {
            var e = e || Event
            e.stopPropagation()
            // console.log("aa");
            $("#fang").css({
                display: 'block',
                // width: '500px'

            })
        })


        // 划过列表显示商品信息的列表



        $("#main .left ul").children("li").hover(function () {
            console.log($(this).children("a").text());
            $(".meanshow").css({
                display: "block"
            })

            $(".lunbo").css({
                display: 'none'
            })
            $.ajax({
                url: "https://suggest.taobao.com/sug",
                data: {

                    code: 'utf-8',
                    q: $(this).children("a").text(),
                    // q: $('#sou').val(),
                    ksTS: "1603364053268_599",
                    k: '1',
                    area: 'c2c',
                    bucketid: '13'
                },
                dataType: "jsonp",
                success: function (res) {
                    // console.log(res);
                    result = res.result;
                    magic = res.magic;
                    // console.log(result, magic);

                    let str = "";

                    result.forEach(item => {
                        // console.log(item);
                        str +=
                            `<a href=" https://s.taobao.com/search?initiative_id=tbindexz_20170306&ie=utf8&spm=a21bo.2017.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q=${item[0]}&suggest=0_6&_input_charset=utf-8&wq=a&suggest_query=a&source=suggest"> <li>${item[0]}</li></a>`;
                        // console.log(str);
                    });


                    $(".meanshow").html(str)

                    $("#main .left ul").children();
                    // console.log($("#main .left ul").children());
                    $.each($("#main .left ul").children(), function () {
                        // $(this).hover(function () {
                        //     $(".meanshow").html(str)

                        //     // console.log(str);

                        //     $(".lunbo").css({
                        //         display: 'none'
                        //     })

                        // }, function () {
                        //     // console.log("出");


                        //     $(".lunbo").css({
                        //         display: 'block'
                        //     })
                        // })

                    })








                }
            })

        }, function () {
            // $(".meanshow").html('')
            $(".lunbo").css({
                display: 'block'
            })
        })



        $("#main").hover(function () {

        }, function () {
            $(".meanshow").css({
                display: "none"

            })
        })








        // lunbotu

        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: true,


            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
                // hideOnClick: true,
                // hiddenClass: 'my-button-hidden',
            },

            // 如果需要滚动条
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        })

        //鼠标覆盖停止自动切换
        mySwiper[0].el.onmouseover = function () {
            mySwiper[0].autoplay.stop();
            mySwiper[0].navigation.$nextEl.removeClass('hide');
            mySwiper[0].navigation.$prevEl.removeClass('hide');
        }

        //鼠标离开开始自动切换
        mySwiper[0].el.onmouseout = function () {
            mySwiper[0].autoplay.start();
            mySwiper[0].navigation.$nextEl.addClass('hide');
            mySwiper[0].navigation.$prevEl.addClass('hide');

        }
        //鼠标覆盖停止自动切换
        mySwiper[1].el.onmouseover = function () {
            mySwiper[1].autoplay.stop();
            mySwiper[1].navigation.$nextEl.removeClass('hide');
            mySwiper[1].navigation.$prevEl.removeClass('hide');
        }

        //鼠标离开开始自动切换
        mySwiper[1].el.onmouseout = function () {
            mySwiper[1].autoplay.start();
            mySwiper[1].navigation.$nextEl.addClass('hide');
            mySwiper[1].navigation.$prevEl.addClass('hide');

        }
        //鼠标移出隐藏按钮，移入显示按钮












    })