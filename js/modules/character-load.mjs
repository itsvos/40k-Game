// Import-ant things
import { gameTransition } from "./game-start.mjs";

// Collect all the Elements
const saveList = document.getElementById('save-list');


// Functions
async function loadSaveStates() {
    try{
        const response = await fetch('../../JSON/character-load.json');
        if (!response.ok) throw new Error('No character saves found.');

        const saveData = await response.json();
        populateList(saveData);
    } catch (error) {
        console.error("Error loading save states: ", error);
    }
}

function getFirstName(fullName) {
    return fullName.split(' ')[0];
}

function populateList(saveData) {
    saveList.innerHTML = '';

    saveData.forEach(save => {
        const listItem = document.createElement('li');
        const firstName = getFirstName(`${save.name}`);
        listItem.textContent = `${firstName} - ${save.timestamp}`;
        listItem.dataset.id = save.id;

        listItem.addEventListener('click', () => {
            loadGameState(save);
            gameTransition();
        });

        saveList.appendChild(listItem);
    });
}

function loadGameState(save) {
    console.log(`Loading game state for ${save.name}...`);
    console.log(`Stats: ${save.health} ${save.armor} ${save.strength} ${save.agility} ${save.intelligence}`);
}

export { loadSaveStates }