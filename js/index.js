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
        // var cartnum = $.cookie("cartnum")
        var uid = $.cookie("uid")
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
            axios.get(`http://localhost:3000/cart?uid=${uid}`).then((res) => {

                $('#shopping-amount').text(res.data.length)

            })

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
            $.removeCookie('uid', {
                expires: 7,
                path: '/',
                domain: '127.0.0.1'
            });
            $.removeCookie('username', $("#username").val(), {
                expires: 7,
                path: '/',
                domain: 'localhost'
            });
            $.removeCookie('uid', {
                expires: 7,
                path: '/',
                domain: 'localhost'
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

        var mySwiper1 = new Swiper('.swiper-container1', {
            effect: 'fade',
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

        var mySwiper2 = new Swiper('.swiper-container2', {
            effect: 'fade',
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

        // 秒杀下的轮播
        var swiper3 = new Swiper('.swiper-container3', {
            // effect: 'fade',
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
            // autoplay: true,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });


        var mySwiper4 = new Swiper('.swiper-container4', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: true,


            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            // navigation: {
            //     prevEl: '.swiper-button-prev',
            //     nextEl: '.swiper-button-next',
            //     // hideOnClick: true,
            //     // hiddenClass: 'my-button-hidden',
            // },

            // 如果需要滚动条
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        })



        //----------------------------

        //鼠标覆盖停止自动切换
        mySwiper1.el.onmouseover = function () {
            mySwiper1.autoplay.stop();
            mySwiper1.navigation.$nextEl.removeClass('hide');
            mySwiper1.navigation.$prevEl.removeClass('hide');
        }

        //鼠标离开开始自动切换
        mySwiper1.el.onmouseout = function () {
            mySwiper1.autoplay.start();
            mySwiper1.navigation.$nextEl.addClass('hide');
            mySwiper1.navigation.$prevEl.addClass('hide');

        }
        //鼠标覆盖停止自动切换
        mySwiper2.el.onmouseover = function () {
            mySwiper2.autoplay.stop();
            mySwiper2.navigation.$nextEl.removeClass('hide');
            mySwiper2.navigation.$prevEl.removeClass('hide');
        }

        //鼠标离开开始自动切换
        mySwiper2.el.onmouseout = function () {
            mySwiper2.autoplay.start();
            mySwiper2.navigation.$nextEl.addClass('hide');
            mySwiper2.navigation.$prevEl.addClass('hide');

        }
        //鼠标移出隐藏按钮，移入显示按钮




        // 鼠标花火小功能颜色改变

        $('.server .xiaogongneng ul li').hover(function () {

            $(this).children().children().eq(0).children().css({
                display: 'none'
            })
            $(this).children().children().eq(1).children().css({
                display: 'block',

            })
        }, function () {
            $(this).children().children().eq(0).children().css({
                display: 'block'
            })
            $(this).children().children().eq(1).children().css({
                display: 'none',

            })
        })




        //鼠标覆盖停止自动切换
        swiper3.el.onmouseover = function () {
            swiper3.autoplay.stop();
            swiper3.navigation.$nextEl.removeClass('hide');
            swiper3.navigation.$prevEl.removeClass('hide');
        }

        //鼠标离开开始自动切换
        swiper3.el.onmouseout = function () {
            swiper3.autoplay.start();
            swiper3.navigation.$nextEl.addClass('hide');
            swiper3.navigation.$prevEl.addClass('hide');

        }


        // --------------------------------------------------------------------



        // 调入数据         
        // $("#showdata")

        let url = `http://localhost:3000/products`
        axios.get(url, {

            params: {
                // pagesize: 10,
                // pagenum: 0, //商品数据是从0页开始
                //uid //查看当前登录账号的 商品
            }
        }).then((res) => {
            // console.log(res.data);
            //  商品数据 【{},{}】-> tr td
            // {pid: "260799", pname: "555", pprice: "55555.00", pimg: "000", pdesc: "555", …}
            let arr = res.data;
            let html = "";
            // console.log(arr.length);

            let myarr = arr.slice(0, 20)
            // console.log(myarr.length);


            myarr.forEach((v) => {
                // console.log(v.params);
                html += `
                    <li data-id="${v.id}">
                    <a href="html/shangpinlist.html?id=${v.id}">
                    <img src="${v.params.pimg}" alt=""></a>
                    <p>${v.params.pdesc}</p>
                    <p>¥${v.params.pprice}</p>
                    </li>
                    
                 `;
            });
            $("#showdata").html(html)
            var index = 20


            $("#datamore").click(function () {
                // console.log(index);
                if (index <= 300) {

                    // console.log(arr);
                    // console.log(myarr);

                    // console.log(index);
                    myarr = arr.slice(index, index + 5)

                    // console.log(myarr);


                    myarr.forEach((v) => {
                        console.log(v.id);
                        html += `
                            <li data-id="${v.id}">
                            <a href="html/shangpinlist.html?id=${v.id}">
                            <img src="${v.params.pimg}" alt=""></a>
                            <p>${v.params.pdesc}</p>
                            <p>¥${v.params.pprice}</p>
                            </li>
                         `;

                    });

                    $("#showdata").html(html)
                    index += 5
                    // console.log(index);


                }

            })

        })


        // --------------------------------------------------------



        // 斤详情页面
        $('.show #showdata li').children('a')



    })