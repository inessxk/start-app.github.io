$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        prevArrow: $('.btn-prev'),
        nextArrow: $('.btn-next'),
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '50px',
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '50px',
                }
            }
        ]
    });

    // start отслеживание скроллинга и указание фона для навбара при скроллинге
    $(window).scroll(function(e){
        var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(windowScroll != 0){
            if($('.nav').css('background') !== 'rgb(0,0,0)'){
                $('.nav').css({
                    background: '#c0301c',
                });
            }
        }
        else{
            $('.nav').css({
                background: '',
            });
        }
    });
    // end отслеживание скроллинга и указание фона для навбара при скроллинге

    // start плавный скроллинг якорьных ссылок
    $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
        var target = $(this).attr('href');
        var top = $(target).offset().top - 60;

        $('body, html').animate({scrollTop: top}, 1500);
    });
    // end плавный скроллинг якорьных ссылок

    // start фильтр портфолио
    $('.section-title_btns-btn').click(function(e){
        e.preventDefault();
        var data = $(this).attr('data-filter');

        if(data != 'all'){
            $.each($('.work'), function(index, elem){
                if($(elem).attr('data-filter') != data){
                    $(elem).hide();
                }else{
                    $(elem).show();
                }
            });
        }else{
            $('.work').show();
        }
    });
    // end фильтр портфолио

    // nav menu
        $('.nav_menu').click(function(){
            if($('.nav_list').css('display') == 'none'){
                $('.nav_list').css('display', 'flex');
                $('.nav_menu .fa-bars').hide();
                $('.nav_menu .fa-times').show();
                $('.nav').css('background', '#c0301c');
            }else{
                $('.nav_list').css('display', '');
                $('.nav_menu .fa-bars').show();
                $('.nav_menu .fa-times').hide();
            }
        });
    // nav menu
});