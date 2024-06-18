document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("changing-text");
    const texts = ["I am a developer", "I am an engineer", "I am a coder"];
    let index = 0;

    function changeText() {
        textElement.classList.add('fade-out'); // Add fade-out class to start animation
        setTimeout(() => {
            textElement.textContent = texts[index];
            textElement.classList.remove('fade-out'); // Remove fade-out class
            textElement.classList.add('fade-in'); // Add fade-in class to start animation
            index = (index + 1) % texts.length; // Update index
        }, 500); // Match this with the CSS transition duration
    }

    textElement.addEventListener('transitionend', () => {
        if (textElement.classList.contains('fade-in')) {
            setTimeout(() => {
                textElement.classList.remove('fade-in');
            }, 500);
        }
    });

    setInterval(changeText, 3000); // Change text every 3 seconds
});
