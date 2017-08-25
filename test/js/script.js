var content = document.querySelector(".content");
var buttondiv = document.querySelector(".buttondiv");
var main = document.querySelector(".main");
var close = document.querySelector(".close");


buttondiv.addEventListener("click", function () {
    main.style.display = "block";
})

close.addEventListener("click", function () {
    main.style.display = "none";
})

window.addEventListener("keydown", function (event) {
        if (main.style.display = "block"){
        if (event.which == 27) {
            main.style.display = "none";
        }
    }
});