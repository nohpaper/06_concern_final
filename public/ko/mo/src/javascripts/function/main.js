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