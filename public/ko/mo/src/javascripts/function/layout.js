function layout() {

    // var aArray = [];
    var aArray = ['#intro', '#together', '#section01', '#section0102', '#section0103', '#section02', '#section0202', '#section0203', '#section0204', '#section03', '#section0302', '#section0303', '#section05', '#section0502', '#outro'];
    var count = 0;
    var $container = $("#container");
    var $header = $("header");
    var $footer = $("footer");
    var _windowH = $(window).height();
    var _htmlH = $("html,body").height();
    var $nav = $header.find("nav");

    /*$article = $container.children();
    $article.each(function() {
        var _this = $(this);
        if( _this.attr("id") ) {
            var secID = _this.attr("id");
            aArray.push("#" + secID);
        }
    });*/

    // Up/Down nav
    function navi() {
        var _window = $("html, body");
        var $prev = $nav.find(".prev"),
            $next = $nav.find(".next");
        // var _articleL = $article.length;
        var _articleL = aArray.length;

        $prev.on("click",function() {
            count <= 0?count=0:count=count-1;
            gsap.to(_window,.5,{ scrollTop: $( aArray[count]).offset().top });
        });
        $next.on("click",function() {
            if(count != _articleL-1){
                count >= _articleL?count=_articleL:count=count+1;
            }
            gsap.to(_window,.5,{ scrollTop: $( aArray[count]).offset().top });
        });
    }
    navi();

    //donate button
    function donateBtn() {
        var $introDonaBtn = $(".intro_donate_btn");
        var $donaBtn = $footer.find(".donate_wrap");
        var $videoWrap = $(".video_wrap").offset().top;
        var _footerH = $footer.height();
        $(window).scroll(function(){
            if(window.scrollY >= ( $videoWrap / 1.5)){
                gsap.to($introDonaBtn,.5,{ autoAlpha:0 });
                gsap.to($donaBtn,.5,{ autoAlpha:1 });
            }else{
                gsap.to($introDonaBtn,.5,{ autoAlpha:1 });
                gsap.to($donaBtn,.5,{ autoAlpha:0 });
            }

            if(window.scrollY + window.innerHeight >= document.body.clientHeight - _footerH) {
                $donaBtn.addClass("active");
            }else{
                $donaBtn.removeClass("active");
            }
        });
    }
    donateBtn();
}