$(document).ready(function() {
    setArrowAndImage('#skills-list p', '#cortex', '.arrow', '#logo', '#star-rating');
    setArrowAndImage('#skills-list2 p', '#amti', '.arrow2', '#logo2', '#star-rating2');
    setArrowAndImage('#skills-list3 p', '#blast', '.arrow3', '#logo3', '#star-rating3');
    setArrowAndImage('#skills-list4 p', '#htmlcss', '.arrow4', '#logo4', '#star-rating4');

    $("#skills-list p").hover(function() {
        setArrowAndImage('#skills-list p', this, '.arrow', '#logo', '#star-rating');
    });

    $("#skills-list2 p").hover(function() {
        setArrowAndImage('#skills-list2 p', this, '.arrow2', '#logo2', '#star-rating2');
    });

    $("#skills-list3 p").hover(function() {
        setArrowAndImage('#skills-list3 p', this, '.arrow3', '#logo3', '#star-rating3');
    });

    $("#skills-list4 p").hover(function() {
        setArrowAndImage('#skills-list4 p', this, '.arrow4', '#logo4', '#star-rating4');
    });

});

function setArrowAndImage(skillList, element, arrowClass, logoId, starRatingId) {
    var $arrow = $(arrowClass);
    var $this = $(element);
    var arrowTop = $this.position().top + ($this.outerHeight() - $arrow.outerHeight()) / 2;

    if ($arrow.is(':hidden')) {
        $arrow.css({ top: arrowTop }).show();
    } else {
        $arrow.stop().animate({ top: arrowTop }, 200);
    }

    var imgSrc = "assets/things/" + $this.attr('id') + ".png";
    var logoElement = $(logoId);
    logoElement.attr('src', imgSrc);
    logoElement.removeClass('animatedImage');
    void logoElement[0].offsetWidth;
    logoElement.addClass('animatedImage');

    var rating = $this.data('rating');
    $(starRatingId).html(generateStars(rating));
}

function generateStars(rating) {
    rating = parseFloat(rating);
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}
