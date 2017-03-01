var svg = document.getElementById("playground");
var clearBtn = document.getElementById("clear");
var prev = null; // to store previous line element

clearBtn.addEventListener("click", function() { // removes all children to clear svg
  while (svg.lastChild) { svg.removeChild(svg.lastChild); }
  prev = null; // set prev line back to null
});

svg.addEventListener("click", function(e){
    if (prev != null){ // if line has begun to been drawn
        prev.setAttribute("x2", e.offsetX); // set x and y to current mouse
        prev.setAttribute("y2", e.offsetY);
        svg.appendChild(prev);  }
        
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", e.offsetX); //set circle attributes
    circle.setAttribute("cy", e.offsetY);
    circle.setAttribute("r", 10);
    circle.setAttribute("fill", "red");
    svg.appendChild(circle);

    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", e.offsetX); //initiate starting position of line
    line.setAttribute("y1", e.offsetY);
    line.setAttribute("stroke", "black");
    prev = line; // set prev line to current line
})
