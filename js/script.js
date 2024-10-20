const logos = document.querySelectorAll('.logo');

logos.forEach(logo => {
    logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'scale(1.2)';
        logo.style.boxShadow = '10px 10px 15px blue';
    });

    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'scale(1)';
        logo.style.boxShadow = 'none';
    })
});

const enterVoid = document.querySelectorAll('.enter-button');

enterVoid.forEach(enterButton => {
    enterButton.addEventListener('mouseenter', () => {
        enterButton.style.transform = 'scale(1.5)';
//        enterButton.style.boxShadow = '10px 10px 15px blue';
    })
    enterButton.addEventListener('mouseleave', () => {
        enterButton.style.transform = 'scale(1)';
//        enterButton.style.boxShadow = 'none';
    })
});

const startButton = document.querySelector('.enter-button');
const splashContainer = document.querySelector('.splash-container');
const gameContainer = document.querySelector('.game-container');

startButton.addEventListener('click', (e) => {
    e.preventDefault();

    //Fade out the splash page
    splashContainer.style.opacity = '0';

    //After the transition, hide the splash andd show the game content
    setTimeout(() => {
        splashContainer.style.display = 'none';
        gameContainer.style.display = 'flex';
        gameContainer.style.opacity = '1';
    }, 1000)
})

const loadLogo = document.querySelectorAll('.logo_right');

loadLogo.forEach(logoRight => {
    logoRight.addEventListener('mouseenter', () => {
        logoRight.style.backgroundImage = 'url("images/load-icon-png-6.png")';
//        logoRight.style.backgroundSize = '100%';
        logoRight.style.backgroundPosition = 'center 20px'
    });

    logoRight.addEventListener('mouseleave', () => {
        logoRight.style.backgroundImage = 'url("images/195-1957551_the-emperor-protects-warhammer-40k-inquisitor-logo.png")';
        logoRight.style.backgroundPosition = 'center'
    })

})