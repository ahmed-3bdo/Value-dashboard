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
      $('.chat__box img').attr('src', 'imgs/help-icon-dark.png')
    } else {
      $('.help__icon img').attr('src', 'imgs/help-icon-light.png')
      $('.chat__box img').attr('src', 'imgs/help-icon-light.png')
    }
});
// Keymap Content Toggler
$('.keymap__icon').on('click', function() {
  $(this).toggleClass('opened');
  $('.keymap__content').slideToggle();
});

// Switch Between Pages
$('.page-section-link').on('click', function () {
  $('.page-section').hide();
  $($(this).attr('data-class')).show();
  if ($(window).width() < 768) {
    $('.side-bar').removeClass('opened');
  }
});

// Terms
$('.terms__box .title__box').on('click', function () {
  $(this).parent().toggleClass('opened');
  $(this).next().slideToggle();
})

// Caht-box
$("#help__icon, .chat__header__close").on('click', function () {
  $('.chat__box').slideToggle(200);
})