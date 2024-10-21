// Select DOM elements for use in both splash and main
const logos = document.querySelectorAll('.logo');
const enterButton = document.querySelector('.enter-button');
const splashContainer = document.querySelector('.splash-container');
const gameContainer = document.querySelector('.game-container');
const loadLogo = document.querySelector('.logo_right');
const loadWrapper = document.querySelector('.load-wrapper');
const leaveLoad = document.querySelector('.exit-loader');


// Logos logic
function logoLarge(logo) {
    logo.style.transform = 'scale(1.2)';
    logo.style.boxShadow = '10px 10px 15px blue';
};

function logoReturn(logo) {
    logo.style.transform = 'scale(1)';
    logo.style.boxShadow = 'none'
};

function showLoadLogo(logoRight) {
    logoRight.style.backgroundImage = 'url("images/load-icon-png-6.png")';
    logoRight.style.backgroundPosition = 'center 20px';
}

function loadLogoReturn(logoRight) {
    logoRight.style.backgroundImage = 'url("images/195-1957551_the-emperor-protects-warhammer-40k-inquisitor-logo.png")';
    logoRight.style.backgroundPosition = 'center'
}


// Game Start Logic
function gameTransition() {
    // Fade out Splash Page
    splashContainer.style.opacity = '0';

    // After transition, hide splash and show game content
    setTimeout(() => {
        splashContainer.style.display = 'none';
        gameContainer.style.display = 'flex';
        gameContainer.style.opacity = '1';
    }, 1000)
};


// Loading Screen Logic
function showPanel() {
    loadWrapper.classList.add('visible');
};

function hidePanel() {
    loadWrapper.classList.add('leave');
};


// Event Listeners
function logoLargeInit() {
    logos.forEach(logo => {
        logo.addEventListener('mouseenter', () => logoLarge(logo));
        logo.addEventListener('mouseleave', () => logoReturn(logo));
    })
};

function gameScene() {
    enterButton.addEventListener('click', (e) => {
        e.preventDefault();
        gameTransition();
    })
};

function logoRightInit() {
    loadLogo.addEventListener('mouseenter', () => showLoadLogo(loadLogo));
    loadLogo.addEventListener('mouseleave', () => loadLogoReturn(loadLogo));
};

function loadingPanelInit() {
    loadLogo.addEventListener('click', (e) =>{
        e.preventDefault();
        showPanel();
    }
)};

function loadingPanelClose() {
    leaveLoad.addEventListener('click', (e) => {
        e.preventDefault()
        hidePanel()
        setTimeout(() => {
            loadWrapper.classList.remove('visible');
            loadWrapper.classList.remove('leave');
        }, 1000);
    })
}

// Exporting
export { logoLargeInit, gameScene, logoRightInit, loadingPanelInit, loadingPanelClose };