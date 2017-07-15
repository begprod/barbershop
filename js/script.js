document.addEventListener('DOMContentLoaded', function() {
    showPopup();
    closePopup();
});

function showPopup() {
    var mapTriggerBtn = document.querySelector('.js-show-map');
    var mapPopup = document.querySelector('.popup--map');
    if(mapPopup && mapTriggerBtn) {
        mapTriggerBtn.addEventListener('click', function() {
            mapPopup.classList.add('popup--active');
        });
    }
}


function closePopup() {
    var closeBtn = document.querySelector('.popup__close');
    if(closeBtn) {
        closeBtn.addEventListener('click', function() {
            this.parentElement.classList.remove('popup--active');
        });
    }
}