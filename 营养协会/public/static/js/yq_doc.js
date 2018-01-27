$(function() {
    //轮番  支持触屏
    if (!IsPC()) {
        $("#yq_carousel>.carousel-inner").swipe({
            swipeLeft: function() {
                $("#yq_carousel").carousel('next');
            },
            swipeRight: function() {
                $("#yq_carousel").carousel('prev');
            },
            click: function() {
                var dateurl = $("#yq_carousel>.carousel-inner>.active").attr("date-url");
                if (dateurl != "");
                window.location.href = dateurl;
            }
        });

        $(".yq_carousel-control.left").swipe({
            click: function() {
                $("#yq_carousel").carousel('prev');
            }
        });

        $(".yq_carousel-control.right").swipe({
            click: function() {
                $("#yq_carousel").carousel('next');
            }
        });
    }
    else {
        $("#yq_carousel>.carousel-inner").hover(function() {
            $(this).css("cursor", "pointer");
        });

        $("#yq_carousel>.carousel-inner").click(function() {
            var dateurl = $("#yq_carousel>.carousel-inner>.active").attr("date-url");
            if (dateurl != " ");
            window.open(dateurl, '_blank')//换页跳转
            window.location.href = dateurl; 原页面跳转

        });

        $(".yq_carousel-control.left").hover(function() {
            $(this).css("cursor", "pointer");
        });

        $(".yq_carousel-control.left").click(function() {
            $("#yq_carousel").carousel('prev');
        });

        $(".yq_carousel-control.right").hover(function() {
            $(this).css("cursor", "pointer");
        });

        $(".yq_carousel-control.right").click(function() {
            $("#yq_carousel").carousel('next');
        });
    }

    $('#yq_carousel').carousel({
        interval: 15000
    })

    //菜单 修正下拉菜单时一级菜单不生效bug
    var dropdowns = $(".dropdown-toggle");
    for (var i = 0; i < dropdowns.length; i++) {
        $(dropdowns[i]).click(function() {
            var url = $(this).attr("href");

            if (url != undefined && url != "#") {
                var target = $(this).attr("target");
                if (target == "_blank")
                    window.open(url);
                else
                    location.href = url;
            }
        });
    }
});

$(document).ready(function() {
    //图片延时加载
    $("img.lazy").unveil();
});

//判读是否是PC
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    return flag;
};