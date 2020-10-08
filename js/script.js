$(document).ready(function () {

    //Smooth scroll and pageup

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }

    });

    $("a[href=#up]").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });

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

    $('input[name=phone]').mask("+7(999) 999-999");
});