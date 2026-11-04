let racers = [30, 60, 30, 30]; 
let startY = 50; 
let yStep = 60; 
let finishX = 560; 

function setup() { 
  createCanvas(600, startY + yStep * racers.length); 
} 

function draw() { 
  background(240); 
  line(finishX, 0, finishX, height); 
  
  for (let i = 0; i < racers.length; i++) { 
    let y = startY + yStep * i; 
    
    if (racers[i] < finishX) { 
      // Original rule: racers[i] += random(1, 4);
      
      // NEW RULE: 10% chance for a turbo boost (+6) or normal random speed
      let speed = random(1, 4);
      if (random(1) < 0.1) {
        speed += 6; // Turbo boost!
      }
      
      racers[i] += speed; 
    } 
    
    circle(racers[i], y, 24); 
  } 
}

