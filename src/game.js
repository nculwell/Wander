"use strict";

(function() {

  var cvsMapDisplay, ctxMapDisplay;
  var cvsMapCell, ctxMapCell, imgMapCell;

  var tileSize = 50;

  var images;

  var imgFloor;
  var imgWall;

  var map = [
    [ 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 1, 2, 2, 1, 0, 1 ],
    [ 1, 0, 1, 2, 2, 1, 0, 1 ],
    [ 1, 0, 1, 2, 2, 1, 0, 1 ],
    [ 1, 0, 1, 2, 2, 1, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1 ],
  ];

  var bgImgSrc = [
    "floor", "wall", "rubble"
  ];

  function drawMap() {
    var tbl = document.getElementById("mapTbl");
    $(tbl).empty();
    for (var r = 0; r < map.length; r++) {
      var tr = document.createElement("tr");
      tbl.appendChild(tr);
      for (var c = 0; c < map[0].length; c++) {
        var td = document.createElement("td");
        tr.appendChild(td);

        var bgIndex = map[r][c];
        var bgImg = "tiles/" + bgImgSrc[bgIndex] + ".png";
        var cssClass = { "background-image": "url(" + bgImg + ")" };

        var img = document.createElement("img");
        $(img).css(cssClass);
        td.appendChild(img);

        if (r==1 && c==1) {
          $(img).attr("src", "tiles/man_sword_shield.png");
        } else {
          $(img).attr("src", "tiles/blank.png");
        }
      }
    }
  }

  //$(document).ready(function() {
  $(window).load(function() {
    window.scrollTo(0, 1);
    drawMap();
    $(window).bind("resize", drawMap).bind("reorient", drawMap);
  });
})();

