$(document).ready(function() {
  console.log('ready!');

  var mql = window.matchMedia('screen and (max-width: 768px)');
  mql.addListener(function(e) {
    location.reload();
    flag = false;
    time = 0;
  });

  if (mql.matches) {
    // Mobile
  } else {
    // PC
  }

  var slider = $('.sliderWrap');
  var sliderLen = slider.find('ul li').length;

  slider.append('<div class="bulletWrap"></div>')

  for (var i = 0; i < sliderLen; i++) {
    if (i == 0) {
      $('.bulletWrap').append('<span class="on">' + i + '</span>');
    } else {
      $('.bulletWrap').append('<span>' + i + '</span>');
    }
  }

  var sliderIdx = 0;
  $('.bulletWrap span').click(function() {
    var idx = $(this).index();
    sliderUpdate(idx);
    $(this).addClass('on');
  })

  setInterval(function() {
    sliderIdx++;
    if (sliderIdx >= sliderLen) {
      sliderIdx = 0;
    }
    sliderUpdate(sliderIdx);
    $('.bulletWrap span').eq(sliderIdx).addClass('on');
    console.log(sliderIdx);
  }, 5000);

  function sliderUpdate(idx) {
    $('.sliderUl li').fadeOut().eq(idx).fadeIn();
    $('.bulletWrap span').removeClass('on')
  }
});