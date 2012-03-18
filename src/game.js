"use strict";

(function() {

  var canvas;
  var images;

  function resetCanvas() {
    var canvas = document.getElementById("theCanvas");
    canvas.width = window.innerWidth - 10;
    canvas.height = window.innerHeight - 10;
    var context = canvas.getContext("2d");

    // now draw the line
    // drawLine(context);

    var a = document.getElementById("theImg");
    blit(context, a, {x: 1, y: 1});
  }

  function blit(context, img, xy) {
    context.drawImage(img, xy.x, xy.y);
  }

  function drawLine(context) {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(canvas.width, canvas.height);
    context.stroke();
  }

  //$(document).ready(function() {
  $(window).load(function() {
    window.scrollTo(0, 1);
    resetCanvas();
    $(window).bind("resize", resetCanvas).bind("reorient", resetCanvas);
  });
})();

