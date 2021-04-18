new Swiper('.visual .swiper-container', {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 3000
  // },
  pagination: {
    el: '.visual .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.visual .swiper-prev',
    nextEl: '.visual .swiper-next'
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
  // gsap.to(요소, 지속시간, 옵션{});
    y: size,
    // y축: 20
    repeat: -1,
    // 반복: 무한대
    yoyo: true,
    // 위아래 반복: 사용
    ease: Power1.easeInOut,
    // easing
    delay: random(0, delay)
    // 지연: 1초이후에 실행
  });
}
floatingObject('.swiper-slide', 0, 30);
floatingObject('.floating2', .5 ,15);
floatingObject('.floating3', 1.5, 20);