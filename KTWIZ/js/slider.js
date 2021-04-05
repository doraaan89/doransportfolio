var slider = document.querySelector('.issue_boxWrap'),
    slide = document.querySelectorAll('.issue_box'),
    slideCount = slide.length,
    currentIdx = 0,
    slideWidth = 350,
    slideMargin = 25,
    prevBtn = document.querySelector('.button_prev'),
    nextBtn = document.querySelector('.button_next');

    slider.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

function moveSlide(num) {
    slider.style.left = -num * 375 + 'px';
    currentIdx = num;

};

nextBtn.addEventListener('click', function() {
    if(currentIdx < slideCount - 3) {
        moveSlide(currentIdx + 1)
    } 
});


prevBtn.addEventListener('click', function() {
    if(currentIdx > 0) {
        moveSlide(currentIdx - 1)
    }
});
