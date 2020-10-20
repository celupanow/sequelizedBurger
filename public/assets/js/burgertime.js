$(function() {
  
  //when the devour button is clicked, the devour status is changed
    $(".change-devoured").on("click", function(event) {
      event.preventDefault();

      var id = $(this).data("id");

      $.ajax({
        type: "PUT",
        url: "/api/burgers/" + id
      }).then(function(data) {
        location.reload();
      });
    });
  
    //adding a new burger
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
    
    //deleting burger
    $(".delete-burger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
  
      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(location.reload());
    });
  
  });
  