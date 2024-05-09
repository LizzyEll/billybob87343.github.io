const circleContainer = document.querySelector('.circle-container');

function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    // Define the dimensions of the area where circles can generate
    const areaWidth = window.innerWidth * 0.5; // Adjust the width as needed
    const areaHeight = window.innerHeight * -0.7; // Adjust the height as needed

    // Random starting X and Y within the defined area
    const randomXStart = Math.random() * areaWidth;
    const randomYStart = Math.random() * areaHeight * -1;

    // Random ending X and Y within the defined area
    const randomXEnd = Math.random() * areaWidth;
    const randomYEnd = Math.random() * areaHeight;

    circle.style.left = `${randomXStart}px`;
    circle.style.top = `${randomYStart}px`;

    circle.style.animationDuration = `${Math.random() * 9 + 6.5}s`;
    circle.style.setProperty('--delay', Math.random() * 4);

    // Random color between white and grey
    const randomShade = Math.floor(Math.random() * 128); // 0 to 127
    const randomColor = `rgb(${randomShade + 128},${randomShade + 128},${randomShade + 128})`;
    circle.style.backgroundColor = randomColor;

    circle.style.width = `${Math.random() * 7 + 5}px`;
    circle.style.height = circle.style.width;

    // Random X and Y transforms
    circle.style.setProperty('--xStart', `${randomXStart}px`);
    circle.style.setProperty('--yStart', `${randomYStart}px`);
    circle.style.setProperty('--xEnd', `${randomXEnd}px`);
    circle.style.setProperty('--yEnd', `${randomYEnd}px`);

    circleContainer.appendChild(circle);

    // Remove the circle from the DOM after the animation completes
    circle.addEventListener('animationiteration', () => {
        circle.remove();
    });
}

// Generate circles periodically
const circlesPerSecond = 350; // Adjust this value to control the number of circles per second
const interval = 100 / circlesPerSecond;
setInterval(createCircle, interval);
