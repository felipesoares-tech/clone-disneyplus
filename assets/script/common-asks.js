const input1 = document.querySelector("#chk-1")
const input2 = document.querySelector("#chk-2")
const input3 = document.querySelector("#chk-3")
const input4 = document.querySelector("#chk-4")

const ul1 = document.querySelector('#inp-ul1')
const ul2 = document.querySelector('#inp-ul2')
const ul3 = document.querySelector('#inp-ul3')
const ul4 = document.querySelector('#inp-ul4')

input1.addEventListener("change", (el) => {
    let symb1 = document.getElementById('symb-1')
  if (input1.checked) {
    symb1.innerHTML='-'
    ul1.setAttribute('style','display: block;')
  }else{
    symb1.innerHTML='+'
    ul1.setAttribute('style','display: none;')
  }
  
})

input2.addEventListener("change", (el) => {
    let symb2 = document.getElementById('symb-2')
  if (input2.checked) {
    symb2.innerHTML='-'
    ul2.setAttribute('style','display: block;')
  }else{
    symb2.innerHTML='+'
    ul2.setAttribute('style','display: none;')
  }
  
  })

  input3.addEventListener("change", (el) => {
    let symb3 = document.getElementById('symb-3')
  if (input3.checked) {
    symb3.innerHTML='-'
    ul3.setAttribute('style','display: block;')
  }else{
    symb3.innerHTML='+'
    ul3.setAttribute('style','display: none;')
  }
  
  })

  input4.addEventListener("change", (el) => {
    let symb4 = document.getElementById('symb-4')
  if (input4.checked) {
    symb4.innerHTML='-'
    ul4.setAttribute('style','display: block;')
  }else{
    symb4.innerHTML='+'
    ul4.setAttribute('style','display: none;')
  }
  
  })