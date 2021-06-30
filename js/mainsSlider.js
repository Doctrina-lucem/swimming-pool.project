let series = document.querySelector(".pools-series__wrapper").children
let title = document.querySelector(".series-description__title")
console.log(series)
let k = "kkkkkkk"
for ( let elm of series) {
    elm.addEventListener("click", function () {
        title.textContent = elm.textContent
    });
}