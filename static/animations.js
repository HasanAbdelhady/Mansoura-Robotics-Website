// ايفينت لما الصفحه تحمل عشان نعمل انيميشن Load
// "On Load Animation" 
document.addEventListener("DOMContentLoaded", function () {

    // انيميشن للناف وايليمنت ال body
    // حاسه حلو سيكا C: - نقدر نعمل اكتر بس ده مؤقت لحد منشوف
    anime.timeline({
        easing: 'easeInOutQuad',
        duration: 1000,
    })
    .add({
        targets: 'body',
        opacity: [0, 1],
        scale: [0.8, 1],
    });

// متغير ل زر تغيير الوضع بين دارك مود ولايت مود

    const darkModeButton = document.getElementById("modeToggle");

// انيميشن لما الماوس يلمس الزر
    darkModeButton.addEventListener("mouseenter", function () {
        anime({
            targets: darkModeButton,
            scale: 1.1,
            duration: 300,
            easing: 'easeInOutQuad',
        });
    });

    darkModeButton.addEventListener("mouseleave", function () {
        // هنا بنرجع حالة الماوس الطبيعيه لما الماوس يخرج عن السكيل
        anime({
            targets: darkModeButton,
            scale: 1,
            duration: 300,
            easing: 'easeInOutQuad',
        });
    });
});
