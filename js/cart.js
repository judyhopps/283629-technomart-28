let buyButtons = document.querySelectorAll('.perforator-item a');
let cartInfoWindow = document.querySelector('.good-info-cart');
let cartInfoCloseButon = cartInfoWindow.querySelector('.close-button');
let cartInfoSpan = document.querySelector('.cart span');
let goodInCartNumber = cartInfoSpan.innerHTML;
let continueShoppingButton = cartInfoWindow.querySelector('.continue-shopping');

for(button of buyButtons){
    button.addEventListener(
        'click',
        function(e){
            e.preventDefault();
            
            goodInCartNumber++;
            cartInfoSpan.innerHTML = goodInCartNumber;
            if(goodInCartNumber > 0){
                cartInfoSpan.parentElement.classList.add('goods-inside');
            }
            cartInfoWindow.classList.remove('hidden-window');
        }        
    );
}

cartInfoCloseButon.addEventListener(
    'click',
    function(){
        cartInfoWindow.classList.add('hidden-window');
    }
);

continueShoppingButton.addEventListener(
    'click',
    function(){
        cartInfoWindow.classList.add('hidden-window');
    }
);