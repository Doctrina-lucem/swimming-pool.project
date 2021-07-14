let control = document.querySelector(".pools-series__control")
let list = document.querySelector(".pools-series__wrapper").children
control.oninput = function (){
    console.log(list[control.value])
    list[control.value-1].classList.remove("hide")
    list[control.value-4].classList.add("hide")
}