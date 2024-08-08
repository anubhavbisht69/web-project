$('#menu-btn').click(() => {
    $('nav .navigation ul').addClass('active');
});

$('#menu-close').click(() => {
    $('nav .navigation ul').removeClass('active');
});
