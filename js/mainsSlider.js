let series = document.querySelector(".pools-series__wrapper").children
let title = document.querySelector(".series-description__title")
let colors = document.querySelector(".color__list").children
let MainImg = document.querySelector(".series-description__main-img")
console.log(series)
let m = {
    "Серия Rio": [],
    "Серия Luxor": [
        'Luxor_8537_BG.jpg',
        'Luxor_8537_BI.jpg',
        'Luxor_8537_BS.jpg',
        'Luxor_8537_G.jpg',
        'Luxor_8537_S.jpg',
        'Luxor_8537_C.jpg',
        'Luxor_8537_SF.jpg',
        'Luxor_8537_SFL.jpg',
        'Luxor_8537_T.jpg',
        'Luxor_8537_e.jpg',
        'Luxor_8537_RS.jpg'
    ],
    "Серия Marathon":[],
    "Серия Minpool": []
}
let currSeries = "Серия Rio"
for ( let elm of series) {
    elm.addEventListener("click", function () {
        currSeries = elm.textContent
        title.textContent = elm.textContent
        console.log(currSeries)
    });
};
for (let color of colors){
    color.addEventListener("click", function () {
        for (let l in m ){
            if (l == currSeries){
                console.log("d32423423")
            }
        }
    });
};