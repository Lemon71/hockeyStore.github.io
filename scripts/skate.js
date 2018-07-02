var leftButton =document.querySelector('.left_button');
var rightButton =document.querySelector('.right_button');
var rollBanner =document.querySelector('.rolling');


//显示的序号
var index =2;
rollBanner.onmouseover=function () {
    leftButton.style='display:block';
    rightButton.style='display:block';
};
rollBanner.onmouseout=function () {
    leftButton.style='display:none';
    rightButton.style='display:none';
};
leftButton.onclick=function () {
    index--;
    if(index<0){
        index=2;
    }
    // bannerLiArr[index].hide();
    };
rightButton.onclick=function () {
    index++;
    if(index>2){
        index=0;
    }
};
//完全是为了animate才引用的jquery，本来没打算用的，那继续用下去吧
$(function () {
    $('.left_button').click(function () {
        window.clearInterval(timer);
        $('.rolling>.banner_ul>li').eq(index+1).animate({
            height:"0px",
            opacity: "hide"
        }, 500);
        $('.rolling>.banner_ul>li').eq(index).animate({
            height:"518.7px",
            opacity: "show"
        }, 500);
        $('.rolling>.index_ul>li').css('border-top','none');
        $('.rolling>.index_ul>li').eq(index).css('border-top','4px red solid');
        timer=window.setInterval(autoBanner,3000);
    });
    $('.right_button').click(function () {
        window.clearInterval(timer);
        $('.rolling>.banner_ul>li').eq(index-1).animate({
            height:"0px",
            opacity: "hide"
        }, 500);
        $('.rolling>.banner_ul>li').eq(index).animate({
            height:"518.7px",
            opacity: "show"
        }, 500);
        $('.rolling>.index_ul>li').css('border-top','none');
        $('.rolling>.index_ul>li').eq(index).css('border-top','4px red solid');
        timer=window.setInterval(autoBanner,3000);
    });
    $('.rolling>.index_ul>li').eq(0).click(function () {
        window.clearInterval(timer);
        $('.rolling>.banner_ul>li').eq(index).animate({
            height:"0px",
            opacity: "hide"
        }, 500);
        $('.rolling>.banner_ul>li').eq(0).animate({
            height:"518.7px",
            opacity: "show"
        }, 500);
        $('.rolling>.index_ul>li').css('border-top','none');
        $('.rolling>.index_ul>li').eq(0).css('border-top','4px red solid');
        index=0;
        timer=window.setInterval(autoBanner,3000);
    });
    $('.rolling>.index_ul>li').eq(1).click(function () {
        window.clearInterval(timer);
        $('.rolling>.banner_ul>li').eq(index).animate({
            height:"0px",
            opacity: "hide"
        }, 500);
        $('.rolling>.banner_ul>li').eq(1).animate({
            height:"518.7px",
            opacity: "show"
        }, 500);
        $('.rolling>.index_ul>li').css('border-top','none');
        $('.rolling>.index_ul>li').eq(1).css('border-top','4px red solid');
        timer=window.setInterval(autoBanner,3000);
        index=1;
    });
    $('.rolling>.index_ul>li').eq(2).click(function () {
        window.clearInterval(timer);
        $('.rolling>.banner_ul>li').eq(index).animate({
            height:"0px",
            opacity: "hide"
        }, 500);
        $('.rolling>.banner_ul>li').eq(2).animate({
            height:"518.7px",
            opacity: "show"
        }, 500);
        $('.rolling>.index_ul>li').css('border-top','none');
        $('.rolling>.index_ul>li').eq(2).css('border-top','4px red solid');
        timer=window.setInterval(autoBanner,3000);
        index=2;
    });
    var timer =window.setInterval(autoBanner,3000);
    function autoBanner() {
        index++;
        if(index>2){
            index=0;
        }
        $('.rolling>.banner_ul>li').eq(index-1).animate({
            height:"0px",
            opacity: "hide"
        }, 1000);
        $('.rolling>.banner_ul>li').eq(index).animate({
            height:"518.7px",
            opacity: "show"
        }, 1000);
        $('.rolling>.index_ul>li').css('border-top','none');
        $('.rolling>.index_ul>li').eq(index).css('border-top','4px red solid');
    }

    //修复路由切来切去显示错误的bug
    var dtArr =document.getElementsByTagName('dt');
    console.log(dtArr);
    // 除了第一个之外都让timer暂停
    for(var i=1;i<dtArr.length;i++){
        dtArr[i].onclick=function () {
            clearInterval(timer);
        }
    }
});

