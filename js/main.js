// Import the things
import { logoLargeLeftInit, logoLargeRightInit, logoLoadInit, loadingPanelInit, loadingPanelClose, loadLogo } from "./modules/splash.mjs";
import { loadSaveStates } from "./modules/character-load.mjs";
import { gameScene } from "./modules/game-start.mjs";
import { loadScript, welcome } from "./modules/game-engine.mjs";

// Actually do the things
window.addEventListener('DOMContentLoaded', () =>{
    logoLargeLeftInit();
    logoLargeRightInit();
    gameScene();
    logoLoadInit();
    loadingPanelInit();
    loadingPanelClose();
});


loadLogo.addEventListener('click', (e) => {
    e.preventDefault();
    loadSaveStates();
})

welcome.addEventListener('click', (e) => {
    e.preventDefault();
    loadScript();
})