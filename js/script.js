$(document).ready(function() {
    showPopups();
    closePopup();
});


function showPopups() {
    var mapTriggerBtn = $('.js-show-map');
    var mapPopup = $('.popup--map');
    var loginBtn = $('.js-show-login');
    var loginForm = $('.popup--login');

    mapTriggerBtn.click(function() {
        mapPopup.addClass('popup--active');
    });
    loginBtn.click(function() {
        loginForm.addClass('popup--active');
    });
}


function closePopup() {
    var closeBtn = $('.popup__close');
    closeBtn.click(function() {
        $(this).parent().removeClass('popup--active');
    });
}
