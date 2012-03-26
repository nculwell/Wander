"use strict";

(function() {

  var cvsMapDisplay, ctxMapDisplay;
  var cvsMapCell, ctxMapCell, imgMapCell;

  var tileSize = 50;

  var images;

  var imgFloor;
  var imgWall;

  var pos = { x: 1, y: 1 };

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

  var drawMap = function() {
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

        if (r == pos.y && c == pos.x) {
          $(img).attr("src", "tiles/man_sword_shield.png");
        } else {
          $(img).attr("src", "tiles/blank.png");
        }
      }
    }
  }

  var move = function(dir) {
    var moveTo = { x: pos.x + dir.x, y: pos.y + dir.y };
    var bgIndex = map[moveTo.y][moveTo.x];
    if (bgIndex == 0) {
      pos = moveTo;
      drawMap();
    }
  }

  //$(document).ready(function() {
  $(window).load(function() {
    window.scrollTo(0, 1);
    drawMap();
    $(window).bind("resize", drawMap).bind("reorient", drawMap);
    $("#arrowUp").click(function() { move({ x: 0, y: -1 }) });
    $("#arrowDn").click(function() { move({ x: 0, y: +1 }) });
    $("#arrowLt").click(function() { move({ x: -1, y: 0 }) });
    $("#arrowRt").click(function() { move({ x: +1, y: 0 }) });
  });
})();

