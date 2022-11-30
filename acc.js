$('.panel-collapse').on('shown.bs.collapse', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var $panel = $(this).closest('.panel');
    $('html,body').animate({
        scrollTop: $panel.offset().top
    }, 500);
});