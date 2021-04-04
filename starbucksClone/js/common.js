const searchEl = document.querySelector('.search');
// document = HTML 자체
const searchInputEl = searchEl.querySelector('input');
// searchEl = .search부터

searchEl.addEventListener('click', function() {
// searchEl.(클릭하면, 익명함수 실행)
  searchInputEl.focus()
  // searchInputEl.포커스를 한다
});

searchInputEl.addEventListener('focus', function() {
// searchInputEl.(포커스되면, 익명함수 실행)
  searchEl.classList.add('focused');
  // searchEl.클래스목록.추가()
  searchInputEl.setAttribute('placeholder', '통합검색')
  // .html의 속성을 지정한다(속성, 값)
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
// .글자삽입 = 생성자 Date().