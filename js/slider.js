const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView:3,

    // If we need pagination
    pagination: {
        el: '.slider-dots',
        clickable: true,
        type:'bullets',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.r-arrow-video',
        prevEl: '.l-arrow-video',
    },

});