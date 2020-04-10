$('.read-more').click (
  function() {
    $('.even').html($(this).attr('description_main'));
  }
)

$('.read-more').click(
  function() {
  $('.window').removeClass('hidden_to').addClass('active');
});

$('.close_window').click(
  function() {
  $('.window').removeClass('active').addClass('hidden_to');
});