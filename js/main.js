// Import the things
import { logoLargeLeftInit, logoLargeRightInit, logoLoadInit, loadingPanelInit, loadingPanelClose } from "./modules/splash.mjs";
import { loadSaveStates } from "./modules/character-load.mjs";
import { gameScene } from "./modules/game-start.mjs";

// Actually do the things
window.addEventListener('DOMContentLoaded', () =>{
    logoLargeLeftInit();
    logoLargeRightInit();
    gameScene();
    logoLoadInit();
    loadingPanelInit();
    loadingPanelClose();
    loadSaveStates();
});
