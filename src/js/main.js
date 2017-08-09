var app = app || {};
app.main = {
    headerPhone: function () {
        var $phone = $('.fullscreen-phone');
        if ($phone.length) {
            $('.jsHeaderPhone').hover(
                function () {
                    $phone.fadeIn(300);
                    $phone.addClass('active');
                },
                function () {
                    $phone.fadeOut(300);
                    $phone.removeClass('active');
                });
        }
    },
    menu: function () {
        $('.jsToggleMenu').on('click', function () {
            var $this = $(this);
            $this.toggleClass('active');

            $('.fullscreen-menu').toggleClass('active');
            $('body').toggleClass('overflowHidden');
        });
    },
    mainSlider: function () {
        var $mainSlider = $('.main-slider');
        if ($mainSlider.length && jQuery().slick) {
            $mainSlider.slick({
                arrows: false,
                dots: true,
                autoplay: true,
                pauseOnFocus: false,
                speed: 800,
                autoplaySpeed: 3900
            })
        }
    },
    catalogSlider: function () {
        var $catalogGallery = $('.catalog-product__gallery');
        if ($catalogGallery.length && jQuery().slick) {
            $('.slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: false,
                dots: false,
                infinite: false,
                asNavFor: '.slider-nav',
                speed: 750
            });
            $('.slider-nav').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.slider-for',
                dots: false,
                infinite: false,
                arrows: false,
                centerMode: false,
                focusOnSelect: true,
                speed: 600
            });
        }
    },
    fancybox: function () {
        $('[data-fancybox]').fancybox({
            buttons : [
                'close'
            ]
        });
    }
};
app.init = function () {
    app.main.menu();
    app.main.headerPhone();
    app.main.mainSlider();
    app.main.catalogSlider();
    app.main.fancybox();
};



$(document).ready(function () {
    app.init();

    /* TODO: remove pageWidget!!! */
    function pageWidget(pages) {
        var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
        widgetWrap.prependTo("body");
        for (var i = 0; i < pages.length; i++) {
            $('<li class="widget_item"><a class="widget_link" href="' + pages[i][0] + '.html' + '">' + pages[i][1] + '</a></li>').appendTo('.widget_list');
        }
        var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:5px 10px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
        widgetStilization.prependTo(".widget_wrap");
    }
    pageWidget([
        ['index', 'Главная'],
        ['catalog', 'Каталог'],
        ['catalog-sensors', 'Каталог - датчики'],
        ['catalog-product', 'Каталог - карточка товара'],
        ['delivery', 'Доставка'],
        ['ordering', 'Оформление заказа'],
        ['basket', 'Корзина'],
        ['basket-empty', 'Корзина пустая']
    ]);
});