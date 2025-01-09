$(function() {
    // Menu
    $('.hamburger').on('click', function() {
        hamburger();
    })
})

// hamburger menu
function hamburger() {
    $('.hamburger').toggleClass('active');

    if ($('.hamburger').hasClass('active')) {
        $('#navi').addClass('active');
    } else {
        $('#navi').removeClass('active');
    }
}