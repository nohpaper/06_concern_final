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