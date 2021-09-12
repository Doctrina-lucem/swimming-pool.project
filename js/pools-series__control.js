let control = document.querySelector(".pools-series__control")
let list = document.querySelector(".pools-series__wrapper").children
z = control.value
control.oninput = function (){
    console.log(control.value)
    if (control.value < z){
        list[control.value -3].classList.remove("hide")
        list[control.value].classList.add("hide")
    }
    else {
        list[control.value - 1].classList.remove("hide")
        list[control.value - 4].classList.add("hide")
    }
    z = control.value
}