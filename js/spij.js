jQuery(document).ready(function($) {
    $("#spig").mousedown(function(e) {
        if (e.which == 3) {
            showMessage("秘密通道：<br /> <a href=\"\" title=\"首页\">首页</a>    <a href=\"\" title=\"订阅\">订阅</a> <a href=\"\" title=\"留言\">留言</a>", 10000);
        }
    });
    $("#spig").bind("contextmenu",
    function(e) {
        return false;
    });
});
 
jQuery(document).ready(function($) {
    $("#message").hover(function() {
        $("#message").fadeTo("100", 1);
    });
});
 
jQuery(document).ready(function($) {
    //$(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    $(".mumu").mouseover(function() {
        $(".mumu").fadeTo("300", 0.3);
        msgs = ["我隐身了，你看不到我", "我会隐身哦！嘿嘿！", "别动手动脚的，把手拿开！", "把手拿开我才出来！"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function() {
        $(".mumu").fadeTo("300", 1)
    });
});
 
jQuery(document).ready(function($) {
    if (isindex) { //如果是主页
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + ' 你是夜猫子呀？还不睡觉，明天起的来么你？', 6000);
        } else if (now > 6 && now <= 11) {
            showMessage(visitor + ' 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！', 6000);
        } else if (now > 11 && now <= 14) {
            showMessage(visitor + ' 中午了，吃饭了么？不要饿着了，饿死了谁来挺我呀！', 6000);
        } else if (now > 14 && now <= 18) {
            showMessage(visitor + ' 中午的时光真难熬！还好有你在！', 6000);
        } else {
            showMessage(visitor + ' 快来逗我玩吧！', 6000);
        }
    } else {
        showMessage('欢迎' + visitor + '来到《若是凉夜已成梦》阅读 ' + title + ' ', 6000);
    }
    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 160
    },
    {
        queue: false,
        duration: 1000
    });
});
 
jQuery(document).ready(function($) {
    $('h2 a').click(function() { //标题被点击时
        showMessage('正在用吃奶的劲加载《<span style="color:#0099cc;">' + $(this).text() + '</span>》请稍候');
    });
    $('h2 a').mouseover(function() {
        showMessage('要看看《<span style="color:#0099cc;">' + $(this).text() + '</span>》这篇文章么？');
    });
    $('#prev-page').mouseover(function() {
        showMessage('要翻到上一页吗?');
    });
    $('#next-page').mouseover(function() {
        showMessage('要翻到下一页吗?');
    });
    $('#index-links li a').mouseover(function() {
        showMessage('去 <span style="color:#0099cc;">' + $(this).text() + '</span> 逛逛');
    });
    $('.comments').mouseover(function() {
        showMessage('<span style="color:#0099cc;">' + visitor + '</span> 向评论栏出发吧！');
    });
    $('#submit').mouseover(function() {
        showMessage('确认提交了么？');
    });
    $('#s').focus(function() {
        showMessage('输入你想搜索的关键词再按Enter(回车)键就可以搜索啦!');
    });
    $('#go-prev').mouseover(function() {
        showMessage('点它可以后退哦！');
    });
    $('#go-next').mouseover(function() {
        showMessage('点它可以前进哦！');
    });
    $('#refresh').mouseover(function() {
        showMessage('点它可以重新载入此页哦！');
    });
    $('#go-home').mouseover(function() {
        showMessage('点它就可以回到首页啦！');
    });
    $('#addfav').mouseover(function() {
        showMessage('点它可以把此页加入书签哦！');
    });
    $('#nav-two a').mouseover(function() {
        showMessage('嘘，从这里可以进入控制面板的哦！');
    });
    $('.post-category a').mouseover(function() {
        showMessage('点击查看此分类下得所有文章');
    });
    $('.post-heat a').mouseover(function() {
        showMessage('点它可以直接跳到评论列表处.');
    });
    $('#tho-shareto span a').mouseover(function() {
        showMessage('你知道吗?点它可以分享本文到' + $(this).attr('title'));
    });
    $('#switch-to-wap').mouseover(function() {
        showMessage('点击可以切换到手机版博客版面');
    });
});
 
jQuery(document).ready(function($) {
 
    window.setInterval(function() {
        msgs = [$("#hitokoto").text(), weather.c[0], weather.c[2], weather.c[5], weather.c[7]];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000);
    },
    35000);
});
 
jQuery(document).ready(function($) {
    window.setInterval(function() {
        msgs = [$("#hitokoto").text()];
        //if(weather.state)msgs.concat(weather.c);
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
        $(".spig").animate({
            left: document.body.offsetWidth / 2 * (1 + s[i1]),
            top: document.body.offsetheight / 2 * (1 + s[i1])
        },
        {
            duration: 2000,
            complete: showMessage(msgs[i])
        });
    },
    45000);
});
 
jQuery(document).ready(function($) {
    $("#author").click(function() {
        showMessage("留下你的尊姓大名！");
        $(".spig").animate({
            top: $("#author").offset().top - 70,
            left: $("#author").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#email").click(function() {
        showMessage("留下你的邮箱，不然就是无头像人士了！");
        $(".spig").animate({
            top: $("#email").offset().top - 70,
            left: $("#email").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#url").click(function() {
 
        showMessage("快快告诉我你的家在哪里，好让我去参观参观！");
        $(".spig").animate({
            top: $("#url").offset().top - 70,
            left: $("#url").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#comment").click(function() {
        showMessage("认真填写哦！不然会被认作垃圾评论的！我的乖乖~");
        $(".spig").animate({
            top: $("#comment").offset().top - 70,
            left: $("#comment").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
});
 
var spig_top = 50;
jQuery(document).ready(function($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function() {
        $(".spig").animate({
            top: $(window).scrollTop() + f + 300
        },
        {
            queue: false,
            duration: 1000
        });
    });
});
 
jQuery(document).ready(function($) {
    var stat_click = 0;
    $(".mumu").click(function() {
        if (!ismove) {
            stat_click++;
            if (stat_click <= 4) {
                msgs = [weather.c[0], weather.c[2], weather.c[5], weather.c[7]];
            } else if (stat_click > 4) {
                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了", "非礼呀！救命！OH，My ladygaga"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["筋斗云！~我飞！", "我跑呀跑呀跑！~~", "别摸我，大男人，有什么好摸的！", "惹不起你，我还躲不起你么？", "不要摸我了，我会告诉老婆来打你的！", "干嘛动我呀！小心我咬你！"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
            s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
            var i1 = Math.floor(Math.random() * s.length);
            var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
                left: document.body.offsetWidth / 2 * (1 + s[i1]),
                top: document.body.offsetheight / 2 * (1 + s[i1])
            },
            {
                duration: 500,
                complete: showMessage(msgs[i])
            });
        } else {
            ismove = false;
        }
    });
});
 
 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};
 
var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
jQuery(document).ready(function($) {
    $("#spig").mousedown(function(e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
    });
    $(document).mousemove(function(e) {
        if (_move) {
            var x = e.pageX - _x;
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#spig').width();
            var dy = $(document).height() - $('#spig').height();
            if (x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x
                }); //控件新位置
                ismove = true;
            }
        }
    }).mouseup(function() {
        _move = false;
    });
});
 
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null;
}
function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString()
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/"
}
var weather = Array();
weather.s = false;
jQuery(document).ready(function($) {
    var date = new Date();
    weather.d = "" + date.getFullYear() + date.getMonth() + date.getDay();
    weather.ck = getCookie("weather");
    if (weather.ck == null || weather.d != getCookie("wea_tstamp")) {
        $.ajax({
            dataType: "jsonp",
            success: function(data) {
                if (data.success != 1) {
                    return;
                }
                weather.s = true;
                weather.c = Array();
                weather.c[0] = "今天是" + data.result[0].days + "，" + data.result[0].week;
                weather.c[1] = data.result[0].citynm + "今天" + data.result[0].temp_high + "°C到" + data.result[0].temp_low + "°C";
                weather.c[2] = data.result[0].citynm + "今天" + data.result[0].weather;
                weather.c[3] = data.result[0].citynm + "今天" + data.result[0].winp + "，" + data.result[0].wind;
                weather.c[4] = data.result[0].citynm + "明天" + data.result[1].temp_high + "°C到" + data.result[1].temp_low + "°C";
                weather.c[5] = data.result[0].citynm + "明天" + data.result[1].weather;
                weather.c[6] = data.result[0].citynm + "后天" + data.result[2].temp_high + "°C到" + data.result[2].temp_low + "°C";
                weather.c[7] = data.result[0].citynm + "后天" + data.result[2].weather;
                setCookie("wea_tstamp", weather.d, 1);
                setCookie("weather", encodeURI(weather.c.join(",")), 1);
            },
            type: "GET",
            url: "https://myhloliapi.sinaapp.com/weather/?callback=?"
        });
    } else {
        weather.s = true;
        weather.c = decodeURI(weather.ck).split(",");
    }
});