// Select DOM elements for use in both splash and main
const logoLeft = document.querySelectorAll('.logo-left');
const logoRight = document.querySelectorAll('.logo-right');
const splashContainer = document.querySelector('.splash-container');
const gameContainer = document.querySelector('.game-container');
const loadLogo = document.querySelector('.logo-right');
const loadWrapper = document.querySelector('.load-wrapper');
const leaveLoad = document.querySelector('.exit-loader');


// Logos logic
function logoLargeLeft(logoLeft) {
    logoLeft.style.transform = 'scale(1.2)';
    logoLeft.style.boxShadow = '-10px 10px 15px blue';
};

function logoLargeRight(logoRight) {
    logoRight.style.transform = 'scale(1.2)';
    logoRight.style.boxShadow = '10px 10px 15px blue';
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


// Loading Screen Logic
function showPanel() {
    loadWrapper.classList.add('visible');
};

function hidePanel() {
    loadWrapper.classList.add('leave');
};


// Event Listeners
function logoLargeLeftInit() {
    logoLeft.forEach(logo => {
        logo.addEventListener('mouseenter', () => logoLargeLeft(logo));
        logo.addEventListener('mouseleave', () => logoReturn(logo));
    })
};

function logoLargeRightInit() {
    logoRight.forEach(logo => {
        logo.addEventListener('mouseenter', () => logoLargeRight(logo));
        logo.addEventListener('mouseleave', () => logoReturn(logo));
    })
}

function logoLoadInit() {
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
export { logoLargeLeftInit, logoLargeRightInit, logoLoadInit, loadingPanelInit, loadingPanelClose };