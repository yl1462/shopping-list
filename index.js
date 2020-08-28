$("#js-shopping-list-form").on("submit", function(event){
  event.preventDefault();
  const text = $("#shopping-list-entry").val();
  $(".shopping-list").append($("<li>").append(text));
  $("#shopping-list-entry").val("");
})

$('.container').on('click','.shopping-item-delete', function() {
  $(this).remove(event.currectTarget);
})