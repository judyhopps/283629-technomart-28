let sliderBackButton = document.querySelector(".slider-back");
let sliderForewardButton = document.querySelector(".slider-forward");

let sliderFirstPictureButton = document.querySelector(".slider-drill");
let sliderSecondPictureButton = document.querySelector(".slider-perforator");

let firstSliderPicture = document.querySelector(".slider-perforators");
let secondSliderPicture = document.querySelector(".slider-drills");

sliderBackButton.addEventListener(
    "click",
    function(){
        console.log("Нажата вперед");

        firstSliderPicture.classList.add("hidden-slider");
        secondSliderPicture.classList.remove("hidden-slider");

        // Задизейблим кнопку, т.к. дальше двигаться некуда
        sliderBackButton.disabled = true;
        sliderForewardButton.disabled = false;
    }

);

sliderForewardButton.addEventListener(
    "click",
    function(){
        console.log("Нажата вперед");

        firstSliderPicture.classList.remove("hidden-slider");
        secondSliderPicture.classList.add("hidden-slider");

        // Задизейблим кнопку, т.к. дальше двигаться некуда
        sliderForewardButton.disabled = true;
        sliderBackButton.disabled = false
    }
);