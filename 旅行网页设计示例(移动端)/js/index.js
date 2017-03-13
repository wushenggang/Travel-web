$(document).ready(function(){
    //取图片的高度
    var height=$(".show-img").find("img").height();
    console.log(height);
    //定位title
    $(".title").css({"top":height-34+"px"});
    $(".nav-bottom").find("a").on("mouseenter",function(){
        $(this).css({"color":"#bd820a"});
        $(this).find(".iconfont").css({"color":"#bd820a"});
    });
    $(".nav-bottom").find("a").on("mouseleave",function(){
        $(this).css({"color":"#8a8a8a"});
        $(this).find(".iconfont").css({"color":"#000"});
    })
})
