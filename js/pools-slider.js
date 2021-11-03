let img = document.querySelector(".pools-slider__img-container").children
let right = document.querySelector(".pools-slider__control--right")
let left = document.querySelector(".pools-slider__control--left")
console.log(img.length)
let current = 0
left.addEventListener("click", function () {
    if(current == 0){
        current = 21
        img[0].classList.add("hide-desktop")
        current-=1
    }
    img[current-1].classList.remove("hide-desktop")
    img[current].classList.add("hide-desktop")
    current-=1
})
right.addEventListener("click", function () {
    if(current == 20){
        current = 0
        img[20].classList.add("hide-desktop")
    }
    img[current].classList.add("hide-desktop")
    img[current+1].classList.remove("hide-desktop")
    current+=1
})
