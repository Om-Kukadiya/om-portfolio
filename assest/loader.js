document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Simulate a loading process
    setTimeout(() => {
        loader.style.display = 'none';
        content.classList.remove('hidden');
    }, 3000); // Adjust the timeout to match the desired loading time
});
