let racers = [30, 60, 30, 30]; 
let startY = 50; 
let yStep = 60; 
let finishX = 560; 

function setup() { 
  createCanvas(600, startY + yStep * racers.length); 
  document.getElementById("set-racer").addEventListener("click", setFirstRacerPosition);
  document.getElementById("add-racer").addEventListener("click", addRacer);
  document.getElementById("remove-racer").addEventListener("click", removeLastRacer);
  updateRaceControls();
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
        speed += 16; // Turbo boost!
      }
      
      racers[i] += speed; 
    } 
    
    circle(racers[i], y, 24); 
  } 
  updateRaceControls();
}

function getEnteredPosition() {
  const position = Number(document.getElementById("position").value);
  return Number.isFinite(position) ? constrain(position, 0, finishX) : 0;
}

function setFirstRacerPosition() {
  if (racers.length === 0) return;
  racers[0] = getEnteredPosition();
}

function addRacer() {
  racers.push(getEnteredPosition());
  resizeCanvas(600, startY + yStep * racers.length);
  updateRaceControls();
}

function removeLastRacer() {
  if (racers.length === 0) return;
  racers.pop();
  resizeCanvas(600, startY + yStep * racers.length);
  updateRaceControls();
}

function updateRaceControls() {
  document.getElementById("set-racer").disabled = racers.length === 0;
  document.getElementById("remove-racer").disabled = racers.length === 0;
  document.getElementById("race-status").textContent =
    racers.length === 0
      ? "No racers. Add a racer to start."
      : `${racers.length} racer${racers.length === 1 ? "" : "s"}; Racer 1 position: ${Math.round(racers[0])} px.`;
}
