document.addEventListener("DOMContentLoaded", function () {
    // On Load Animation
    anime.timeline({
        easing: 'easeInOutQuad',
        duration: 1000,
    })
    .add({
        targets: 'body',
        opacity: [0, 1],
        scale: [0.8, 1],
    });

    // Dark Mode Toggle Animation
    const darkModeButton = document.getElementById("modeToggle");

    darkModeButton.addEventListener("mouseenter", function () {
        anime({
            targets: darkModeButton,
            scale: 1.1,
            duration: 300,
            easing: 'easeInOutQuad',
        });
    });

    darkModeButton.addEventListener("mouseleave", function () {
        anime({
            targets: darkModeButton,
            scale: 1,
            duration: 300,
            easing: 'easeInOutQuad',
        });
    });

    // Dark Mode Toggle Functionality
    let darkMode = false;

    darkModeButton.addEventListener("click", function () {
        darkMode = !darkMode;
        toggleDarkMode();
    });

    function toggleDarkMode() {
        anime({
            targets: 'body',
            backgroundColor: darkMode ? '#1a1a1a' : '#f0f0f0',
            color: darkMode ? '#fff' : '#fff',
            duration: 500,
            easing: 'easeInOutQuad',
        });

        anime({
            targets: darkModeButton,
            backgroundColor: darkMode ? '#fff' : '#000',
            color: darkMode ? '#000' : '#fff',
            duration: 500,
            easing: 'easeInOutQuad',
        });
    }
});
