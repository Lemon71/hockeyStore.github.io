$(function () {
    $(".sidelist dd").hide();
    $(".sidelist dt").click(function(){
        var me = $(this);
        me.find('span').toggle();
        me.nextUntil("dt").toggle();
        $(".some").hide();
    });


});