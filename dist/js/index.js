//https://dd-search.jd.com/?terminal=pc&newjson=1&ver=2&zip=1&key=a&pvid=f62ff600fa42460881d2d5309c5d3198&t=1604720848491&curr_url=www.jd.com%2F&callback=jQuery2511662

var obj = {}
var arr = []
var sj = []
$.ajax({
    url: 'http://api.yytianqi.com/forecast7d',
    data: {
        city: 'CH010100',
        key: 'tjjrtmqjl10efpc9'
    },
    dataType: 'json',
    async: false,
    success: function (res) {
        $.each(res, function (i, n) {
            console.log(i, n);
            obj[i] = n
        })


        // return arr
    }

})

https: //suggest.taobao.com/sug?code=utf-8&q=${oInput.value}&_ksTS=1603364053268_599&callback=foo&k=1&area=c2c&bucketid=13
    $(function () {
        console.log($("input"));

        $(".out").click(function () {
            $('.adwrap').css({
                display: "none"
            })
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


        $.ajax({
            url: "https://suggest.taobao.com/sug",
            data: {

                code: 'utf-8',
                q: "a",
                // q: $('#sou').val(),
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
                // console.log(result, magic);

                let str = "";

                result.forEach(item => {
                    // console.log(item);
                    str +=
                        `<a href=" https://s.taobao.com/search?initiative_id=tbindexz_20170306&ie=utf8&spm=a21bo.2017.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q=${item[0]}&suggest=0_6&_input_charset=utf-8&wq=a&suggest_query=a&source=suggest"> <li>${item[0]}</li></a>`;
                    // console.log(str);
                });


                $("#main .left ul").hover(function () {
                    $(".meanshow").css({
                        display: "block"
                    })
                }, function () {
                    // $(".meanshow").css({
                    //     display: "none"

                    // })

                })
                $("#main").hover(function () {

                }, function () {
                    $(".meanshow").css({
                        display: "none"

                    })
                })
                $("#main .left ul").children();
                // console.log($("#main .left ul").children());
                $.each($("#main .left ul").children(), function () {
                    $(this).hover(function () {
                        $(".meanshow").html(str)

                        // console.log(str);

                        $(".lunbo").css({
                            display: 'none'
                        })

                    }, function () {
                        // console.log("出");


                        $(".lunbo").css({
                            display: 'block'
                        })


                    })
                })








            }
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

        // $(".swiper-button-next").css({
        //     width: "300px",
        //     height: "300px",
        //     border: "1px solid #000"
        // })
        console.log(mySwiper);








    })