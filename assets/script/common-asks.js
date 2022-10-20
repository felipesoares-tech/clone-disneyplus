const input1 = document.querySelector("#chk-1")
const input2 = document.querySelector("#chk-2")
const input3 = document.querySelector("#chk-3")
const input4 = document.querySelector("#chk-4")

input1.addEventListener("change", (el) => {
    let symb1 = document.getElementById('symb-1')
  if (input1.checked) {
    symb1.innerHTML='-'
  }else
  symb1.innerHTML='+'
})

input2.addEventListener("change", (el) => {
    let symb2 = document.getElementById('symb-2')
  if (input2.checked) {
    symb2.innerHTML='-'
  }else
  symb2.innerHTML='+'
  })

  input3.addEventListener("change", (el) => {
    let symb3 = document.getElementById('symb-3')
  if (input3.checked) {
    symb3.innerHTML='-'
  }else
  symb3.innerHTML='+'
  })

  input4.addEventListener("change", (el) => {
    let symb4 = document.getElementById('symb-4')
  if (input4.checked) {
    symb4.innerHTML='-'
  }else
  symb4.innerHTML='+'
  })