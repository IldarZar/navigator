$( document ).ready(function() {

$('.phone').mask('+7 (000) 000-0000');




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
    // centerMode: true,
    // centerPadding: '0px',
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
            centerMode: true,
            centerPadding: '15px',
            slidesToScroll: 1
        }
        }
    ]
});


$('.buy-place__tabs-navigation').click(function(e) {

    let dataClass = $(e.target).attr("data-class");
    let steps = $(".buy-place__steps-wrapper");

    $(steps).children().each(function(index){
        $($(steps).children()[index]).css({
            display: "none"
        })
    })

    $(`.buy-place__${dataClass}`).css({
        display: "flex"
    })

});



let f = $('.slider-cards');

f.each(function (index) {
    let dataClass = $(f[index]).attr('data-class');


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

window.dispatchEvent(new Event('resize'));




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






$(".why-us__mobile-bottom-cards, .why-us__mobile-plates, .about-company__mobile-plates").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    variableWidth: true,
    centerMode: true,
    centerPadding: "0px"
});





// Кнопка меню в мобильной версии 
$('.page-header__menu').click(function() {

    let mobileMenu = $('.mobile-menu');
    let shadow = $('.shadow');



    $(shadow).css({opacity: ".5", "z-index": "40"});
    $(mobileMenu).css({display: "block", opacity: "1", "z-index": "41", transform: "translateX(0px)"});
 

});


// Кнопка закрытия меню в мобильной версии

$('.mobile-menu__cross-wrapper').click(function() {

    let mobileMenu = $('.mobile-menu');
    let shadow = $('.shadow');

    $(shadow).css({
        opacity: 0,
        "z-index": "-1"
    })

    $(mobileMenu).css({
        transform: "translateX(320px)",
        opacity: 0
    })

})




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
    $(".territories__arrow-slider").css({display: "flex"});
    $(".territories__map-wrapper").css({display: "none"});
})

let map;
$(".territories__map-button").click(function () {
    $(".territories__list").css({display: "none"});
    $(".territories__arrow-slider").css({display: "none"});
    $(".territories__map-wrapper").css({display: "block"});


    if ($("#map").html() == "") {
        DG.then(function() {
            var myIcon,
            myDivIcon;
            
            map = DG.map('map', {
                center: [57.07843442145884, 65.05290403834859],
                zoom: 11
            });


            myOtherIcon = 
            

            eseninoIcon = DG.icon({
                iconUrl: "https://navigator-tmn.ru/upload/iblock/f80/esenino.png",
                iconSize: [76, 70]
            })
            
            ushakovoIcon = DG.icon({
                iconUrl: 'https://navigator-tmn.ru/upload/iblock/f78/ushakovo.png',
                iconSize: [76, 70]
            });

            elki = DG.icon({
                iconUrl: "https://navigator-tmn.ru/upload/iblock/9ce/elki.png",
                iconSize: [76, 70]
            })

            kuliga = DG.icon({
                iconUrl: "https://navigator-tmn.ru/upload/iblock/469/alpine.png",
                iconSize: [76, 70]
            })


            
            DG.marker([57.09067664776022, 65.0541361046088], {
                icon: eseninoIcon
            }).addTo(map);

            DG.marker([57.08959485317398,65.13909511615857], {
                icon: ushakovoIcon
            }).addTo(map);

            DG.marker([57.07550982094455,65.16954931946299], {
                icon: elki
            }).addTo(map);

            DG.marker([57.23505191036543,65.0840187524868], {
                icon: kuliga
            }).addTo(map);

        });
    }
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














})
