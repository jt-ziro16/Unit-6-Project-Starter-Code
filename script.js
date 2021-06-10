$(".yes-button1").click(function() {
    $(".title").fadeOut(); 
    $(".button1").fadeOut();
    $(".firstImage").fadeOut();
    $(".Part-Two-Yes").show();
});

$(".no-button1").click(function() {
    $(".title").fadeOut();
    $(".button1").fadeOut();
    $(".firstImage").fadeOut();
    $(".button2").fadeIn();
    $(".Part-Two-No").show();

});

$(".yes-button2").click(function() {
    $(".Part-Two-Yes").fadeOut();
    $(".button2").fadeOut();
    $(".treasure-img2a").fadeOut();
    $(".treasure-img2b").fadeOut();
    $(".Story-Ending-Good").show();
});

$(".no-button2").click(function() {
    $(".Part-Two-Yes").fadeOut();
    $(".button2").fadeOut();
    $(".treasure-img2a").fadeOut();
    $(".treasure-img2b").fadeOut();
    $(".Story-Ending-Bad").show();

});
$(".yes-button2").click(function() {
    $(".Part-Two-No").fadeOut();
    $(".button2").fadeOut();
    $(".treasure-img2a").fadeOut();
    $(".treasure-img2b").fadeOut();
    $(".Story-Ending-Good").show();
});

$(".no-button2").click(function() {
    $(".Part-Two-No").fadeOut();
    $(".button2").fadeOut();
    $(".treasure-img2a").fadeOut();
    $(".treasure-img2b").fadeOut();
    $(".Story-Ending-Bad").show();

});