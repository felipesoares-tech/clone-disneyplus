var header = document.getElementById('header')
var btnAssinar = document.getElementById('btn-assinar')
var img = document.getElementById('divImg')


$(document).on('scroll', function() {
    console.clear();
    if ($(this).scrollTop() >= $('#point').position().top) {
      header.setAttribute('style','transition: 0.5s linear; background-color: #040714;')
      btnAssinar.classList.remove('hide')
      img.classList.remove('hide')
    }else{
      header.removeAttribute('style')
      btnAssinar.classList.add('hide')
      img.classList.add('hide')
    }
   
  })