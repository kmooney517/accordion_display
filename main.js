$('h4.firstHeading').on('click', function() {
  $('.firstLevel p').toggleClass('hidden').addClass('shown');
});

$('h4.secondHeading').on('click', function() {
  $('.secondLevel p').toggleClass('hidden').addClass('shown');
});

$('h4.thirdHeading').on('click', function() {
  $('.thirdLevel p').toggleClass('hidden').addClass('shown');
});