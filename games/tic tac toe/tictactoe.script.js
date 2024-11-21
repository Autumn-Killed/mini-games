$(document).ready(function () {
    let xTurn = true;
  
    $(".square").click(function () {
      const elem = $(this);
      elem.html(xTurn ? "X" : "O");
      xTurn = !xTurn;
    });
  });
  