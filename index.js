$("#js-shopping-list-form").on("submit", function(event){
  event.preventDefault();
  const text = $("#shopping-list-entry").val();

  $("#shopping-list-entry").val("");

  $(".shopping-list").append(
    `<li>
      <span class="shopping-item">${text}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
  
});

$('.shopping-list').on('click','.shopping-item-toggle', function(event) {
  $(this).closest(`li`).children(".shopping-item").toggleClass("shopping-item__checked");
})

$('.shopping-list').on('click','.shopping-item-delete', function(event) {
  $(this).closest(`li`).remove();
})

