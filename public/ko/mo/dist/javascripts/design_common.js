"use strict";
var winW;
var winH;
var esStep = "Expo.easeIn";
var esOut = "Expo.easeOut";
var $window = $(window);
var winSc = $(window).scrollTop();
var $header = $("#header");
var $html = $("html");
var navAni;
var controller = null;
//gnb
var $gnb = $("#gnb"),
    $navBtn = $gnb.find("button");

//배열 순차 더한 값
var triggerScrVar = [];

$window.load(function () {
    var _this =  $(this);
    winW = _this.width();
    winH = _this.height();
    winSc = _this.scrollTop();
    $window.on("resize", function () {
        winW = _this.width();
        winH = _this.height();
    });
    _this.trigger("resize");
    $(window).scroll(function () {
        winSc = _this.scrollTop();
    });
    layout();
    main();

    /* loading view */
    /*setTimeout(function(){
        TweenMax.to($('.loading'), .8, { display: 'none', opacity: 0, delay:.5 })
        $window.scrollTop(0);
    }, 1500)*/
});
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
function main() {
    var swiper_subject= new Swiper('.subject_swiper', {
        slidesPerView: "auto",
        loop : true,
        speed: 500,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    var countInt = true, sproutInt = true;
    var $sproutImg = $('.sprout_img'),
        $sproutImg01 = $sproutImg.find('span:nth-of-type(1)'),
        $sproutImg02 = $sproutImg.find('span:nth-of-type(2)'),
        $sproutImg03 = $sproutImg.find('span:nth-of-type(3)'),
        $sproutImg04 = $sproutImg.find('span:nth-of-type(4)'),
        $sproutImg05 = $sproutImg.find('span:nth-of-type(5)'),
        $sproutImg06 = $sproutImg.find('span:nth-of-type(6)'),
        $sproutImg07 = $sproutImg.find('span:nth-of-type(7)'),
        $sproutImg08 = $sproutImg.find('span:nth-of-type(8)'),
        $sproutImg09 = $sproutImg.find('span:nth-of-type(9)');



    $(window).scroll(function () {
        var togertherPos = $('#together').offset().top;
        var sproutImgPos = $('.sprout_wrap').offset().top;
        var outroPos = $('#outro').offset().top;

        /*winSc > togertherPos ? gsap.to('#logo', .5, { autoAlpha:1 }) : gsap.to('#logo', .5, { autoAlpha:0 });*/

        if(winSc > (togertherPos - togertherPos/3)){
            if(countInt){
                counter();
                countInt = false;
            }
        }
        if(winSc > (sproutImgPos)){
            if(sproutInt){
                var sprouts = gsap.timeline();
                sprouts.to($sproutImg01, .2, { opacity:1, visibility: 'visible' })
                    .to($sproutImg01, .1, { opacity:0.5, visibility: 'hidden' }, '-=.05')
                    .to($sproutImg02, .15, { opacity:1, visibility: 'visible' }, '-=.15')
                    .to($sproutImg02, .1, { opacity:0.5, visibility: 'hidden' }, '-=.05')
                    .to($sproutImg03, .15, { opacity:1, visibility: 'visible' }, '-=.15')
                    .to($sproutImg03, .1, { opacity:0.5, visibility: 'hidden' }, '-=.05')
                    .to($sproutImg04, .15, { opacity:1, visibility: 'visible' }, '-=.15')
                    .to($sproutImg04, .1, { opacity:0.5, visibility: 'hidden' }, '-=.05')
                    .to($sproutImg05, .15, { opacity:1, visibility: 'visible' }, '-=.15')
                    .to($sproutImg05, .1, { opacity:0.5, visibility: 'hidden' }, '-=.05')
                    .to($sproutImg06, .15, { opacity:1, visibility: 'visible' }, '-=.15')
                    .to($sproutImg06, .1, { opacity:0.5, visibility: 'hidden' }, '-=.05')
                    .to($sproutImg07, .15, { opacity:1, visibility: 'visible' }, '-=.15')
                    .to($sproutImg07, .1, { opacity:0.5, visibility: 'hidden' }, '-=.05')
                    .to($sproutImg08, .15, { opacity:1, visibility: 'visible' }, '-=.15')
                    .to($sproutImg08, .1, { opacity:0.5, visibility: 'hidden' }, '-=.05')
                    .to($sproutImg09, .15, { opacity:1, visibility: 'visible' }, '-=.15');

                sproutInt = false;
            }
        }
        if(winSc > outroPos ){
            outroMotion.play();
        }
    });
    function counter() {
        function numberCounter(target_frame, target_number) {
            // this.count = 0;
            this.count = 0;
            this.diff = 0;
            this.target_count = parseInt(target_number);
            this.target_frame = document.getElementById(target_frame);
            this.timer = null;
            this.counter();
        };
        numberCounter.prototype.counter = function () {
            var self = this;
            this.diff = this.target_count - this.count;

            if (this.diff > 0) {
                self.count += Math.ceil(this.diff / 5);
            }

            this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

            if (this.count < this.target_count) {
                this.timer = setTimeout(function () {
                    self.counter();
                }, 10);
            } else {
                clearTimeout(this.timer);
            }
        };
        new numberCounter("counter", $(".counter_text").text());
    } //숫자 카운팅

    var outroMotion = lottie.loadAnimation({
        container: document.querySelector('.ending_motion'),
        loop: false,
        autoplay: false,
        path: "./datafile/outro.json",
    });
}