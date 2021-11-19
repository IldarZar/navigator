$( document ).ready(function() {











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





//  Pagination



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


const dataSource = [
    {
        name: "Альпийская долина",
        area: "Участок 304",
        parts: "10 сот.",
        square: "1 000 м²",
        squareCost: "550 000 ₽",
        partDiscount: "55 000 ₽/сотка",
        partCost: "65 000 ₽/сотка",
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
    }
]


$('.table-wrapper').pagination({
    dataSource: dataSource,
    ulClassName: 'ul-pagination',
    prevText: `${prevText} Назад`,
    nextText: `Вперёд ${nextText}`,
    pageSize: $(window).width() > '320' ? 12 : dataSource.length,
    pageNumber: 1,
    callback: function(data, pagination) {
    var html = simpleTemplating(data);
    $('.table').html(html);
}
});


function simpleTemplating(data) {
let row = '';
$.each(data, function(index, item){
    row += `
        <tr class="table__row">
            <td class="table__territory-name">
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
                        ${item.partCost}
                    </s>
                </div>
                ${item.partDiscount}
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
            <td class="table__reserve">
                <div class="table__button-wrapper">
                    <button class="white-button table__button">
                        Забронировать
                    </button>
                </div>
            </td>

            <td class="table__mobile-card">
                <h2 class="table__card-heading">
                    ${item.name}, уч. ${item.area.split(" ")[1]}
                </h2>
                <div class="table__card-total">
                    <span class="table__card-total-price">
                    ${item.squareCost}
                    </span>
                    <span class="table__card-total-size">
                        ${item.parts}
                    </span>
                </div>
                <div class="table__card-discount">
                    <div>
                        ${item.partDiscount}
                    </div>
                    <div>
                        <s>
                            ${item.partCost}
                        </s>
                    </div>
                </div>
                <div class="table__link-wrapper">
                    <img src="./img/map-point.png" alt="" srcset="">
                    <a class="table__on-map-link" href="">
                        На карте
                    </a>
                </div>
                <div class="table__card-button-wrapper">
                    <button class="white-button table__card-button">
                        Забронировать
                    </button>
                </div>
            </td>
        </tr>`;
});
return row;
}


$('.select-place__settings-button-wrapper').click(function(e) {

    e.preventDefault();

    let settingsList = $(this).next();
    let settingsButton = $(this);
    let button = $(this).next().next();


    if ($(settingsList).hasClass("hide") ) {
        $(".select-place__settings").removeClass("hide")


    

    const settings = [
        settingsList,
        settingsButton,  
        button
    ]

    if ($(window).width() <= '320') {
        settings.forEach((el, i) => {
            $(el).css({
                order: i
            })
        })
    }

    $(this).children(":first").html("Скрыть параметры")
    $(this).children(":nth-child(2)").css({
        transform: "rotate(180deg)"
    })

} else {
    $(settingsList).addClass("hide")

    $(this).children(":first").html("Ещё параметры")
    $(this).children(":nth-child(2)").css({
        transform: "rotate(0deg)"
    })
}





})


$(".select-place__button").click(function(e) {
e.preventDefault();
})






// По клику высота advice heading присваивается его родительскому элементу 


// .attention 
// Каждому элементу присваивается высота

$(".attention__advice.active").css({
    height: $(".attention__advice").css("height")
})

$(".attention__advice:not(.active)").css({
    height: $(".attention__advice").children(":first").outerHeight()
})

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
        $(parent).addClass('active');
        $(arrow).addClass('active');

    }
})



})