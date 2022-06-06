$('.side-bar__btn-toggler').on('click', function() {
  $('.side-bar').toggleClass('opened');
})
// Theme Toggler
$('.theme-toggler').on('click', function() {
    $(':root').toggleClass('light-theme');
    $('.theme-toggler').toggleClass('theme-toggler-light');
    // Check if theme light && change help icon color
    if ($(':root').hasClass('light-theme')) {
      $('.help__icon img').attr('src', 'imgs/help-icon-dark.png')
    } else {
      $('.help__icon img').attr('src', 'imgs/help-icon-light.png')
    }
});
// Keymap Content Toggler
$('.keymap__icon').on('click', function() {
  $(this).toggleClass('opened');
  $('.keymap__content').slideToggle();
});
