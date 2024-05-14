const swiper = new Swiper('.blog-slider__slider', {
    loop: true,
    spaceBetween: 64,
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // breakpoints: {
    //     1024: {
    //         slidesPerView: 3,
    //         navigation: {
    //             enabled: true
    //         },
    //     },  
    //     576: {
    //         slidesPerView: 2,
    //     },
    //     0: {
    //         slidesPerView: 1,
    //         navigation: {
    //             enabled: false
    //         },
    //     }
    // },
});