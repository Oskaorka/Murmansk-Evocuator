$(document).ready(function () {
    // $('.carousel__inner').slick({
    //     speed: 1200,
    //     /*adaptiveHeight: true,*/
    //     prevArrow: "<button type='button' class='slick-prev'><img src='../img/slide/right.svg'></button>",
    //     nextArrow: '<button type="button" class="slick-next"><img src="../img/slide/left.svg"></button>',
    //     responsive: [{
    //         breakpoint: 992,
    //         settings: {
    //             dots: true,
    //             arrows: false
    //         }
    //     }]
    // });

    // $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    //     $(this)
    //         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    //         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
    //         .eq($(this).index()).addClass('catalog__content_active');
    // });

    // function toggleSlide(item) {
    //     $(item).each(function (i) {
    //         $(this).on('click', function (e) {
    //             e.preventDefault();
    //             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //         });
    //     });
    // }

    // toggleSlide('.catalog-item__link');
    // toggleSlide('.catalog-item__back');

    //modal window
    // $('[data-modal=consultation]').on('click', function () {
    //     $('.overlay, #consultation').fadeIn('slow');
    // });
    // $('.modal__close').on('click', function () {
    //     $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    // });
    // $('.button_mini').each(function (i) {
    //     $(this).on('click', function () {
    //         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    //         $('.overlay, #order').fadeIn('slow');
    //     });
    // });

    // $('form').submit(function (e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function () {
    //         $(this).find("input").val("");
    //         $('#consultation, #order').fadeOut();
    //         $('.overlay,#thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });


    //Smooth scroll and pageup

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }

    });

    $("a[href=#]").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });


    // });
    let emailBt = document.querySelector('.email-bt');
    let callBt = document.querySelector('.callback-bt');

    //modal window
    $('[data-modal=button]').on('click', function () {
        $('.overlay, #button').fadeIn('slow');
        $('.email-bt, .callback-bt').fadeOut('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #button, #thanks, #order').fadeOut('slow');
        $('.email-bt, .callback-bt').fadeIn('slow');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#button, #order').fadeOut();
            $('.overlay,#thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });


    // const slick = tns({
    //     container: '.carousel__inner',
    //     slideBy: 'page',
    //     autoplay: false,
    //     controls: false,
    //     nav: false,
    //     items: 1,
    //     responsive: {
    //         320: {
    //             items: 1
    //         },
    //         640: {
    //             edgePadding: 20,
    //             gutter: 20,
    //             items: 1
    //         },
    //         700: {
    //             gutter: 30
    //         },
    //         900: {
    //             items: 2
    //         },
    //         1200: {
    //             items: 3
    //         }
    //     }

    // });

    const slider = tns({
        container: '.reviews__list',
        slideBy: 'page',
        speed: 1000,
        autoplay: false,
        controls: false,
        nav: false,
        items: 1,
        // responsive: {
        //     320: {
        //         items: 1
        //     },
        //     640: {
        //         edgePadding: 20,
        //         gutter: 20,
        //         items: 1
        //     },
        //     700: {
        //         gutter: 30
        //     },
        //     900: {
        //         items: 2
        //     },
        //     1200: {
        //         items: 3
        //     }
        // }

    });

    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
    });
    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next');
    });

    window.addEventListener('DOMContentLoaded', () => {
        const tabs = document.querySelectorAll('.work__tab'),
            tabsContent = document.querySelectorAll('.works__image'),
            tabsParent = document.querySelector('.work__parant');

        function hideTabContent() {
            tabsContent.forEach(item => {
                item.style.display = 'none';
            });

            tabs.forEach(item => {
                item.classList.remove('work__tab_active');
            });
        }

        function showTabContent(i = 0) {
            tabsContent[i].style.display = 'block';
            // tabsContent[i].style.display = 'hover';
            tabs[i].classList.add('work__tab_active');
        }

        hideTabContent();
        showTabContent();

        tabsParent.addEventListener('click', (event) => {
            const target = event.target;

            if (target && target.classList.contains('work__tab')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });

    });
});