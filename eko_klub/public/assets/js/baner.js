//baner
const swiper = new Swiper('.swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    // Pagination და Navigation გამორთულია
    pagination: false,
    navigation: false,
});


function toggle(btn) {
    const content = btn.nextElementSibling;
    const isVisible = content.style.display === 'block';
    content.style.display = isVisible ? 'none' : 'block';
    btn.textContent = isVisible ? 'დაწვრილებით' : 'დახურვა';
}


