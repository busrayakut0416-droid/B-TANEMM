// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
/* ==========================================
   HENÜZ YAŞANMAMIŞ HİKÂYEMİZ
   ========================================== */


/* ------------------------------------------
   BAŞLANGIÇ TARİHİ
   BURAYA GERÇEK TARİHİ YAZACAĞIZ
   ------------------------------------------ */

const START_DATE = new Date("2022-01-01T00:00:00");


/* ------------------------------------------
   ELEMENTLER
   ------------------------------------------ */

const music =
    document.getElementById("backgroundMusic");

const startButton =
    document.getElementById("startBtn");

const replayButton =
    document.getElementById("replayBtn");


/* ------------------------------------------
   BAŞLAT
   ------------------------------------------ */

startButton.addEventListener("click", function () {

    music.volume = 0.45;

    music.play().catch(function () {
        console.log("Müzik tarayıcı tarafından engellendi.");
    });


    createHearts(18);


    document.querySelector(".intro-scene")
        .scrollIntoView({
            behavior: "smooth"
        });


    setTimeout(function () {

        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });

    }, 700);

});


/* ------------------------------------------
   TEKRAR OYNAT
   ------------------------------------------ */

replayButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    music.currentTime = 0;

    music.play().catch(function () { });

});


/* ------------------------------------------
   KALP OLUŞTURMA
   ------------------------------------------ */

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");

        heart.className = "love-heart";

        heart.innerHTML =
            Math.random() > 0.5
                ? "❤️"
                : "♥";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (12 + Math.random() * 18) + "px";

        heart.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        heart.style.animationDelay =
            Math.random() * 2 + "s";


        document.body.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 10000);

    }

}


/* ------------------------------------------
   ARADA KÜÇÜK KALPLER
   ------------------------------------------ */

setInterval(function () {

    if (
        document.visibilityState ===
        "visible"
    ) {

        createHearts(1);

    }

}, 5000);


/* ------------------------------------------
   SAYAÇ
   ------------------------------------------ */

function updateCounter() {

    const now =
        new Date();

    let difference =
        now - START_DATE;


    if (difference < 0) {
        difference = 0;
    }


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    document.getElementById("days")
        .textContent =
        String(days)
            .padStart(4, "0");


    document.getElementById("hours")
        .textContent =
        String(hours)
            .padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes)
            .padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds)
            .padStart(2, "0");

}


updateCounter();

setInterval(
    updateCounter,
    1000
);


/* ------------------------------------------
   SAHNELER GÖRÜNÜR OLUNCA AKTİFLEŞSİN
   ------------------------------------------ */

const scenes =
    document.querySelectorAll(".scene");


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("active");

                }

            });

        },
        {
            threshold: 0.35
        }
    );


scenes.forEach(function (scene) {

    observer.observe(scene);

});


/* ------------------------------------------
   SAYFA AÇILDIĞINDA BAŞA DÖN
   ------------------------------------------ */

window.addEventListener(
    "load",
    function () {

        window.scrollTo(0, 0);

    }
);
// Write your JavaScript code.
