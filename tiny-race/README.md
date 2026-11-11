1. Launch Directions

Follow these step-by-step instructions to open, run, and test this project:)

1. **Locate Project Folder:** Ensure that both HTML file (e.g., `index.html`) and  JavaScript file (`sketch.js`) are saved together inside the exact same folder.
2. **Open the Project:** Right-click on your HTML file and choose **Open With**, then select web browser.
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

4. The ".length" Locations:

• Canvas Initialization: Setup function — createCanvas(600, startY + yStep * racers.length);
• Loop Iteration Boundary: Draw function loop — for (let i = 0; i < racers.length; i++)
• Dynamic Sizing States: Used in both addRacer() and removeLastRacer() inside resizeCanvas(...).
• Safe Input Guards & State Rules: Checked multiple times within updateRaceControls() to flip the .disabled properties and output conditional grammar elements (racer vs racers).

5. Advanced Indicators (Features & How to Try Them):

### Feature A: Mathematical Rule with Probability (Conditional Chance Engine)
* **What it is:** Instead of incrementing animation elements uniformly, the rendering engine relies on a dual-layered random calculation rule. Every frame, each racer has a baseline progression scale (`random(1, 4)`), but a second conditional `random(1) < 0.1` evaluation introduces a **10% chance flag** that triggers a dynamic "+16 px Turbo Boost". This creates an unpredictable, non-linear racing behavior.
* **How to try it:**
  1. Launch the application in browser.
  2. Watch the initial 4 racers run across the canvas.
  3. *Observation:* Observe that the circles do not move at a flat, synchronized speed. Occasionally, a single circle will visually "leap" ahead of the others. This confirms that the chance engine is successfully generating and applying separate probability rules to individual elements on the fly.

### Feature B: Malicious & Unavailable Input Sanitization (`Number.isFinite`)
* **What it is:** Instead of allowing bad DOM inputs (like blank spaces or text words) to break the mathematical array loop calculations—which would normally introduce `NaN` and crash the p5.js canvas—the `getEnteredPosition()` utility sanitizes data entry using strict type coercion, returning a safe fallback value (`0`) if string values are submitted.
* **How to try it:**
  1. Clear out the position text input box completely, or type letters like `abc` or symbols like `!!!`.
  2. Click **"Add racer"** or **"Set Racer 1 position"**.
  3. *Observation:* The project handles this safely without throwing red runtime exceptions in developer console. The program catches the unavailable input and automatically clamps it to the starting line (`0px`), ensuring perfect data stability.

### Feature C: Structural Spatial Boundary Enforcement (`constrain()`)
* **What it is:** To prevent user layout errors (such as spawning or placing a racer completely off-screen or past the track limits), the input pipeline features architectural boundary enforcement via `constrain(position, 0, finishX)`. It normalizes all radical out-of-bounds positions back into valid track coordinates.
* **How to try it:**
  1. Type a massive out-of-bounds coordinate like `9999` into the text box.
  2. Click **"Add racer"**.
  3. *Observation:* The newly generated lane renders normally, and the spawned circle is caught and locked exactly at the finish line line boundary (`560px`), rather than flying off into invisible screen coordinates. 
  4. Type a negative number like `-800` and click **"Add racer"**. The circle is instantly held safely at the minimum track floor boundary (`0px`).
