document.addEventListener("DOMContentLoaded", function () {
    const modeIcon = document.getElementById("modeIcon");
    const checkBtn = document.getElementById("check");
    const header = document.querySelector("header");
    const navbarBackground = document.getElementById("navbar-background");

    function updateModeAndButton(isNightMode) {
        if (isNightMode) {
            document.body.classList.add("night-mode");
            modeIcon.className = "fas fa-sun";
            localStorage.setItem("mode", "night");
        } else {
            document.body.classList.remove("night-mode");
            modeIcon.className = "fas fa-moon";
            localStorage.setItem("mode", "light");
        }
    }

    window.toggleMode = function () {
        const isNightMode = !document.body.classList.contains("night-mode");
        updateModeAndButton(isNightMode);
    };

    const savedMode = localStorage.getItem("mode");
    updateModeAndButton(savedMode === "night");

    checkBtn.addEventListener("change", function () {
        if (this.checked) {
            header.classList.add("navbar-visible");
            navbarBackground.style.display = "block";
            // Change the icon to X when the navbar is open
            document.querySelector(".checkbtn i").className = "fas fa-times";
        } else {
            header.classList.remove("navbar-visible");
            navbarBackground.style.display = "none";
            // Change the icon back to bars when the navbar is closed
            document.querySelector(".checkbtn i").className = "fas fa-bars";
        }
    });

    document.addEventListener("click", function (event) {
        if (
            event.target !== checkBtn &&
            !header.contains(event.target) &&
            !document.querySelector("nav").contains(event.target)
        ) {
            checkBtn.checked = false;
            header.classList.remove("navbar-visible");
            navbarBackground.style.display = "none";
            // Change the icon back to bars when the navbar is closed
            document.querySelector(".checkbtn i").className = "fas fa-bars";
        }
    });
});
