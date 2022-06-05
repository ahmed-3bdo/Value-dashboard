$('.side-bar__btn-toggler').on('click', function() {
  $('.side-bar').toggleClass('opened');
})
// Theme Toggler
$('.theme-toggler').on('click', function() {
    $(':root').toggleClass('light-theme');
    $('.theme-toggler').toggleClass('theme-toggler-light')
})



