$(function () {
    //内容信息导航吸顶
    $(document).ready(function () {
        var navHeight = $("#navHeight").offset().top;
        var navFix = $("#nav-box");
        $(window).scroll(function () {
            if ($(this).scrollTop() > navHeight) {
                navFix.addClass("navFix");
            } else {
                navFix.removeClass("navFix");
            }
        })
    });
    //内容信息导航锚点
    $('.nav-box').navScroll({
        mobileDropdown: true,
        mobileBreakpoint: 768,
        scrollSpy: true
    });

    $('.click-me').navScroll({
        navHeight: 0
    });

    $('.nav-box').on('click', '.nav-mobile', function (e) {
        e.preventDefault();
        $('.nav-box ul').slideToggle('fast');
    });
    // 右侧hover
    $('#iebug a').hover(function () {
        $(this).parent().find(".text").css('display', 'block');
    }, function () {
        $(this).parent().find(".text").css('display', 'none');
    });

    //根据窗口大小楼层数字显示到正确位置
    var brwidth = $(window).width();
    var xCabtn = (brwidth - 1200) / 2 + 1205;
    var xScorbtn = (brwidth - 1200) / 2 + 1202;

    $(".category-btn").css({
        left: xCabtn
    });
    $("#goTopBtn").css({
        left: xScorbtn
    });

    //获取重置
    $(window).resize(function () {
        var brwidth = $(window).width();
        //      alert(brwidth);
        var xCabtn = (brwidth - 1200) / 2 + 1205;
        var xScorbtn = (brwidth - 1200) / 2 + 1202;

        $(".category-btn").css({
            left: xCabtn
        });
        $("#goTopBtn").css({
            left: xScorbtn
        });
    });
    //右侧点击定位
    var newArray2 = new Array();
    newArray2[0] = "1";
    newArray2[1] = "2";
    newArray2[2] = "3";
    newArray2[3] = "4";
    newArray2[4] = "5";
    var newArray = new Array();
    newArray[0] = "section1";
    newArray[1] = "section2";
    newArray[2] = "section3";
    newArray[3] = "section4";
    newArray[4] = "section5";
    for (var j = 0; j < 5; j++) {
        (function (j) {
            $("#" + newArray2[j]).click(function () {
                // $('.category-btn a').css("color","#fff");
                // $(this).css("color","#666");
                $("html, body").animate({
                    scrollTop: $("#" + newArray[j]).offset().top - 50 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;

            });
        })(j);

    };

    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        var rwidth = $(window).width()
        if (sc > 0) {
            $("#goTopBtn").css("display", "block");
            $("#goTopBtn").css("right", '195px;');
            $(".category-btn").css("display", "block");
        } else {
            $("#goTopBtn").css("display", "none");
            $(".category-btn").css("display", "none");
        }
    })
    $("#goTopBtn").click(function () {
        var sc = $(window).scrollTop();
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });


    // 
    var oNav = $('#list'); //导航壳
    var aNav = oNav.find('li'); //导航
    var aNav1 = oNav.find('li.1'); //导航

    var aDiv = $('.xsj'); //楼层
    var aDiv1 = $('.xsj1'); //楼层
    //回到顶部
    $(window).scroll(function () {
        var winH = $(window).height(); //可视窗口高度
        var iTop = $(window).scrollTop(); //鼠标滚动的距离


        //鼠标滑动式改变 右侧楼层 
        aDiv.each(function () {
            var scrollPos1;
            scrollPos1 = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            // console.log(scrollPos);

            if (scrollPos1 > ($(this).offset().top - 60 + $(this).height())) {
                // alert($(this).offset().top);
                // console.log($(this).offset().top-60);
                aNav.removeClass('active');
                aNav1.removeClass('active');
                aNav.eq($(this).index()).addClass('active');
                console.log($(this).index());
            }
        });
        aDiv1.each(function () {
            var scrollPos2;
            scrollPos2 = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;


            if (scrollPos2 > ($(this).offset().top - 60) && scrollPos2 < $(this).offset().top - 60 + $(this).height()) {
                // alert($(this).offset().top);

                aNav1.removeClass('active');
                aNav.removeClass('active');
                aNav1.eq($(this).index() - 1).addClass('active');
                // console.log($(this).index());

            }
        })

    })

})