let img = document.querySelector(".pools-slider__img")
let right = document.querySelector(".pools-slider__control--right")
let left = document.querySelector(".pools-slider__control--left")
let imgList = [
    "img/pools-slider/pools-slider-1.jpg",
    "img/pools-slider/pools-slider-2.jpg",
    "img/pools-slider/pools-slider-3.jpg",
    "img/pools-slider/pools-slider-4.jpg",
    "img/pools-slider/pools-slider-5.jpg",
    "img/pools-slider/pools-slider-6.jpg",
    "img/pools-slider/pools-slider-7.jpg",
    "img/pools-slider/pools-slider-8.jpg",
    "img/pools-slider/pools-slider-9.jpg",
    "img/pools-slider/pools-slider-10.jpg",
    "img/pools-slider/pools-slider-11.jpg",
    "img/pools-slider/pools-slider-12.jpg",
    "img/pools-slider/pools-slider-13.jpg",
    "img/pools-slider/pools-slider-14.jpg",
    "img/pools-slider/pools-slider-15.jpg",
    "img/pools-slider/pools-slider-16.jpg",
    "img/pools-slider/pools-slider-17.jpg",
    "img/pools-slider/pools-slider-18.jpeg",
    "img/pools-slider/pools-slider-19.jpg",
    "img/pools-slider/pools-slider-20.jpeg",
    "img/pools-slider/pools-slider-21.jpg"
]
let current = 0
left.addEventListener("click", function () {
    if (current == 0){
        current = 21
    }
    img.src = imgList[current-1]
    current -= 1
})
right.addEventListener("click", function () {
    if (current == 20){
        current = -1
    }
    img.src = imgList[current+1]
    current += 1
})
