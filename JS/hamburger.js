$(function () {
    // hamburger icon 的切換
    $(".hamburger").on("click", function () {
        $(this).toggleClass("is-active");
        $("#menu").toggleClass('show');
    });
});
