
document.addEventListener('DOMContentLoaded', function() {
    // Get all the anchor tags with class 'scroll-button'
    var scrollButtons = document.querySelectorAll('.scroll-button');

    // Loop through each anchor tag and add click event listener
    scrollButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Get the target section's id from href attribute
            var targetId = button.getAttribute('href');

            // Get the element you want to scroll to
            var scrollToElement = document.querySelector(targetId);

            if (scrollToElement) {
                scrollToElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
