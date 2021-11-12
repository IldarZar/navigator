$( document ).ready(function() {

$('.phone').mask('+7 (000) 000-0000');

// let phone;

// $(document).click(function (e) {
//     if ($(e.target).val().length <= 2 && $(e.target).is(".phone")) {
//         phone = e.target;
//         $(phone).val("+7");
//     }
//     else if (!$(e.target).is(".phone") && $(phone).val().length <= 2) {
//         $(phone).val("");
//     }
// })




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


const prevArrow = '<div class="arrow-slider__arrow_left"><svg width="22" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5V13.5L22 13.5V10.5Z" fill="#D1D1D1"></path></svg></div>';
const nextArrow = '<div class="arrow-slider__arrow_right"><svg width="22" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5L20 13.5V10.5L0 10.5L0 13.5Z" fill="#D1D1D1"></path></svg></div>';

    

$('.territories__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: window.screen.width > 320 ? true : false,
    dots:  window.screen.width > 320 ? true : false,
    appendDots: ".territories__arrow-slider",
    appendArrows: ".territories__arrow-slider .arrows-container",
    prevArrow: prevArrow,
    nextArrow: nextArrow,
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






// $('.news__slick-slider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: true,
//     appendDots: ".news__arrow-slider",
//     appendArrows: ".news__arrows-container",
        // prevArrow: prevArrow,
        // nextArrow: nextArrow,
//     responsive: [
//         {
//         breakpoint: 1211,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             infinite: true,
//         }
//         },
//         {
//         breakpoint: 600,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//         }
//         }
//     ]
// });




// // Блок News
// // При нажатии на кнопку "Истории жителей" происходит: 
// $(".news__tab-residents-stories").click(function(e) {

//     // показ slick-слайдера с историями жителей
//     $(".news__residents-stories").css({
//         display: "block"
//     })


//     // скрытие slick-слайдера с новостями, полезными статьями
//     $('.news__slick-slider, .news__useful-topics').css({
//         display: "none"
//     })
    

//     $('.news__residents-stories').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: true,
//         dots: true,
//         appendDots: ".useful-topics__arrow-slider",
//         appendArrows: ".useful-topics__arrows-container",
//         prevArrow: '<div class="arrow-slider__arrow_left"><svg width="22" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5V13.5L22 13.5V10.5Z" fill="#D1D1D1"></path></svg></div>',
//         nextArrow: '<div class="arrow-slider__arrow_right"><svg width="22" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5L20 13.5V10.5L0 10.5L0 13.5Z" fill="#D1D1D1"></path></svg></div>',
//         responsive: [
//             {
//             breakpoint: 1211,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//             }
//             },
//             {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//             }
//         ]
//     });
// });




let f = $('.slider-cards');

f.each(function (index) {
    let dataClass = $(f[index]).attr('data-class');

    console.log('.' + dataClass + '-arrow')

    $(`.${dataClass}-arrow, .${dataClass}-container`).css({
        display: index == 0 ? "flex" : "none"
    })

    $(f[index]).slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        appendDots: '.' + dataClass + '-container',
        appendArrows: '.' + dataClass + '-arrow',
        prevArrow: prevArrow,
        nextArrow: nextArrow,
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
});

$(".news__residents-stories, .news__useful-topics").css({
    display: "none"
})





$('.news__tab').click(function () {
    $('.news__tab').removeClass('tabs-navigation__tab_active');
    $(this).addClass('tabs-navigation__tab_active');
    let dataClass = $(this).attr('data-class');
    // $('.slider-cards').removeClass('active');
    $('.slider-cards').css({
        display: "none"
    })
    // $('.slider-' + n).addClass('active');
    $('.slider-' + dataClass).css({
        display: "block"
    })

    $('.slider-' + dataClass).slick('setPosition');



    $(`.news__navigation-wrapper`).children(":not(:first)").css({
        display: "none"
    })

    $(`.news__navigation-wrapper .${dataClass}-container`).css({
        display: "flex"
    })

    $(`.news__navigation-wrapper .${dataClass}-arrow`).css({
        display: "flex"
    })

});





// Slick-sliders

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
    prevArrow: prevArrow,
    nextArrow: nextArrow
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






$(".why-us__mobile-bottom-cards, .why-us__mobile-plates, .about-company__mobile-plates").slick({ //  .
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

    console.log(12333333)
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







// //  Переключатель страниц














// Раскрывающиеся вкладки .attention

// let attention = $(".attention__advices").children();

// attention.each(function(i) {

//     if (!$(attention[i]).hasClass("active")) {
//         $(attention[i]).children(":nth-child(2), :last").css({
//             display: "none"
//         })
//     }
// })

// $(".attention__advice-heading").click(function() {

//     let arrowWrapper = $(this).children(":first");
//     let attentionArrow = $(arrowWrapper).children(":first");
//     let attentionAdvice = $(this).parent();
//     let adviceLine = $(this).next();
//     let adviceDescription = $(adviceLine).next();

//     if ($(this).parent().hasClass("active")) {
//         $(adviceLine).css({
//             display: "none"
//         })

//         $(adviceDescription).css({
//             display: "none"
//         })

//         $(this).parent().removeClass("active");
//     }
//     else {
//         $(adviceLine).css({
//             display: "block"
//         })

//         $(adviceDescription).css({
//             display: "block"
//         })

//         $(this).parent().addClass("active");
//     }
// })






// .attention 
// Каждому элементу присваивается высота

$(".attention__advice.active").css({
    height: $(".attention__advice").css("height")
})

$(".attention__advice:not(.active)").css({
    height: $(".attention__advice").children(":first").outerHeight()
})

// По клику высота advice heading присваивается его родительскому элементу 
$(".attention__advice-heading").click(function() {
    
    let parent = $(this).parent();
    let line = $(this).next();
    let description = $(line).next();
    let arrow = $(this).children(":first");



    if ($(parent).hasClass("active")) {


        // Уменьшение высоты родительского блока
        $(parent).css({
            height: $(this).outerHeight()
        })
        
        $(parent).removeClass("active");
        $(arrow).removeClass("active");

    }
    else {

        

        // Увеличиваем родителю высоту
        $(parent).css({
            height: $(this).outerHeight() + line.outerHeight() + description.outerHeight()
        })

        // Добавляем родителю класс active
        $(parent).addClass("active")
        $(arrow).addClass("active");

    }

    
})





//  Paginator

let prevText = `
    <svg style="transform: rotate(180deg)" xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
    <path  fill="#675A54" d="M12.8261 4.09762C13.0213 4.29288 13.0213 4.60946 12.8261 4.80473L9.64409 7.98671C9.44882 8.18197 9.13224 8.18197 8.93698 7.98671C8.74172 7.79144 8.74172 7.47486 8.93698 7.2796L11.7654 4.45117L8.93698 1.62274C8.74172 1.42748 8.74172 1.1109 8.93698 0.915638C9.13224 0.720376 9.44882 0.720376 9.64409 0.915638L12.8261 4.09762ZM0.0518303 3.95117H12.4725V4.95117H0.0518303V3.95117Z">
    </path>
    </svg>`

let nextText = `
    <svg style="transform: rotate(0deg)" xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
    <path  fill="#675A54" d="M12.8261 4.09762C13.0213 4.29288 13.0213 4.60946 12.8261 4.80473L9.64409 7.98671C9.44882 8.18197 9.13224 8.18197 8.93698 7.98671C8.74172 7.79144 8.74172 7.47486 8.93698 7.2796L11.7654 4.45117L8.93698 1.62274C8.74172 1.42748 8.74172 1.1109 8.93698 0.915638C9.13224 0.720376 9.44882 0.720376 9.64409 0.915638L12.8261 4.09762ZM0.0518303 3.95117H12.4725V4.95117H0.0518303V3.95117Z">
    </path>
    </svg>`

$('.table-wrapper').pagination({
    dataSource: [
        {
            name: "Альпийская долина",
            area: "Участок 304",
            parts: "10 сот.",
            square: "1 000 м²",
            squareCost: "550 000 ₽",
            partDiscount: "65 000 ₽/сотка",
            partCost: "55 000 ₽/сотка",
            description: "Дороги из щебня, участок с краю, на холме"
        },
        {
            name: "Альпийская долина",
            area: "Участок 304",
            parts: "10 сот.",
            square: "1 000 м²",
            squareCost: "550 000 ₽",
            partDiscount: "65 000 ₽/сотка",
            partCost: "55 000 ₽/сотка",
            description: "Дороги из щебня, участок с краю, на холме"
        },
        {
            name: "Альпийская долина",
            area: "Участок 304",
            parts: "10 сот.",
            square: "1 000 м²",
            squareCost: "550 000 ₽",
            partDiscount: "65 000 ₽/сотка",
            partCost: "55 000 ₽/сотка",
            description: "Дороги из щебня, участок с краю, на холме"
        },
        {
            name: "Альпийская долина",
            area: "Участок 304",
            parts: "10 сот.",
            square: "1 000 м²",
            squareCost: "550 000 ₽",
            partDiscount: "65 000 ₽/сотка",
            partCost: "55 000 ₽/сотка",
            description: "Дороги из щебня, участок с краю, на холме"
        },
        {
            name: "Альпийская долина",
            area: "Участок 304",
            parts: "10 сот.",
            square: "1 000 м²",
            squareCost: "550 000 ₽",
            partDiscount: "65 000 ₽/сотка",
            partCost: "55 000 ₽/сотка",
            description: "Дороги из щебня, участок с краю, на холме"
        },
        {
            name: "Альпийская долина",
            area: "Участок 304",
            parts: "10 сот.",
            square: "1 000 м²",
            squareCost: "550 000 ₽",
            partDiscount: "65 000 ₽/сотка",
            partCost: "55 000 ₽/сотка",
            description: "Дороги из щебня, участок с краю, на холме"
        },
        {
            name: "Альпийская долина",
            area: "Участок 304",
            parts: "10 сот.",
            square: "1 000 м²",
            squareCost: "550 000 ₽",
            partDiscount: "65 000 ₽/сотка",
            partCost: "55 000 ₽/сотка",
            description: "Дороги из щебня, участок с краю, на холме"
        },
        {
            name: "Альпийская долина",
            area: "Участок 304",
            parts: "10 сот.",
            square: "1 000 м²",
            squareCost: "550 000 ₽",
            partDiscount: "65 000 ₽/сотка",
            partCost: "55 000 ₽/сотка",
            description: "Дороги из щебня, участок с краю, на холме"
        },
        {
            name: "А1231232342314234",
            area: "Участок 304",
            parts: "10 сот.",
            square: "1 000 м²",
            squareCost: "550 000 ₽",
            partDiscount: "65 000 ₽/сотка",
            partCost: "55 000 ₽/сотка",
            description: "Дороги из щебня, участок с краю, на холме"
        }
    ],
    prevText: `${prevText} Назад`,
    nextText: `Вперёд ${nextText}`,
    ulClassName: "ul-pagination",
    liClassName: "li-pagination",
    pageSize: 5,
    pageNumber: 1,
    callback: function(data, pagination) {
        var html = simpleTemplating(data);
        $('.table tbody').html(html);
    }
});


function simpleTemplating(data) {
    let row = '<tr class="table__row">';
    $.each(data, function(index, item){
        row += `<td class="table__territory-name">
                    <div>
                        <b>${item.name}</b>
                    </div>
                    ${item.area}
                </td>
                <td class="table__territory-size">
                    <div>${item.parts}</div>
                    ${item.square}
                </td>
                <td class="table__total-price">
                    ${item.squareCost}
                </td>  
                <td class="table__price">
                    <div>
                        <s>
                            ${item.partDiscount}
                        </s>
                    </div>
                    ${item.partCost}
                </td> 
                <td class="table__description">
                    ${item.description}
                </td>   
                <td class="table__on-map">
                    <img src="./img/map-point.png" alt="" srcset="">
                    <a class="table__on-map-link" href="">
                        На карте
                    </a>
                </td>
                <td>
                    <div class="table__button-wrapper">
                        <button class="white-button table__button">
                            Забронировать
                        </button>
                    </div>
                </td> </tr>`;
    });

    return row;
}




$(".paginationjs-page:first").addClass("first")
$(".paginationjs-page:last").addClass("last")




})
