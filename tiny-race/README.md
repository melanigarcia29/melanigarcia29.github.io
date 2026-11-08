1. Launch Directions

Follow these step-by-step instructions to open, run, and test this project:

1. **Locate Project Folder:** Ensure that both HTML file (e.g., `index.html`) and  JavaScript file (`sketch.js`) are saved together inside the exact same folder.
2. **Open the Project:** Right-click on your HTML file and choose **Open With**, then select any web browser (such as Google Chrome, Microsoft Edge, or Safari).
3. **Verify the Interface:** Once the browser window opens, you should see the "**Tiny-Race:)**" heading, your three control buttons, the position input box, and the p5.js canvas rendered seamlessly on the screen.
4. **Interact with the Simulation:** Use the controls on the page to change racer positions, add new racers dynamically, or remove them to test the system boundaries.

2. Selected Four Option Codes & Demonstration Rows

• R1 (Read by Index): Met inside updateRaceControls() where racers[0] is explicitly targeted at a fixed index to control the text string showing Racer 1's position on screen.
• U1 (Update by Index): Met in setFirstRacerPosition(), which replaces the existing entry at racers[0] with a fresh position from the input element when the "click" action happens.
• A1 (Add with push()): Met in addRacer(), where clicking the designated control adds a value directly to the end of the array using .push().
• D1 (Remove with pop()): Met in removeLastRacer(), where a dedicated button control triggers .pop(), immediately removing the final racer element and dynamically resizing the canvas to update the layout.

3. Boundary Test Sequence:

1. Empty Array Exception: Click the "Remove last Racer" button 4 times consecutively until the array is fully drained.
	• Expected Result: The canvas scales cleanly away. The status text changes to "No racers...", and the set-racer and remove-racer buttons automatically update to disabled, preventing any crash.
	
2. Unavailable/Invalid Input Entry: Type "HELLO" or an out-of-bounds number like -500 or 9999 into the #position input box. Click "Add Racer".
	• Expected Result: The getEnteredPosition() utility uses Number.isFinite and constrain() to turn the bad entry cleanly back into a safe boundary entry (0 or 560) rather than injecting NaN into animation loops.

3. Repeated State Changes: Rapidly click "Add Racer" 5 times, then click "Remove last Racer" 3 times.
	• Expected Result: The program handles continuous mutations fluently without frame drops, adjusting the p5.js canvas environment smoothly.

4. The .length Locations:

 *tracking property is deployed across these distinct functional targets:

• Canvas Initialization: Setup function — createCanvas(600, startY + yStep * racers.length);
• Loop Iteration Boundary: Draw function loop — for (let i = 0; i < racers.length; i++)
• Dynamic Sizing States: Used in both addRacer() and removeLastRacer() inside resizeCanvas(...).
• Safe Input Guards & State Rules: Checked multiple times within updateRaceControls() to flip the .disabled properties and output conditional grammar elements (racer vs racers).
