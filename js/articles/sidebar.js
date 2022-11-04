$(function(){
    var notdefault = 0;
    $('div').find('h1,h2').each(function(index,item){
        notdefault = 1;
        $(this).attr('id','c'+index);
        var headerText=$(this).text();
        var tagName=$(this)[0].tagName.toLowerCase();
        var tagIndex=parseInt(tagName.charAt(1));
        //设置不同等级header的排列及缩进样式
        if (tagIndex == 1)//href="#c'+index+'"
            $('#category').append($('<a name=c'+index+' class="cbtn article-ch'+tagIndex+'" >'+headerText+'</a>'+"</br>"));
        else
            $('#category').append($('<a name=c'+index+' class="cbtn article-ch'+tagIndex+'" >> '+headerText+'</a>'+"</br>"));
    });
    if (notdefault == 0){
        $('#c-default').css('display','block');
    }
    
    var navH = $("#category-ct").offset().top;
    //滚动条事件
    $(window).scroll(function(){
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定
        if(scroH>=navH){
            $("#category-ct").css({position: 'fixed'});
            $("#category-ct").animate({top: '30px'},1000);
        }
        else{
            $("#category-ct").css({position: 'static',top:'0px'});
        }
    });

    $(document).on('click', '.cbtn', function(e) {
        $('html,body').animate({scrollTop: $("#" + this.name).offset().top}, 500);
        //document.getElementById($(this).attr('name')).scrollIntoView()
       // onclick="javascript:document.getElementById('+'\'c3\''+').scrollIntoView()
    });

});