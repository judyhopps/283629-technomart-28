let sliderBackButton = document.querySelector(".slider-back");
let sliderForewardButton = document.querySelector(".slider-forward");

let sliderFirstPictureButton = document.querySelector(".slider-drill");
let sliderSecondPictureButton = document.querySelector(".slider-perforator");

let firstSliderPicture = document.querySelector(".slider-perforators");
let secondSliderPicture = document.querySelector(".slider-drills");

sliderBackButton.addEventListener(
    "click",
    function(){

        firstSliderPicture.classList.remove("hidden-slider");
        secondSliderPicture.classList.add("hidden-slider");

        //Поменяем кнопку выбранной картинки
        sliderFirstPictureButton.classList.add("selected-slider-button");
        sliderSecondPictureButton.classList.remove("selected-slider-button");

        // Задизейблим кнопку, т.к. обратно двигаться некуда
        sliderBackButton.disabled = true;
        sliderForewardButton.disabled = false;
    }

);

sliderForewardButton.addEventListener(
    "click",
    function(){
        console.log("Нажата вперед");

        firstSliderPicture.classList.add("hidden-slider");
        secondSliderPicture.classList.remove("hidden-slider");

        //Поменяем кнопку выбранной картинки
        sliderSecondPictureButton.classList.add("selected-slider-button");
        sliderFirstPictureButton.classList.remove("selected-slider-button");
        

        // Задизейблим кнопку, т.к. дальше двигаться некуда
        sliderForewardButton.disabled = true;
        sliderBackButton.disabled = false
    }
);

sliderFirstPictureButton.addEventListener(
    "click",
    function(){
        sliderBackButton.disabled = true;
        sliderForewardButton.disabled = false;

        firstSliderPicture.classList.remove("hidden-slider");
        secondSliderPicture.classList.add("hidden-slider");

        sliderFirstPictureButton.classList.add("selected-slider-button");
        sliderSecondPictureButton.classList.remove("selected-slider-button");

    }
);


sliderSecondPictureButton.addEventListener(
    "click",
    function(){
        sliderBackButton.disabled = false;
        sliderForewardButton.disabled = true;

        firstSliderPicture.classList.add("hidden-slider");
        secondSliderPicture.classList.remove("hidden-slider");

        sliderFirstPictureButton.classList.remove("selected-slider-button");
        sliderSecondPictureButton.classList.add("selected-slider-button");

    }
);