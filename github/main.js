(function (window, document) {
// 즉시실행함수 ()로 감싼다(모듈화)
  'use strict';
  // 엄격 모드

  const $toggles = document.querySelectorAll('.toggle');
  // 요소를 담고 있는 변수,상수는 $를 붙이기도 한다
  const $toggleBtn = document.getElementById('toggle-btn');

  $toggleBtn.addEventListener("click", function() {
  // event를 감지(click)되면 함수를 실행
    toggleElements();
  });

  window.addEventListener('resize', function() {
    if(window.innerWidth > 1024) {
    // 브라우저 내부너비가 1024보다 크면
      offElements();
    }
  });

  function toggleElements() {
    [].forEach.call($toggles, function(toggle) {
    //배열.모든요소에실행.유사배열연결($toggles, 함수(인자))
      toggle.classList.toggle('on');
      // 인자.클래스목록.'on'을 토글
    });
  }

  function offElements() {
    [].forEach.call($toggles, function(toggle) {
    //배열.모든요소에실행.유사배열연결($toggles, 함수(인자))
      toggle.classList.remove('on');
      // 인자.클래스목록.'on'을 삭제한다
    });  
  }
})(window, document)