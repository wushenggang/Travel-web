$(document).ready(function(){
    //定位button
    var height1=$(".show-img").height();
    var height2=$(".show-img").find(".enter").height();
    var width1=$(".show-img").width();
    var width2=$(".show-img").find(".enter").width();
    $(".enter").css({"top":height1-0.5*height2+50+"px",
                      "left":0.5*width1-0.5*width2-40+"px"
    });
})