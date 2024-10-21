// Import the things
import { logoLargeInit, gameScene, logoRightInit, loadingPanelInit, loadingPanelClose } from "./modules/splash.mjs";

// Actually do the things
window.addEventListener('DOMContentLoaded', () =>{
    logoLargeInit();
    gameScene();
    logoRightInit();
    loadingPanelInit();
    loadingPanelClose();
});
