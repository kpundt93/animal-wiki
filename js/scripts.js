$(document).ready(function() {
  $("#animals").submit(function(event) {
    event.preventDefault();
    const animal = $("input:radio[name=animal]:checked").val();
    
    if (animal === "turtles") {
      $('#turtles').show();
    } else {
      $('#turtles').hide();
    }

    if (animal === "snakes") {
      $('#snakes').show();
    } else {
      $('#snakes').hide();
    }

    if (animal === "insects") {
      $('#insects').show();
    } else {
      $('#insects').hide();
    }
  });
});