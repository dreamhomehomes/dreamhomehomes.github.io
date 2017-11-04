$(document).ready(function() {
  $( '#mistakes, #headless, #vulture' ).draggable({
    cursor: "move",
    start: function(event, ui) { $(this).css("z-index", a++); }
  });
} );
