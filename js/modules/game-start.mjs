// Declare Game Stuffs
const enterButton = document.querySelector('.enter-button');
const splashContainer = document.querySelector('.splash-container');
const gameContainer = document.querySelector('.game-container');


// Game Start Logic
function gameTransition() {
    // Fade out Splash Page
    splashContainer.style.opacity = '0';

    // After transition, hide splash
    setTimeout(() => {
        splashContainer.style.display = 'none';
    }, 1000)

    // Show Game
    setTimeout(() => {
        gameContainer.classList.add('active');
        console.log("This is firing.")
    }, 1000)
};


// Fun!-ctions
function gameScene() {
    enterButton.addEventListener('click', (e) => {
        e.preventDefault();
        gameTransition();
    })
};

export { gameScene, gameTransition };