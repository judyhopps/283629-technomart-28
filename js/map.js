let mapButton = document.querySelector('.map');
let mapWindow = document.querySelector('.map-popup');
let mapWindowCloseButton = document.querySelector('.map .close-button');

mapButton.addEventListener(
    'click',
    function(e){
        e.preventDefault();
        mapWindow.classList.remove('hidden-window');
    }
);

mapWindow.addEventListener(
    'click',
    function(){
        mapWindow.classList.add('hidden-window');
    }
)