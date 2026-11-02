let circles = [];       // Stores all drawing circles 
let hueValue = 0;       // Current drawing color
let circleSize = 45;    // Maximum drawing circle size 
let fadeAmount = 4;     // How quickly circles fade 
let cornerSize = 70;    // Size of the four corner circles 

function setup() { 
  createCanvas(700, 600); 
  colorMode(HSB, 360, 100, 100, 255); 
  noStroke(); 
} 

function draw() { 
  // Transparent background creates a fading trail 
  background(0, 0, 10, 25); 

  //  Can update and display the drawing circles 
  for (let i = circles.length - 1; i >= 0; i--) { 
    let c = circles[i]; 

    // Can update each circle's position and transparency 
    c.x += c.speedX; 
    c.y += c.speedY; 
    c.alpha -= fadeAmount; 

    // Solid colored circle 
    fill(c.hue, 90, 100, c.alpha); 
    ellipse(c.x, c.y, c.size, c.size); 

    //  Can delete circles after they fade away 
    if (c.alpha <= 0) { 
      circles.splice(i, 1); 
    } 
  } 

  // Four interactive corner circles 
  drawCorner(cornerSize / 2, cornerSize / 2, "TOP LEFT"); 
  drawCorner(width - cornerSize / 2, cornerSize / 2, "TOP RIGHT"); 
  drawCorner(cornerSize / 2, height - cornerSize / 2, "BOTTOM LEFT"); 
  drawCorner(width - cornerSize / 2, height - cornerSize / 2, "BOTTOM RIGHT"); 

  // Draws only when the mouse is inside the canvas 
  // and is moving or the mouse button is pressed 
  if ( 
    mouseX >= 0 && mouseX <= width && 
    mouseY >= 0 && mouseY <= height && 
    (mouseIsPressed || mouseX !== pmouseX || mouseY !== pmouseY) 
  ) { 
    // Counted loop creates three circles per mouse update 
    for (let i = 0; i < 3; i++) { 
      let c = { 
        x: mouseX + random(-10, 10), 
        y: mouseY + random(-10, 10), 
        size: random(10, circleSize), 
        hue: hueValue, 
        alpha: 255, 
        speedX: random(-0.5, 0.5), 
        speedY: random(-0.5, 0.5) 
      }; 

      circles.push(c); 

      // Can update the stored hue using its previous value 
      hueValue = (hueValue + 12) % 360; 
    } 
  } 

  // Instructions on the canvas 
  fill(0, 0, 100); 
  textSize(14); 
  textAlign(LEFT, TOP); 
  text("Move mouse to draw | Press C to clear | Press S to save", 10, 10); 
} 

//  Can draw a corner circle and change its color on hover 
function drawCorner(x, y, label) { 
  let hovering = dist(mouseX, mouseY, x, y) < cornerSize / 2; 

  if (hovering) { 
    fill(60, 100, 100);  // Yellow when mouse is on it 
  } else { 
    fill(200, 90, 100);  // Blue when mouse is off it c
  } 

  ellipse(x, y, cornerSize, cornerSize); 

  // Label inside each circle
  fill(0, 0, 100); 
  textSize(9); 
  textAlign(CENTER, CENTER); 
  text(label, x, y); 
} 

// Keyboard controls: C to clear, S to save image snapshot
function keyPressed() { 
  if (key === "c" || key === "C") { 
    circles = []; 
  } else if (key === "s" || key === "S") {
    saveCanvas("my-drawing", "png");
  }
}