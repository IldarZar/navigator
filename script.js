// 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

$('.phone').mask('+7 (000) 000-0000');

let phone;

$(document).click(function (e) {
    if ($(e.target).val().length <= 2 && $(e.target).is(".phone")) {
        phone = e.target;
        $(phone).val("+7");
    }
    else if (!$(e.target).is(".phone") && $(phone).val().length <= 2) {
        $(phone).val("");
    }
})







// Создаем обработчик загрузки страницы: 
DG.autoload(function() { 
    // Создаем объект карты, связанный с контейнером: 
    var myMap = new DG.Map('myMapId'); 
    // Устанавливаем центр карты, и коэффициент масштабирования: 
    myMap.setCenter(new DG.GeoPoint(82.927810142519,55.028936234826), 15); 
    // Добавляем элемент управления коэффициентом масштабирования: 
    myMap.controls.add(new DG.Controls.Zoom()); 

    // Создаем балун:
    var myBalloon = new DG.Balloons.Common({
        // Местоположение на которое указывает балун: 
         geoPoint: new DG.GeoPoint(82.927810142519,55.028936234826),
         // Устанавливаем текст, который будет отображатся при открытии балуна:
         contentHtml: 'Привет!<br>Вы кликнули по мне :)'
    });
    // Создаем маркер:
    var myMarker = new DG.Markers.Common({
         // Местоположение на которое указывает маркер:
         geoPoint: new DG.GeoPoint(82.927810142519,55.028936234826),
         // Функция, вызываемая при клике по маркеру
         clickCallback: function() {
            if (! myMap.balloons.getDefaultGroup().contains(myBalloon)) {
                // Если балун еще не был добавлен на карту, добавляем его:
                 myMap.balloons.add(myBalloon);
             } else {
                 // Показываем уже ранее добавленный на карту балун
                 myBalloon.show();
             }
        }
    });
    // Добавить маркер на карту:
    myMap.markers.add(myMarker);
}); 



    

$('.territories .center').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: window.screen.width > 320 ? true : false,
    dots:  window.screen.width > 320 ? true : false,
    appendDots: ".territories__arrow-slider",
    appendArrows: ".territories__arrow-slider .arrows-container",
    prevArrow: '<div class="arrow-slider__arrow_left"><svg width="22" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5V13.5L22 13.5V10.5Z" fill="#D1D1D1"></path></svg></div>',
    nextArrow: '<div class="arrow-slider__arrow_right"><svg width="22" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5L20 13.5V10.5L0 10.5L0 13.5Z" fill="#D1D1D1"></path></svg></div>',
    responsive: [
        {
        breakpoint: 1211,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
        }
        },
        {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
});


//  News


// $(".news__tab-useful-topics").click(function () {
//     $(".news__residents-stories").css({display: "none"})
//     $(".news__cards").css({display: "none"});
//     $(".news__useful-topics").css({display: "block"});
// })


$(".news__tab-news").click(function(e) {
    $(".news__residents-stories").css({display: "none"})
    $(".news__cards").css({display: "block"});
    $(".news__useful-topics").css({display: "none"});


    $('.news__slick-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        appendDots: ".news__arrow-slider",
        appendArrows: ".news__arrow-slider .arrows-container",
        prevArrow: '<div class="arrow-slider__arrow_left"><svg width="22" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5V13.5L22 13.5V10.5Z" fill="#D1D1D1"></path></svg></div>',
        nextArrow: '<div class="arrow-slider__arrow_right"><svg width="22" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5L20 13.5V10.5L0 10.5L0 13.5Z" fill="#D1D1D1"></path></svg></div>',
        responsive: [
            {
            breakpoint: 1211,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
})


$(".news__tab-residents-stories").click(function(e) {


    $(".news__residents-stories").css({display: "block"})
    $(".news__cards").css({display: "none"});
    $(".news__useful-topics").css({display: "none"});

    $('.news__residents-stories').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        appendDots: ".news__arrow-slider",
        appendArrows: ".news__arrow-slider .arrows-container",
        prevArrow: '<div class="arrow-slider__arrow_left"><svg width="22" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5V13.5L22 13.5V10.5Z" fill="#D1D1D1"></path></svg></div>',
        nextArrow: '<div class="arrow-slider__arrow_right"><svg width="22" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5L20 13.5V10.5L0 10.5L0 13.5Z" fill="#D1D1D1"></path></svg></div>',
        responsive: [
            {
            breakpoint: 1211,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });

})











$('.about-company__content-element_first').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
});



$(".why-us__slick-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: true,
    appendDots: ".why-us__dots-container",
    appendArrows: ".why-us__arrows-container",
    prevArrow: '<div class="arrow-slider__arrow_left"><svg width="22" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5V13.5L22 13.5V10.5Z" fill="#D1D1D1"></path></svg></div>',
    nextArrow: '<div class="arrow-slider__arrow_right"><svg width="22" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5L20 13.5V10.5L0 10.5L0 13.5Z" fill="#D1D1D1"></path></svg></div>',
});


$(".main-section__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 775,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});


$(".about-company__mobile-plates").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    variableWidth: true
});



$(".why-us__mobile-plates").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false
});



$(".why-us__mobile-bottom-cards").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
});




$(".select-place__settings-button").click(function(e) {
    e.preventDefault();

    if ($(".select-place__settings").hasClass("select-place__hide-form")) {
        $(".select-place__settings").removeClass("select-place__hide-form");

    }
    else {
        $(".select-place__settings").addClass("select-place__hide-form");
    }
    
});



// Кнопка меню в мобильной версии 
$(".page-header__menu").click(function() {
    $(".shadow").css({opacity: ".5", "z-index": "40"});
    $(".mobile-menu").css({opacity: "1", "z-index": "41", right: "0"})
});


// Форма для обратного звонка
$(".page-header__call").click(function() {
    $(".call-back").css({
        display: "flex"
    })
})

// Закрытие формы обратного звонка 
$(".call-back__cross").click(function() {
    $(".call-back").css({
        display: "none"
    })
})



$(".territories__list-button").click(function () {
    $(".territories__list").css({display: "block"});
    $(".territories__arrow-slider").css({display: "block"});
    $(".territories__map-wrapper").css({display: "none"});
})


$(".territories__map-button").click(function () {
    $(".territories__list").css({display: "none"});
    $(".territories__arrow-slider").css({display: "none"});
    $(".territories__map-wrapper").css({display: "block"});
})







$(".select-place__cost-slider").slider({
    range: true,
    min: 0,
    max: 2800000,
    values: [ 0, 1000000 ],
    slide: function(event, ui) {
        $(".select-place__cost-left-number").text(ui.values[0] + "₽");
        $(".select-place__cost-right-number").text(ui.values[1] + "₽")
    }
});

$(".select-place__cost-left-number").text($(".select-place__cost-slider").slider("values", 0) + "₽");
$(".select-place__cost-right-number").text($(".select-place__cost-slider").slider("values", 1) + "₽")



$(".select-place__size-slider").slider({
    range: true,
    min: 0,
    max: 15,
    values: [ 5, 10 ],
    slide: function(event, ui) {
        $(".select-place__size-left-number").text(ui.values[0] + " соток");
        $(".select-place__size-right-number").text(ui.values[1] + " соток")
    }
});



$(".select-place__size-left-number").text($(".select-place__size-slider").slider("values", 0) + " соток");
$(".select-place__size-right-number").text($(".select-place__size-slider").slider("values", 1) + " соток")



// Задаём зелёному элементу в tabs-navigation ширину первого элемента
for (let i = 0; i < $(".green-background").length; i++) {
    $($(".green-background")[i]).css({"width": Number($($(".green-background")[i]).next().css("width").slice(0, -2)) + 60 + "px"})
}


$(".tabs-navigation__tab").click(function(e) {
    let target = e.target;

    if (e.target.localName == "span") {
        target = $(e.target).parent()[0]
    }



    // селектор по первому классу. 
    // territories__tab tabs-navigation__tab выдаст territories__tab
    let selector = target.className.split(" ")[0];


    let tabElements = $(`div.${selector}`);

    for (let index = 0; index < tabElements.length; index++) {
        $(`.${selector}.tabs-navigation__tab`).removeClass("tabs-navigation__tab_active")
    }

    $(target).addClass("tabs-navigation__tab_active")

    
    let i = 0,
        left = 0,
        width = Number($(target).css("width").slice(0, -2)) + 60.0;

    while (!$(tabElements[i]).hasClass("tabs-navigation__tab_active")) {
        left += Number($(tabElements[i]).css("width").slice(0, -2)) + 60.0;
        i++;
    }

    
    $(target).parent().children(".green-background").css({left: `${left}px`, width: `${width}px`});
})




// фон на формы 