"use strict";
var winW;
var winH;
var esStep = "Expo.ease";
var esOut = "Expo.easeOut";
var $window = $(window);
var winSc = $(window).scrollTop();
var $header = $("#header");
var $footer = $("#footer");
var $html = $("html");
var controller = null;
var $contentsDiv = $("#container > div");

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
        $('.top').text(winSc);
    });
    layout();
    main();

    setTimeout(function(){
        TweenMax.to($('.loading'), .8, { display: 'none', opacity: 0, delay:.5 })
        $window.scrollTop(0);
    }, 1500)

    // scroll Top
    /*$window.on('unload', function () {
        $window.scrollTop(0);
    });*/
});

const $section01 = $('#section01'),
    $section02 = $('#section02'),
    $section03 = $('#section03'),
    $section04 = $('#section04'),
    $section05 = $('#section05');
function layout() {
    var $barcodeBtn = $('.barcode_wrap span'),
        $youtubeBanner = $('.youtube_wrap'),
        $closeBtn = $('.btn_close');

    $barcodeBtn.click(function(){
        gsap.to($youtubeBanner, .5, {opacity:1, x:0});
    });
    $closeBtn.click(function(){
        gsap.to($youtubeBanner, .5, {opacity:0, x:430});
    });

    var $popupBtn = $('.btn_popup'),
        $popupGHI = $('.ghi_popup'),
        $popupGHI_cont = $('.ghi_popup .popup_cont'),
        $popupBtnClose = $('.btn_pop_close');

    $popupBtn.click(function(){
        gsap.to($popupGHI, .5, {opacity:1, visibility: 'visible'});
        gsap.to($popupGHI_cont, .5, {y : 0});
    });
    $popupBtnClose.click(function(){
        gsap.to($popupGHI, .3, {opacity:0, onComplete:function(){
            gsap.to($popupGHI, 0, {visibility: 'hidden'});
        }});
        gsap.to($popupGHI_cont, .5, {y : '50%', delay:.3});
    });
}
function main() {
    smoothScroll("#container");
    gsap.registerPlugin(ScrollTrigger);

    // motions variable
    var $introSticker = $('#introSticker'),
        $slogan01 = $('#slogan01'),
        $brushPhoto = $('#brushPhoto'),
        $slogan02 = $('#slogan02'),
        $slogan03 = $('#slogan03'),
        $yearCount = $('#yearsCount'),
        $seaShip = $('#seaShip'),
        $circleEnding = $('#circleEnding'),
        $outroMotion = $('#outroMotion'),
        $rect = $('#rect'),
        $path = $('#path');

    // common variable
    var $scrollBtn = $('.scroll_btn'),
        $nav = $('#nav'),
        $navBtn = $nav.find('div'),
        $mainLogo = $('#logo'),
        $donateBtnHeader = $('.donate_btn_hd'),
        // $youtubeWrap = $('.youtube_wrap'),
        $barcodeWrap = $('.barcode_wrap');

    // section01 variable
    var $intro = $section01.find('.intro'),
        $introPaper01 = $section01.find('.paper01'),
        $introPaper02 = $section01.find('.paper02'),
        $introPaper03 = $section01.find('.paper03'),
        $introPencil = $section01.find('.pencil'),

        $together = $section01.find('.together'),
        $togetherWrap = $section01.find('.together_wrap'),
        $thumb01 = $section01.find('.thumb01'),
        $thumb02 = $section01.find('.thumb02'),
        $thumb03 = $section01.find('.thumb03'),
        $thumb04 = $section01.find('.thumb04'),

        $slogan01Json = $section01.find('.slogan_motion'),
        $slogan01Text = $section01.find('.slogan_wrap strong'),
        $slogan01Num = $section01.find('.slogan_wrap span'),
        $brushPhotoJson = $section01.find('.brush_motion'),
        $brushWrap = $section01.find('.brush_wrap'),
        $brushText = $section01.find('.brush_wrap p'),
        $brushPhoto01 = $section01.find('.brush_photo .photo01'),
        $brushPhoto02 = $section01.find('.brush_photo .photo02'),
        $brushPhoto03 = $section01.find('.brush_photo .photo03'),
        $attentionWrap = $section01.find('.dignity_wrap'),
        $attentionText01 = $section01.find('.dignity_wrap .text_wrap p:nth-of-type(1) strong'),
        $attentionText02 = $section01.find('.dignity_wrap .text_wrap p:nth-of-type(2) strong'),
        $attentionText03 = $section01.find('.dignity_wrap .text_wrap p:nth-of-type(3) strong'),
        $attentionImg01 = $section01.find('.dignity_wrap .photo01'),
        $attentionImg02 = $section01.find('.dignity_wrap .photo02'),
        $attentionImg03 = $section01.find('.dignity_wrap .photo03'),
        $attentionImg04 = $section01.find('.dignity_wrap .photo04'),
        $attentionImg05 = $section01.find('.dignity_wrap .photo05'),
        $attentionImg06 = $section01.find('.dignity_wrap .photo06'),
        $bannerWrap01 = $section01.find('.banner_wrap'),
        $banner01Btn = $section01.find('.donate_btn'),
        $banner01Photo = $section01.find('.photo_wrap');

    // section02 variable
    var $slogan02Json = $section02.find('.slogan_motion'),
        $slogan02Text = $section02.find('.slogan_wrap strong'),
        $slogan02Num = $section02.find('.slogan_wrap span'),
        $aboutGHI = $section02.find('.about_wrap'),
        $aboutGHIKeyword = $section02.find('.about_wrap strong'),
        $aboutGHIDetail = $section02.find('.about_wrap dl'),
        $tag0201Text = $section02.find('.tag01 strong'),
        $tag0201Img = $section02.find('.tag01 img'),
        $tag0202Text = $section02.find('.tag02 strong'),
        $tag0202Img = $section02.find('.tag02 img'),
        $tag0203Text = $section02.find('.tag03 strong'),
        $tag0204Text = $section02.find('.tag04 strong'),
        $GHIWrap = $section02.find('.ghi_wrap'),
        $GHIText01 = $section02.find('.ghi_wrap .text_wrap p strong'),
        $magazineWrap = $section02.find('.ghi_wrap .magazine_wrap'),
        $magazineText = $section02.find('.ghi_wrap .magazine_wrap div'),
        $aboutSelfText = $section02.find('.title_wrap strong'),
        $aboutSelfMap = $section02.find('.title_wrap p'),
        $areaWrap = $section02.find('.area_wrap'),
        $areaText = $section02.find('.area_wrap div'),
        $areaBg = $section02.find('.area_wrap .bg'),
        $dignityWrap = $section02.find('.dignity_wrap'),
        $dignityText = $section02.find('.dignity_wrap .text_wrap p'),
        $dignityImg01 = $section02.find('.dignity_wrap .photo01'),
        $dignityImg02 = $section02.find('.dignity_wrap .photo02'),
        $dignityImg03 = $section02.find('.dignity_wrap .photo03'),
        $bannerWrap02 = $section02.find('.banner_wrap'),
        $banner02Btn = $section02.find('.donate_btn'),
        $banner02Photo = $section02.find('.photo_wrap');

    // section03 variable
    var $slogan03Json = $section03.find('.slogan_motion'),
        $slogan03Text = $section03.find('.slogan_wrap strong'),
        $slogan03Num = $section03.find('.slogan_wrap span'),
        $actionText = $section03.find('.action > .title_wrap'),
        $tag0301Text = $section03.find('.tag01 strong'),
        $tag0301Img = $section03.find('.tag01 img'),
        $tag0302Text = $section03.find('.tag02 strong'),
        $tag0302Img = $section03.find('.tag02 img'),
        $tag0303Text = $section03.find('.tag03 strong'),
        $sproutWrap = $section03.find('.sprout_wrap'),
        $sproutText = $section03.find('.sprout_wrap strong'),
        $sproutImgWrap = $section03.find('.sprout_img'),
        $sproutImg01 = $section03.find('.sprout_img span:nth-of-type(1)'),
        $sproutImg02 = $section03.find('.sprout_img span:nth-of-type(2)'),
        $sproutImg03 = $section03.find('.sprout_img span:nth-of-type(3)'),
        $sproutImg04 = $section03.find('.sprout_img span:nth-of-type(4)'),
        $sproutImg05 = $section03.find('.sprout_img span:nth-of-type(5)'),
        $sproutImg06 = $section03.find('.sprout_img span:nth-of-type(6)'),
        $sproutImg07 = $section03.find('.sprout_img span:nth-of-type(7)'),
        $sproutImg08 = $section03.find('.sprout_img span:nth-of-type(8)'),
        $sproutImg09 = $section03.find('.sprout_img span:nth-of-type(9)'),
        $subject01Wrap = $section03.find('.subject01'),
        $subject01Eng = $section03.find('.subject01 .intro_wrap .title_wrap em'),
        $subject01Info = $section03.find('.subject01 .intro_wrap .title_wrap > span'),
        $subject01Intro = $section03.find('.subject01 .intro_wrap'),
        $subject01Title = $section03.find('.subject01 .title_wrap'),
        $subject01Img01 = $section03.find('.subject01 .subject_img01'),
        $subject01Img02 = $section03.find('.subject01 .subject_img02'),
        $subject01Text01 = $section03.find('.subject01 strong:nth-of-type(1) span:nth-of-type(1)'),
        $subject01Shadow01 = $section03.find('.subject01 strong:nth-of-type(2) span:nth-of-type(1)'),
        $subject01Text02 = $section03.find('.subject01 strong:nth-of-type(1) span:nth-of-type(2)'),
        $subject01Shadow02 = $section03.find('.subject01 strong:nth-of-type(2) span:nth-of-type(2)'),
        $subject01Text04 = $section03.find('.subject01 strong:nth-of-type(1) span:nth-of-type(4)'),
        $subject01Shadow04 = $section03.find('.subject01 strong:nth-of-type(2) span:nth-of-type(4)'),
        $subject01Text05 = $section03.find('.subject01 strong:nth-of-type(1) span:nth-of-type(5)'),
        $subject01Shadow05 = $section03.find('.subject01 strong:nth-of-type(2) span:nth-of-type(5)'),
        $subject01Text07 = $section03.find('.subject01 strong:nth-of-type(1) span:nth-of-type(7)'),
        $subject01Shadow07 = $section03.find('.subject01 strong:nth-of-type(2) span:nth-of-type(7)'),
        $subject01Text08 = $section03.find('.subject01 strong:nth-of-type(1) span:nth-of-type(8)'),
        $subject01Shadow08 = $section03.find('.subject01 strong:nth-of-type(2) span:nth-of-type(8)'),
        $subject01About = $section03.find('.subject01 .about_wrap'),
        $subject01InterviewBg = $section03.find('.subject01 .interview_wrap .bg'),
        $subject01InterviewText = $section03.find('.subject01 .interview_wrap .text_wrap'),
        $subject01InterviewImg01 = $section03.find('.subject01 .interview_wrap .photo_img01'),
        $subject01InterviewImg02 = $section03.find('.subject01 .interview_wrap .photo_img02'),
        $subject01InterviewImg03 = $section03.find('.subject01 .interview_wrap .photo_img03'),
        $subject02Wrap = $section03.find('.subject02'),
        $subject02Eng = $section03.find('.subject02 .intro_wrap .title_wrap em'),
        $subject02Info = $section03.find('.subject02 .intro_wrap .title_wrap > span'),
        $subject02Intro = $section03.find('.subject02 .intro_wrap'),
        $subject02Title = $section03.find('.subject02 .title_wrap'),
        $subject02Img01 = $section03.find('.subject02 .subject_img01'),
        $subject02Img02 = $section03.find('.subject02 .subject_img02'),
        $subject02Text01 = $section03.find('.subject02 strong:nth-of-type(1) span:nth-of-type(1)'),
        $subject02Shadow01 = $section03.find('.subject02 strong:nth-of-type(2) span:nth-of-type(1)'),
        $subject02Text02 = $section03.find('.subject02 strong:nth-of-type(1) span:nth-of-type(2)'),
        $subject02Shadow02 = $section03.find('.subject02 strong:nth-of-type(2) span:nth-of-type(2)'),
        $subject02Text04 = $section03.find('.subject02 strong:nth-of-type(1) span:nth-of-type(4)'),
        $subject02Shadow04 = $section03.find('.subject02 strong:nth-of-type(2) span:nth-of-type(4)'),
        $subject02Text05 = $section03.find('.subject02 strong:nth-of-type(1) span:nth-of-type(5)'),
        $subject02Shadow05 = $section03.find('.subject02 strong:nth-of-type(2) span:nth-of-type(5)'),
        $subject02About = $section03.find('.subject02 .about_wrap'),
        $subject02InterviewBg = $section03.find('.subject02 .interview_wrap .bg'),
        $subject02InterviewText = $section03.find('.subject02 .interview_wrap .text_wrap'),
        $subject02InterviewImg01 = $section03.find('.subject02 .interview_wrap .photo_img01'),
        $subject02InterviewImg02 = $section03.find('.subject02 .interview_wrap .photo_img02'),
        $subject02InterviewImg03 = $section03.find('.subject02 .interview_wrap .photo_img03'),
        $subject04Wrap = $section03.find('.subject04'),
        $subject04Eng = $section03.find('.subject04 .intro_wrap .title_wrap em'),
        $subject04Info = $section03.find('.subject04 .intro_wrap .title_wrap > span'),
        $subject04Intro = $section03.find('.subject04 .intro_wrap'),
        $subject04Title = $section03.find('.subject04 .title_wrap'),
        $subject04Img01 = $section03.find('.subject04 .subject_img01'),
        $subject04Img02 = $section03.find('.subject04 .subject_img02'),
        $subject04Text01 = $section03.find('.subject04 strong:nth-of-type(1) span:nth-of-type(1)'),
        $subject04Shadow01 = $section03.find('.subject04 strong:nth-of-type(2) span:nth-of-type(1)'),
        $subject04Text02 = $section03.find('.subject04 strong:nth-of-type(1) span:nth-of-type(2)'),
        $subject04Shadow02 = $section03.find('.subject04 strong:nth-of-type(2) span:nth-of-type(2)'),
        $subject04Text04 = $section03.find('.subject04 strong:nth-of-type(1) span:nth-of-type(4)'),
        $subject04Shadow04 = $section03.find('.subject04 strong:nth-of-type(2) span:nth-of-type(4)'),
        $subject04Text05 = $section03.find('.subject04 strong:nth-of-type(1) span:nth-of-type(5)'),
        $subject04Shadow05 = $section03.find('.subject04 strong:nth-of-type(2) span:nth-of-type(5)'),
        $subject04Text06 = $section03.find('.subject04 strong:nth-of-type(1) span:nth-of-type(6)'),
        $subject04Shadow06 = $section03.find('.subject04 strong:nth-of-type(2) span:nth-of-type(6)'),
        $subject04Text08 = $section03.find('.subject04 strong:nth-of-type(1) span:nth-of-type(8)'),
        $subject04Shadow08 = $section03.find('.subject04 strong:nth-of-type(2) span:nth-of-type(8)'),
        $subject04Text09 = $section03.find('.subject04 strong:nth-of-type(1) span:nth-of-type(9)'),
        $subject04Shadow09 = $section03.find('.subject04 strong:nth-of-type(2) span:nth-of-type(9)'),
        $subject04About = $section03.find('.subject04 .about_wrap'),
        $subject04InterviewBg = $section03.find('.subject04 .interview_wrap .bg'),
        $subject04InterviewText = $section03.find('.subject04 .interview_wrap .text_wrap'),
        $subject04InterviewImg01 = $section03.find('.subject04 .interview_wrap .photo_img01'),
        $subject04InterviewImg02 = $section03.find('.subject04 .interview_wrap .photo_img02'),
        $subject04InterviewImg03 = $section03.find('.subject04 .interview_wrap .photo_img03'),
        $bannerWrap03 = $section03.find('.banner_wrap'),
        $banner03Btn = $section03.find('.donate_btn'),
        $banner03Photo = $section03.find('.photo_wrap');

    // section04 variable
    var $yearsWrap = $section04.find('.years'),
        $voyageWrap = $section04.find('.title_wrap'),
        $voyageText01 = $section04.find('.title_wrap p:nth-of-type(1) strong'),
        $voyageText02 = $section04.find('.title_wrap p:nth-of-type(2) strong'),
        $voyageText03 = $section04.find('.title_wrap p:nth-of-type(3) strong'),
        $voyageText04 = $section04.find('.title_wrap p:nth-of-type(4) strong')

    // section05 variable
    var $endingWrap = $section05.find('.text_wrap'),
        $endingText01 = $section05.find('.text_wrap strong:nth-of-type(1)'),
        $endingText02 = $section05.find('.text_wrap strong:nth-of-type(2)'),
        $endingText03 = $section05.find('.text_wrap strong:nth-of-type(3)'),
        $endingText04 = $section05.find('.text_wrap strong:nth-of-type(4)'),
        $peopleImg01 = $section05.find('.people01'),
        $peopleImg02 = $section05.find('.people02'),
        $peopleImg03 = $section05.find('.people03'),
        $peopleImg04 = $section05.find('.people04'),
        $peopleImg05 = $section05.find('.people05'),
        $peopleImg06 = $section05.find('.people06'),
        $peopleImg07 = $section05.find('.people07'),
        $sticker = $section05.find('.sticker'),
        $outroWrap = $section05.find('.outro'),
        $outroBtn = $section05.find('.donate_wrap'),
        $outroPencil = $section05.find('.outro_pencil');

    const section01Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: $section01,
            start: 'center center',
            end: "+=13700",
            pin: true,
            scrub: 2,
            onUpdate: function(self){
                $navBtn.removeClass('active');
                $('.nav01').addClass('active');
                gsap.to('.nav01 span', 0, {height:(self.progress * 100)+'%'});
            }
        }
    });
    function section01Events(){
        var section01TimelineAdd = gsap.timeline();
        /*
        합산 13900
        .1s = 1개 = 0.1s
        .2s = 34개 = 6.8s
        .3s = 5개 = 1.5s
        .5s = 5개(delay 3개 포함) = 2.5s
        .7s = 1개 = 0.7s
        .9s = 1개(delay 1개 포함) = 0.9s
        1.2s = 1개(delay 1개 포함) = 1.2s
        */
        section01TimelineAdd
            .to($intro, .2, { autoAlpha:0 })
            .to($nav, .2, { autoAlpha:1 }, '-=.2')
            /*.to($mainLogo, .2, { autoAlpha:1 }, '-=.2')*/
            .to($barcodeWrap, .2, { autoAlpha:1 }, '-=.1')
            .to($together, .2, { autoAlpha:1 }, '-=.15')
            .to($togetherWrap, .2, { autoAlpha:1, onStart:function(){
                    counter();
                }}, '-=.2')
            .to($thumb01, .2, { autoAlpha:1, scale:1 })
            .to($thumb02, .2, { autoAlpha:1, scale:1 }, '-=.2')
            .to($thumb03, .2, { autoAlpha:1, scale:1 }, '-=.2')
            .to($thumb04, .2, { autoAlpha:1, scale:1 }, '-=.2')
            .to($togetherWrap, .2, { autoAlpha:0, delay:.5 })
            .to($slogan01Json, .2, { autoAlpha:1 }, '-=.15')
            .to($slogan01Num, .2, { autoAlpha:1 })
            .to($slogan01Text, .2, { autoAlpha:1 }, '-=.2')
            .to($slogan01Json, .2, { delay:.9 }, '-=.2')
            .to($slogan01Json, .2, { scale:.5, autoAlpha:0 }, '-=.075')
            .to($slogan01Num, .2, { autoAlpha:0 }, '-=.2')
            .to($slogan01Text, .2, { autoAlpha:0 }, '-=.2')
            .to($brushPhotoJson, .2, { autoAlpha:0, delay:1.2 })
            .to($brushText, .2, { autoAlpha:1 }, '-=.1')
            .to($brushPhoto01, .2, { scale:1, autoAlpha:1 }, '-=.2')
            .to($brushPhoto02, .2, { scale:1, autoAlpha:1 }, '-=.2')
            .to($brushPhoto03, .2, { scale:1, autoAlpha:1 }, '-=.2')
            .to($brushWrap, .2, { autoAlpha:0, delay:.5 })
            .to($attentionImg02, .2, { x:20, y:20, scale:1, autoAlpha:1 })
            .to($attentionImg01, .2, { x:20, y:20, scale:1, autoAlpha:1 }, '-=.1')
            .to($attentionImg03, .2, { x:20, y:20, scale:1, autoAlpha:1 }, '-=.1')
            .to($attentionText01, .3, { autoAlpha:1 }, '-=.1')
            .to($attentionText01, .3, { autoAlpha:0 })
            .to($attentionText02, .3, { autoAlpha:1 })
            .to($attentionText02, .3, { autoAlpha:0 })
            .to($attentionImg02, .2, { scale:0.5, autoAlpha:0, transformOrigin:'1095px -68px' })
            .to($attentionImg01, .2, { scale:0.5, autoAlpha:0, transformOrigin:'-294px 602px' }, '-=.2')
            .to($attentionImg03, .2, { scale:0.5, autoAlpha:0, transformOrigin:'-876px -198px' }, '-=.2')
            .to($attentionImg04, .2, { scale:1, autoAlpha:1 })
            .to($attentionImg05, .2, { scale:1, autoAlpha:1 }, '-=.2')
            .to($attentionImg06, .2, { scale:1, autoAlpha:1 }, '-=.2')
            .to($attentionText03, .3, { autoAlpha:1 })
            .to($attentionWrap, .2, { autoAlpha:0, delay:.5 })
            .to($bannerWrap01, .5, { autoAlpha:1 }, '-=.05')
            .to($banner01Btn, .5, { visibility:'visible' }, '-=.5')
            .to($donateBtnHeader, .2, { autoAlpha:1 }, '-=.5')
            .to($barcodeWrap, .1, { autoAlpha:0 }, '-=.5')
            .to($banner01Photo, .7, { rotation:25 }, '-=.25')
        return section01TimelineAdd;
    }
    section01Timeline.add(section01Events());

    const section02Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: $section02,
            start: 'center center',
            end: "+=16200",
            pin: true,
            scrub: 2,
            onUpdate: function(self){
                $navBtn.removeClass('active');
                $('.nav01, .nav02').addClass('active');
                gsap.to('.nav02 span', 0, {height:(self.progress * 100)+'%'});
            }
        }
    });
    function section02Events(){
        var section02TimelineAdd = gsap.timeline();
        /*
        합산 16200
        .1s = 6개(delay 4개 포함) = 0.6s
        .2s = 34개(delay 3개 포함) = 6.8s
        .3s = 2개 = 0.6s
        .5s = 15개(delay 6개 포함) = 7.5s
        .7s = 1개 = 0.7s
        */
        section02TimelineAdd
            .to($barcodeWrap, .1, { autoAlpha:1 }, '-=.5')
            .to($donateBtnHeader, .2, { autoAlpha:1 }, '-=.5')
            .to($slogan02Num, .2, { autoAlpha:1 }, '-=.5')
            .to($slogan02Text, .2, { autoAlpha:1 }, '-=.5')
            .to($slogan02Json, .2, { delay:.5 }, '-=.2')
            .to($slogan02Json, .2, { scale:.5, autoAlpha:0 }, '-=.1')
            .to($slogan02Num, .2, { autoAlpha:0 }, '-=.2')
            .to($slogan02Text, .2, { autoAlpha:0 }, '-=.2')
            .to($aboutGHIKeyword, .2, { scale:1, autoAlpha:1 }, '-=.1')
            .to($aboutGHIDetail, .2, { autoAlpha:1, x:0 }, '-=.02')
            .to($aboutGHIKeyword, .5, { autoAlpha:1 })
            .to($aboutGHI, .2, { autoAlpha:0, delay:.5 }, '-=.35')
            .to($tag0201Text, .2, { scale:1.5, autoAlpha:1 }, '-=.2')
            .to($tag0201Text, .2, { scale:2, autoAlpha:0, delay:.1 })
            .to($tag0202Text, .2, { scale:1.5, autoAlpha:1, delay:.2 })
            .to($tag0202Text, .2, { scale:2, autoAlpha:0, delay:.1 })
            .to($tag0203Text, .2, { scale:1.5, autoAlpha:1, delay:.2 })
            .to($tag0203Text, .2, { scale:2, autoAlpha:0, delay:.1 })
            .to($tag0204Text, .2, { scale:1.5, autoAlpha:1, delay:.2 })
            .to($tag0204Text, .2, { scale:2, autoAlpha:0, delay:.1 })
            .to($tag0201Img, .5, { scale:1.5, autoAlpha:1 }, '-=2.0')
            .to($tag0201Img, .5, { scale:2.5, autoAlpha:0 }, '-=1.6')
            .to($tag0202Img, .5, { scale:1.5, autoAlpha:1 }, '-=1.0')
            .to($tag0202Img, .5, { scale:2.5, autoAlpha:0 }, '-=0.6')
            .to($GHIText01, .3, { x:0, autoAlpha:1 })
            .to($magazineWrap, .3, { autoAlpha:1, scale:1 }, '-=.3')
            .to($magazineText, .2, { autoAlpha:1, x:0 }, '-=.3')
            .to($GHIWrap, .2, { autoAlpha:0, delay:.5 }, '-=.1')
            .to($aboutSelfText, .2, { autoAlpha:1, scale:1 }, '-=.1')
            .to($aboutSelfText, .2, { autoAlpha:0, scale:.7, delay:.5 })
            .to($aboutSelfMap, .2, { autoAlpha:1, scale:1 }, '-=.6')
            .to($aboutSelfMap, .2, { autoAlpha:0, scale:.9 }, '-=.3')
            .to($areaBg, .5, { scale:1, autoAlpha:1 })
            .to($areaText, .2, { autoAlpha:1, x:0 }, '-=.1')
            .to($areaWrap, .2, { autoAlpha:0, delay:.5 })
            .to($dignityImg01, .2, { x:20, y:20, scale:1, autoAlpha:1 })
            .to($dignityImg02, .2, { x:20, y:20, scale:1, autoAlpha:1 }, '-=.1')
            .to($dignityImg03, .2, { x:20, y:20, scale:1, autoAlpha:1 }, '-=.1')
            .to($dignityText, .2, { autoAlpha:1 })
            .to($dignityWrap, .5, { autoAlpha:0, delay:.5 })
            .to($bannerWrap02, .5, { autoAlpha:1 }, '-=.05')
            .to($banner02Btn, .5, { visibility:'visible' }, '-=.5')
            .to($donateBtnHeader, .2, { autoAlpha:1 }, '-=.5')
            .to($barcodeWrap, .1, { autoAlpha:0 }, '-=.5')
            .to($banner02Photo, .7, { rotation:25 }, '-=.25')
        return section02TimelineAdd;
    }
    section02Timeline.add(section02Events());

    const section03Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: $section03,
            start: 'center center',
            end: "+=25050",
            pin: true,
            scrub: 3,
            onUpdate: function(self){
                $navBtn.removeClass('active');
                $('.nav01, .nav02, .nav03').addClass('active');
                gsap.to('.nav03 span', 0, {height:(self.progress * 100)+'%'});
            }
        }
    });
    function section03Events(){
        var section03TimelineAdd = gsap.timeline();
        /*
        합산 25050
        .05s = 51개 = 2.55s
        .1s = 13개(delay 3개 포함) = 1.3s
        .15s = 8개 = 1.2s
        .25s = 6개 = 1.5s
        .2s = 57개(delay 7개 포함) = 11.4s
        .4s = 6개 = 2.4s
        .5s = 8개(delay 2개 포함) = 4.0s
        .7s = 1개 = 0.7s
        */
        section03TimelineAdd
            .to($barcodeWrap, .1, { autoAlpha:1 }, '-=.5')
            .to($donateBtnHeader, .2, { autoAlpha:1 }, '-=.5')
            .to($slogan03Num, .2, { autoAlpha:1 }, '-=.5')
            .to($slogan03Text, .2, { autoAlpha:1 }, '-=.5')
            .to($slogan03Json, .2, { delay:.2 }, '-=.2')
            .to($slogan03Json, .2, { scale:.5, autoAlpha:0 }, '-=.1')
            .to($slogan03Num, .2, { autoAlpha:0 }, '-=.2')
            .to($slogan03Text, .2, { autoAlpha:0 }, '-=.2')
            .to($actionText, .2, { scale:1, autoAlpha:1 }, '-=.1')
            .to($actionText, .2, { scale:.5, autoAlpha:0, delay:.5 })
            .to($tag0301Text, .2, { scale:1.5, autoAlpha:1 })
            .to($tag0301Text, .2, { scale:2, autoAlpha:0, delay:.1 }, '-=.02')
            .to($tag0302Text, .2, { scale:1.5, autoAlpha:1, delay:.2 }, '-=.08')
            .to($tag0302Text, .2, { scale:2, autoAlpha:0, delay:.1 }, '-=.02')
            .to($tag0303Text, .2, { scale:1.5, autoAlpha:1, delay:.2 }, '-=.08')
            .to($tag0303Text, .2, { scale:2, autoAlpha:0, delay:.1 }, '-=.02')
            .to($tag0301Img, .5, { scale:1.5, autoAlpha:1 }, '-=1.4')
            .to($tag0301Img, .5, { scale:1.8, autoAlpha:0 }, '-=1.0')
            .to($tag0302Img, .5, { scale:1.5, autoAlpha:1 }, '-=0.8')
            .to($tag0302Img, .5, { scale:1.8, autoAlpha:0 }, '-=0.4')
            .to($sproutText, .2, { autoAlpha:1 }, '-=.25')
            .to($sproutImgWrap, .2, { autoAlpha:1 }, '-=.2')
            .to($sproutImg01, .2, { opacity:1, visibility: 'visible' }, '-=.2')
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
            .to($sproutImg09, .15, { opacity:1, visibility: 'visible' }, '-=.15')
            .to($sproutWrap, .2, { autoAlpha:0, delay:.5 })
            .to($subject01Eng, .25, { autoAlpha:1 })
            .to($subject01Info, .25, { autoAlpha:1 }, '-=.25')
            .to($subject01Text01, .05, { autoAlpha:.5 }, '-=.25')
            .to($subject01Shadow01, .05, { autoAlpha:1 }, '-=.025')
            .to($subject01Text01, .05, { autoAlpha:0 }, '-=.025')
            .to($subject01Text05, .05, { autoAlpha:.5 }, '-=.1')
            .to($subject01Shadow05, .05, { autoAlpha:1 }, '-=.025')
            .to($subject01Text05, .05, { autoAlpha:0 }, '-=.025')
            .to($subject01Text07, .05, { autoAlpha:.5 }, '-=.1')
            .to($subject01Shadow07, .05, { autoAlpha:1 }, '-=.025')
            .to($subject01Text07, .05, { autoAlpha:0 }, '-=.025')
            .to($subject01Text02, .05, { autoAlpha:.5 }, '-=.1')
            .to($subject01Shadow02, .05, { autoAlpha:1 }, '-=.025')
            .to($subject01Text02, .05, { autoAlpha:0 }, '-=.025')
            .to($subject01Text04, .05, { autoAlpha:.5 }, '-=.1')
            .to($subject01Shadow04, .05, { autoAlpha:1 }, '-=.025')
            .to($subject01Text04, .05, { autoAlpha:0 }, '-=.025')
            .to($subject01Text08, .05, { autoAlpha:.5 }, '-=.1')
            .to($subject01Shadow08, .05, { autoAlpha:1 }, '-=.025')
            .to($subject01Text08, .05, { autoAlpha:0 }, '-=.025')
            .to($subject01Title, .2, { autoAlpha:0, delay:.2 })
            .to($subject01Img01, .4, { autoAlpha:1, scale:1 })
            .to($subject01Img02, .4, { autoAlpha:1, scale:1 }, '-=.2')
            .to($subject01Intro, .2, { autoAlpha:0, scale:.95 })
            .to($subject01About, .2, { autoAlpha:1 }, '-=.1')
            .to($subject01About, .2, { autoAlpha:0, delay:.2 })
            .to($subject01InterviewBg, .2, { autoAlpha:1, scale:1 }, '-=.1')
            .to($subject01InterviewText, .2, { autoAlpha:1 }, '-=.05')
            .to($subject01InterviewImg01, .2, { autoAlpha:1, scale:1 }, '-=.1')
            .to($subject01InterviewImg02, .2, { autoAlpha:1, scale:1 }, '-=.15')
            .to($subject01InterviewImg03, .2, { autoAlpha:1, scale:1 }, '-=.15')
            .to($subject01Wrap, .2, { autoAlpha:0 })
            .to($subject02Eng, .25, { autoAlpha:1 })
            .to($subject02Info, .25, { autoAlpha:1 }, '-=.25')
            .to($subject02Text01, .05, { autoAlpha:.5 }, '-=.25')
            .to($subject02Shadow01, .05, { autoAlpha:1 }, '-=.025')
            .to($subject02Text01, .05, { autoAlpha:0 }, '-=.025')
            .to($subject02Text05, .05, { autoAlpha:.5 }, '-=.1')
            .to($subject02Shadow05, .05, { autoAlpha:1 }, '-=.025')
            .to($subject02Text05, .05, { autoAlpha:0 }, '-=.025')
            .to($subject02Text02, .05, { autoAlpha:.5 }, '-=.1')
            .to($subject02Shadow02, .05, { autoAlpha:1 }, '-=.025')
            .to($subject02Text02, .05, { autoAlpha:0 }, '-=.025')
            .to($subject02Text04, .05, { autoAlpha:.5 }, '-=.1')
            .to($subject02Shadow04, .05, { autoAlpha:1 }, '-=.025')
            .to($subject02Text04, .05, { autoAlpha:0 }, '-=.025')
            .to($subject02Title, .2, { autoAlpha:0 })
            .to($subject02Img01, .4, { autoAlpha:1, scale:1 })
            .to($subject02Img02, .4, { autoAlpha:1, scale:1 }, '-=.2')
            .to($subject02Intro, .2, { autoAlpha:0, scale:.95 })
            .to($subject02About, .2, { autoAlpha:1 }, '-=.1')
            .to($subject02About, .2, { autoAlpha:0, delay:.2 })
            .to($subject02InterviewBg, .2, { autoAlpha:1, scale:1 }, '-=.1')
            .to($subject02InterviewText, .2, { autoAlpha:1 }, '-=.05')
            .to($subject02InterviewImg01, .2, { autoAlpha:1, scale:1 }, '-=.1')
            .to($subject02InterviewImg02, .2, { autoAlpha:1, scale:1 }, '-=.15')
            .to($subject02InterviewImg03, .2, { autoAlpha:1, scale:1 }, '-=.15')
            .to($subject02Wrap, .2, { autoAlpha:0 })
            .to($subject04Eng, .25, { autoAlpha:1 })
            .to($subject04Info, .25, { autoAlpha:1 }, '-=.25')
            .to($subject04Text02, .05, { autoAlpha:.5 }, '-=.25')
            .to($subject04Shadow02, .05, { autoAlpha:1 }, '-=.025')
            .to($subject04Text02, .05, { autoAlpha:0 }, '-=.025')
            .to($subject04Text08, .05, { autoAlpha:.5 }, '-=.1')
            .to($subject04Shadow08, .05, { autoAlpha:1 }, '-=.025')
            .to($subject04Text08, .05, { autoAlpha:0 }, '-=.025')
            .to($subject04Text05, .05, { autoAlpha:.5 }, '-=.1')
            .to($subject04Shadow05, .05, { autoAlpha:1 }, '-=.025')
            .to($subject04Text05, .05, { autoAlpha:0 }, '-=.025')
            .to($subject04Text01, .05, { autoAlpha:.5 }, '-=.1')
            .to($subject04Shadow01, .05, { autoAlpha:1 }, '-=.025')
            .to($subject04Text01, .05, { autoAlpha:0 }, '-=.025')
            .to($subject04Text06, .05, { autoAlpha:.5 }, '-=.1')
            .to($subject04Shadow06, .05, { autoAlpha:1 }, '-=.025')
            .to($subject04Text06, .05, { autoAlpha:0 }, '-=.025')
            .to($subject04Text04, .05, { autoAlpha:.5 }, '-=.1')
            .to($subject04Shadow04, .05, { autoAlpha:1 }, '-=.025')
            .to($subject04Text04, .05, { autoAlpha:0 }, '-=.025')
            .to($subject04Text09, .05, { autoAlpha:.5 }, '-=.1')
            .to($subject04Shadow09, .05, { autoAlpha:1 }, '-=.025')
            .to($subject04Text09, .05, { autoAlpha:0 }, '-=.025')
            .to($subject04Title, .2, { autoAlpha:0 })
            .to($subject04Img01, .4, { autoAlpha:1, scale:1 })
            .to($subject04Img02, .4, { autoAlpha:1, scale:1 }, '-=.2')
            .to($subject04Intro, .2, { autoAlpha:0, scale:.95 })
            .to($subject04About, .2, { autoAlpha:1 }, '-=.1')
            .to($subject04About, .2, { autoAlpha:0, delay:.2 })
            .to($subject04InterviewBg, .2, { autoAlpha:1, scale:1 }, '-=.1')
            .to($subject04InterviewText, .2, { autoAlpha:1 }, '-=.05')
            .to($subject04InterviewImg01, .2, { autoAlpha:1, scale:1 }, '-=.1')
            .to($subject04InterviewImg02, .2, { autoAlpha:1, scale:1 }, '-=.15')
            .to($subject04InterviewImg03, .2, { autoAlpha:1, scale:1 }, '-=.15')
            .to($subject04Wrap, .2, { autoAlpha:0 })
            .to($bannerWrap03, .5, { autoAlpha:1 }, '-=.05')
            .to($banner03Btn, .5, { visibility:'visible' }, '-=.5')
            .to($donateBtnHeader, .2, { autoAlpha:1 }, '-=.5')
            .to($barcodeWrap, .1, { autoAlpha:0 }, '-=.5')
            .to($banner03Photo, .7, { rotation:25 }, '-=.25')
        return section03TimelineAdd;
    }
    section03Timeline.add(section03Events());

    const section04Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: $section04,
            start: 'center center',
            end: "+=10800",
            pin: true,
            scrub: 2,
            onUpdate: function(self){
                $navBtn.removeClass('active');
                $('.nav01, .nav02, .nav03, .nav04').addClass('active');
                gsap.to('.nav04 span', 0, {height:(self.progress * 100)+'%'});
            }
        }
    });
    function section04Events(){
        var section04TimelineAdd = gsap.timeline();
        /*
        합산 10800
        .2s = 7개(delay 3개 포함) = 1.4s
        .3s = 3개 = 0.9s
        .5s = 4개 = 2.0s
        2s = 1개(delay 1개 포함) = 2s
        4s = 1개(delay 1개 포함) = 4s
        */
        section04TimelineAdd
            .to($donateBtnHeader, .2, { autoAlpha:1 }, '-=.2')
            .to($yearCount, .2, { autoAlpha:0, delay:2 })
            .to($yearsWrap, .2, { autoAlpha:0, delay:4 })
            .to($voyageWrap, .2, { autoAlpha:1 })
            .to($voyageText01, .5, { x:0, autoAlpha:1 })
            .to($voyageText01, .3, { autoAlpha:0, delay:.2 })
            .to($voyageText02, .5, { x:0, autoAlpha:1 })
            .to($voyageText02, .3, { autoAlpha:0, delay:.2 })
            .to($voyageText03, .5, { x:0, autoAlpha:1 })
            .to($voyageText03, .3, { autoAlpha:0, delay:.2 })
            .to($voyageText04, .5, { x:0, autoAlpha:1 })
        return section04TimelineAdd;
    }
    section04Timeline.add(section04Events());

    const section05Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: $section05,
            start: 'center center',
            end: "+=11050",
            pin: true,
            scrub: 2,
            onUpdate:  function(self){
                $navBtn.addClass('active');
                gsap.to('.nav05 span', 0, {height:(self.progress * 100)+'%'});
            }
        }
    });
    function section05Events(){
        var section05TimelineAdd = gsap.timeline();
        /*
        합산 10050
        .2s = 16개(delay 1개 포함) = 3.2s
        .25s = 3개(delay 3개 포함) = 0.75s
        .3s = 4개 = 1.2s
        .4s = 1개 = 0.4s
        .5s = 9개(delay 1개 포함) = 4.5s
        1s = 1개(delay 1개 포함) = 1.0s
        */
        section05TimelineAdd
            .to($circleEnding, .2, { autoAlpha:1 })
            .to($endingText01, .2, { autoAlpha:1 })
            .to($endingText01, .2, { autoAlpha:0, delay:.5 })
            .to($endingText02, .5, { autoAlpha:1, delay:.25 })
            .to($endingText02, .5, { autoAlpha:0, delay:.25 })
            .to($endingText03, .5, { autoAlpha:1 })
            .to($endingText03, .5, { autoAlpha:0, delay:.25 })
            .to($peopleImg01, .2, { autoAlpha:1, scale:1 }, '-=1.4')
            .to($peopleImg02, .2, { autoAlpha:1, scale:1 }, '-=1.3')
            .to($peopleImg03, .2, { autoAlpha:1, scale:1 }, '-=1.0')
            .to($peopleImg04, .2, { autoAlpha:1, scale:1 }, '-=1.1')
            .to($peopleImg05, .2, { autoAlpha:1, scale:1 }, '-=0.9')
            .to($peopleImg06, .2, { autoAlpha:1, scale:1 }, '-=1.2')
            .to($peopleImg07, .2, { autoAlpha:1, scale:1 }, '-=0.8')
            .to($endingText04, .5, { autoAlpha:1 }, '-=.1')
            .to($endingWrap, .3, { autoAlpha:0, delay:.2 })
            .to($circleEnding, .3, { autoAlpha:0 }, '-=.2')
            .to($sticker, .3, { autoAlpha:1 }, '-=.2')
            .to($sticker, .3, { delay:.4, autoAlpha:0 })

            .to($nav, .2, { autoAlpha:0 }, '-=.2')
            .to($donateBtnHeader, .2, { autoAlpha:1 }, '-=.2')
            .to($outroWrap, .5, { autoAlpha:1 }, '-=.2')
            .to($footer, .2, { autoAlpha:1 }, '-=.2')
            .to($outroBtn, .5, { autoAlpha:1 }, '-=.1')
            .to($outroPencil, .5, { x:0, y:0, autoAlpha:1, delay:0.2 })
            .to($outroWrap, .2, { delay:1 })
        return section05TimelineAdd;
    }
    section05Timeline.add(section05Events());

    // intro
    var introTimeline = gsap.timeline({delay:2.5})
        .to($introPaper01, 1.5, { x:0, y:0, rotate:0 })
        .to($introPaper02, 1.5, { x:0, y:0, rotate:0 }, '-=1.5')
        .to($introPaper03, 1.5, { x:0, y:0, rotate:0 }, '-=1.5')
        .to($introPencil, .5, { x:0, y:0, autoAlpha:1 });
    // intro sticker
    let introSticker = bodymovin.loadAnimation({
        container: $introSticker[0],
        path: './datafile/introSticker.json',
        renderer: 'svg',
        loop: false,
        autoplay: false
    });
    setTimeout(function(){
        introSticker.play();
    }, 1500)
    // slogan01
    LottieScrollTrigger({
        target: $slogan01,
        path: "./datafile/slogan01.json",
        start: 2400, // 섹션01 시작위치 + 2400
        end: '+=700',
        scrub: 2
    });
    // brushPhoto
    LottieScrollTrigger({
        target: $brushPhoto,
        path: "./datafile/brushPhoto.json",
        start: 4600, // 섹션01 시작위치 + 4600
        end: '+=1000',
        scrub: 2
    });
    // slogan02
    LottieScrollTrigger({
        target: $slogan02,
        path: "./datafile/slogan02.json",
        start: 14878, // 섹션02 시작위치
        end: '+=1000',
        scrub: 2
    });
    // slogan03
    LottieScrollTrigger({
        target: $slogan03,
        path: "./datafile/slogan03.json",
        start: 32055, // 섹션03 시작위치
        end: '+=700',
        scrub: 2
    });
    // yearsCount
    LottieScrollTrigger({
        target: $yearCount,
        path: "./datafile/yearsCount.json",
        start: 57882, // 섹션04 시작위치 - 200
        end: '+=2000',
        scrub: 3
    });
    // seaShip
    LottieScrollTrigger({
        target: $seaShip,
        path: "./datafile/seaShip.json",
        start: 60762, // 섹션04 시작위치 + 2680
        end: '+=3500',
        scrub: 3,
    });
    // circleEnding
    LottieScrollTrigger({
        target: $circleEnding,
        path: "./datafile/circleEnding.json",
        start: 70559, // 섹션05 시작위치 + 700
        end: '+=2000',
        scrub: 3,
    });
    // outro
    LottieScrollTrigger({
        target: $outroMotion,
        path: "./datafile/outro.json",
        start: 77259, // 섹션05 시작위치 + 7400
        end: '+=2500',
        scrub: 3
    });

    // indicator
    let aArray = [600];
    aArray.push(section02Timeline);
    aArray.push(section03Timeline);
    aArray.push(section04Timeline);
    aArray.push(section05Timeline);

    $scrollBtn.click(function(){
        gsap.to(window, {duration: 1, scrollTo: aArray[0], overwrite: "auto"});
    });

    $navBtn.click(function(){
        let _window = $("html, body"),
            count = $(this).index();
        if(count == 0){
            gsap.to(window, {duration: 1, scrollTo: aArray[0], overwrite: "auto"});
        }else{
            gsap.to(window, {duration: 1, scrollTo: aArray[count].scrollTrigger.start+1, overwrite: "auto"});
        }
    });

    function smoothScroll(content, viewport, smoothness) {
        content = gsap.utils.toArray(content)[0];
        smoothness = smoothness || 0;
        gsap.set(viewport || content.parentNode, { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 });
        gsap.set(content, { overflow: "visible", width: "100%" });

        let getProp = gsap.getProperty(content),
            setProp = gsap.quickSetter(content, "y", "px"),
            setScroll = ScrollTrigger.getScrollFunc(window),
            removeScroll = () => content.style.overflow = "visible",
            killScrub = trigger => {
                let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
                scrub && scrub.pause();
                trigger.animation.progress(trigger.progress);
            },
            height, isProxyScrolling;

        function refreshHeight() {
            height = content.clientHeight;
            content.style.overflow = "visible"
            document.body.style.height = height + "px";
            return height - document.documentElement.clientHeight;
        }

        ScrollTrigger.addEventListener("refresh", () => {
            removeScroll();
            requestAnimationFrame(removeScroll);
        })
        ScrollTrigger.defaults({ scroller: content });
        ScrollTrigger.prototype.update = p => p;

        ScrollTrigger.scrollerProxy(content, {
            scrollTop(value) {
                if (arguments.length) {
                    isProxyScrolling = true;
                    setProp(-value);
                    setScroll(value);
                    return;
                }
                return -getProp("y");
            },
            scrollHeight: () => document.body.scrollHeight,
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            }
        });

        return ScrollTrigger.create({
            animation: gsap.fromTo(content, { y: 0 }, {
                y: () => document.documentElement.clientHeight - height,
                ease: "none",
                onUpdate: ScrollTrigger.update
            }),
            scroller: window,
            invalidateOnRefresh: true,
            start: 0,
            end: refreshHeight,
            refreshPriority: -999,
            scrub: smoothness,
            onUpdate: self => {
                if (isProxyScrolling) {
                    killScrub(self);
                    isProxyScrolling = false;
                }
            },
            onRefresh: killScrub
        });
    }
    function LottieScrollTrigger(lets) {
        let playhead = { frame: 0 },
            target = gsap.utils.toArray(lets.target)[0],
            speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
            st = { trigger: target, pin: true, start: "top top", end: speeds[lets.speed] || "+=1000", scrub: true },
            animation = lottie.loadAnimation({
                container: target,
                renderer: lets.renderer || "svg",
                loop: false,
                autoplay: false,
                path: lets.path
            });
        for (let p in lets) {
            st[p] = lets[p];
        }
        animation.addEventListener("DOMLoaded", function () {
            gsap.to(playhead, {
                frame: animation.totalFrames - 1,
                ease: "none",
                onUpdate: () => animation.goToAndStop(playhead.frame, true),
                scrollTrigger: st,
            });
            ScrollTrigger.sort();
            ScrollTrigger.refresh();
        });
        return animation;
    }
    function counter() {
        function numberCounter(target_frame, target_number) {
            // this.count = 0;
            this.count = 12345678;
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
    }
}