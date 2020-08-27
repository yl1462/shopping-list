$("#js-shopping-list-form").on("submit", function(event){
  const text = $("#shopping-list-entry").val();
  $("#shopping-list").append($("<li>").append(text));
  $("#shopping-list-entry").val("");
  event.preventDefault();
}

$("#shopping-list").on("", "<li>", function(){
  $(this).remove();
})