let lastMoveTime = 0;

document.addEventListener('mousemove', createTrail);

function createTrail(event) {
    const now = Date.now();
    const delay = 100; // Adjust this value to increase/decrease spacing

    if (now - lastMoveTime < delay) {
        return;
    }

    lastMoveTime = now;

    const trailContainer = document.getElementById('trailing-container');

    const img = document.createElement('img');
    img.src = getRandomImage();
    img.className = 'trail-image';
    img.style.left = `${event.clientX}px`;
    img.style.top = `${event.clientY}px`;

    trailContainer.appendChild(img);

    setTimeout(() => {
        img.style.opacity = '0';
        setTimeout(() => {
            trailContainer.removeChild(img);
        }, 1000); // Time for the fade-out transition
    }, 500); // Time to keep the image visible before fading out
}

function getRandomImage() {
    const images = [
        'images/sushi.jpg',
        'images/breakfastBurritos.jpg',
        'images/bulgogi.jpeg',
        'images/porkChops.jpg'
    ];
    return images[Math.floor(Math.random() * images.length)];
}
