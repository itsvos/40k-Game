const welcome = document.querySelector('.welcome');
const journey = document.querySelector('.journey');

let script = null; // Store the loaded script
let currentLine = 0; // Track the line of dialogue

// Load the JSON script file
async function loadScript() {
    try{
        const response = await fetch('../../../scripts/chapel_intro.json');
        if (!response.ok) throw new Error('Data not loaded.');

        script = await response.json();
        console.log("Script loaded: ", script);

        // Start the first line of dialogue
        displayLine(currentLine);

    } catch (error) {
        console.error("Error loading script: ", error);
    }
}

function displayLine(lineIndex) {
    const dialogue = script.dialogue[lineIndex];
    if (!dialogue) {
        console.log("End of script.");
        return;
   }

    welcome.textContent = dialogue.character;

    journey.textContent = dialogue.text;
}



export { loadScript, welcome }