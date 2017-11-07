(document).ready(function() {
  $( '#mistakes, #headless, #vulture' ).draggable({
    cursor: "move",
    stack: '#mistakes, #headless, #vulture',
    containment: "#containmentwrapper"
    scroll: false
  });
} );
