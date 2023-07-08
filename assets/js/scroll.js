$(document).ready(function() {
    // When the 'scrollToTop' button is clicked, animate the scroll to top
    $('#scrollToTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });
});