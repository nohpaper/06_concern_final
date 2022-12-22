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