let feedbackWindow = document.querySelector('.feedback');
let feebackButton = document.querySelector('.write-us');
let feedBackCloseButton = document.querySelector('.feedback .close-button');
let userNameInput = feedbackWindow.querySelector('[name=user-name]');
let feedbackForm = feedbackWindow.querySelector('form');
let userMailInput = feedbackWindow.querySelector('[name=user-mail]');

let isLocalStorageSupported = true;

let savedUserName;
let savedMail;

try{
    savedUserName = localStorage.getItem('userName');
    savedMail = localStorage.getItem('userMail');
}
catch(error){
    isLocalStorageSupported = false;
}

feebackButton.addEventListener(
    'click',
    function(e){
        e.preventDefault();
        feedbackWindow.classList.remove('hidden-window');
        feedbackWindow.classList.add('show-window');
        userNameInput.focus();
        if(savedUserName){
            userNameInput.value = savedUserName;
        }
        if(savedMail){
            userMailInput.value = savedMail;
        }

    }
);

feedBackCloseButton.addEventListener(
    'click',
    function(){
        feedbackWindow.classList.add('hidden-window');
        feedbackWindow.classList.remove('show-window');
        feedbackWindow.classList.remove('modal-error');
    }
);

feedbackForm.addEventListener(
    'submit',
    function(e){
        if(!userNameInput.value || !userMailInput.value){
            e.preventDefault();
            console.log("Не введены обязательные поля");
            feedbackWindow.classList.remove("modal-error");
            feedbackWindow.offsetWidth = feedbackWindow.offsetWidth;
            feedbackWindow.classList.add('modal-error');
        }
        else{
            if(isLocalStorageSupported){
                localStorage.setItem("userName", userNameInput.value);
                localStorage.setItem("userMail", userMailInput.value);
            }
        }
    }
);

window.addEventListener(
    "keydown",
    function(e){
        if(e.keyCode === 27){
            if(!feedbackWindow.classList.contains('hidden-window')){
                e.preventDefault();
                feedbackWindow.classList.add('hidden-window');
                feedbackWindow.classList.remove('show-window');
                feedbackWindow.classList.remove('modal-error');
            }
        }
    }
);