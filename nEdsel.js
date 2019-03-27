//nEdsel
(function ($) {

    var self = $.nEdsel = new function () { };

    $.extend(self, {

        nEdselBackgroud: [
            'https://i.imgur.com/nVhQi1I.png'
        ],

        nEdselImgs: [        
            'https://i.imgur.com/ca6tCTy.jpg',
            'https://i.imgur.com/8BumaRS.jpg',
            'https://i.imgur.com/AGzkoPQ.jpg',
            'https://i.imgur.com/QMuItRt.jpg',
            'https://i.imgur.com/RrmNegB.jpg',
            'https://i.imgur.com/MzzcsAh.jpg',
            'https://i.imgur.com/Wg9dmeg.jpg',
            'https://i.imgur.com/Z10WxkN.jpg',
            'https://i.imgur.com/vFVF8Wv.jpg',
            'https://i.imgur.com/urzim2Z.jpg',
            'https://i.imgur.com/xBbdRS3.jpg',
            'https://i.imgur.com/VnKJWY0.jpg', 
            'https://i.imgur.com/8t5Gbkh.jpg', 
            'https://i.imgur.com/ajFFOL2.jpg', 
            'https://i.imgur.com/9q240Fa.jpg', 
            'https://i.imgur.com/nCIlfAB.jpg', 
            'https://i.imgur.com/I3wFgdf.jpg', 
            'https://i.imgur.com/aVt2IWz.jpg', 
            'https://i.imgur.com/3ja6pXF.jpg', 
            'https://i.imgur.com/BZKPrPn.jpg', 
            'https://i.imgur.com/qZYd3yd.jpg', 
            'https://i.imgur.com/T9ZkNaz.jpg', 
            'https://i.imgur.com/6OhlIxM.jpg', 
            'https://i.imgur.com/eRXpMvU.jpg', 
            'https://i.imgur.com/YFwkpSw.jpg', 
            'https://i.imgur.com/fEdJp81.jpg', 
            'https://i.imgur.com/EIqAcPy.jpg', 
            'https://i.imgur.com/6n55mlm.jpg', 
            'https://i.imgur.com/VzLQVjP.jpg', 
            'https://i.imgur.com/6n55mlm.jpg', 
            'https://i.imgur.com/nEmPWHj.jpg', 
            'https://i.imgur.com/SumqlQI.jpg', 
            'https://i.imgur.com/8aAfNkl.jpg', 
            'https://i.imgur.com/4Fpd8g5.jpg', 
            'https://i.imgur.com/i9xyvEP.jpg', 
            'https://i.imgur.com/0rH8OH5.jpg', 
            'https://i.imgur.com/aWujILG.jpg', 
            'https://i.imgur.com/FLjcBJL.jpg', 
            'https://i.imgur.com/kNxg2Ju.jpg', 
            'https://i.imgur.com/qTAGqky.jpg', 
            'https://i.imgur.com/c6H2R7r.jpg', 
            'https://i.imgur.com/ZtJIp6x.jpg', 
            'https://i.imgur.com/tHiFTfK.jpg', 
            'https://i.imgur.com/cOFmxC1.jpg', 
            'https://i.imgur.com/aVPzU95.jpg', 
            'https://i.imgur.com/IFiH7Lp.jpg', 
            'https://i.imgur.com/eU7EUIH.jpg', 
            'https://i.imgur.com/FFtppZl.jpg', 
            'https://i.imgur.com/TmRjvge.jpg', 
            'https://i.imgur.com/UEw7YAX.jpg', 
            'https://i.imgur.com/NJMP4YV.jpg', 
            'https://i.imgur.com/5kNzcUy.jpg', 
            'https://i.imgur.com/s5K1fR5.jpg', 
            'https://i.imgur.com/1nsj1KY.jpg' 
        ],

        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();
                    //If image loaded
                    if (h > 0 && w > 0) {
                        //Replace
                        $(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                var h = $(item).height();
                                var w = $(item).width();
                                $(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo: function (bgImgs, time) {
            $backgroundImages = $(
                '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
                '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
                '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,' +
                '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            )
                .filter(function () {
                    backgroundImg = $(this).css('background-image');
                    return backgroundImg && backgroundImg != 'none';
                }
                );

            $backgroundImages.each(function (i, item) {
                $(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
                $(item).css('background-position', '0 0');
                $(item).css('background-repeat', 'no-repeat');
                $(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.nEdselImgs, 3000);
        self.handleLogo(self.nEdselBackgroud, 3000);
    });
})(jQuery);
