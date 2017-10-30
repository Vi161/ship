$(document).ready(function() {

//    --------hide div-----------
    $(function(){
        $('.main__block4__hide').hide();
        $a = $('.main__block4__button');
        $a.on('click', function(event) {
            event.preventDefault();
            $a.not(this).next().slideUp(500);
            $(this).next().slideToggle(500);
        });
    });

    $('.owl-carousel').owlCarousel({

//        loop:true, //Зацикливаем слайдер
        margin:0, //Отступ от элемента справа в 50px
//        nav: false, //Отключение навигации
        autoplay: true,
        loop: true,
//                    autoplay:true, //Автозапуск слайдера
//                    smartSpeed:1000, //Время движения слайда
        autoplayTimeout: 2000, //Время смены слайда
        autoplaySpeed: 1000,
        mouseDrag: true,
        touchDrag: true,
        navText: false,
        dots: true,
//                    dotsEach: 3,
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
            },
            780:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});
