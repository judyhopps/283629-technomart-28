let deliveryButton = document.querySelector('.delivery-service-button');
let quaranteeButton = document.querySelector('.quarantee-service-button');
let creditButton = document.querySelector('.credit-service-button');

let servicesDivs =  document.querySelectorAll('.service');

deliveryButton.addEventListener(
    "click",
    function(){

        deliveryButton.classList.add('selected-service');
        quaranteeButton.classList.remove('selected-service');
        creditButton.classList.remove('selected-service');

        showDivWithClass('delivery');

    }
);


quaranteeButton.addEventListener(
    "click",
    function(){
        deliveryButton.classList.remove('selected-service');
        quaranteeButton.classList.add('selected-service');
        creditButton.classList.remove('selected-service');

        showDivWithClass('quarantee');
    }
);

creditButton.addEventListener(
    "click",
    function(){
        deliveryButton.classList.remove('selected-service');
        quaranteeButton.classList.remove('selected-service');
        creditButton.classList.add('selected-service');

        showDivWithClass('credit');
    }
);


function showDivWithClass(classOfSelectedDiv){
    for(serviceDiv of servicesDivs){
        if(serviceDiv.classList.contains(classOfSelectedDiv)){
            removeDivClass(serviceDiv, 'hidden-service');
        }
        else{
            setDivClass(serviceDiv, 'hidden-service');
        }
    }
}

function removeDivClass(element, classToRemove){
    element.classList.remove(classToRemove);
}

function setDivClass(element, classToAdd){
    element.classList.add(classToAdd);
}