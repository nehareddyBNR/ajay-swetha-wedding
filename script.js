// ==========================
// WEDDING COUNTDOWN
// ==========================

const weddingDate = new Date("July 09, 2026 10:30:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {

        clearInterval(timer);

        document.querySelector(".countdown").innerHTML = `
            <h2 style="grid-column:1/-1;color:#5a0019;">
                💍 Wedding Day Has Arrived 💍
            </h2>
        `;
    }

}, 1000);


// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(61,0,17,0.98)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.25)";

    } else {

        navbar.style.background =
            "rgba(61,0,17,0.92)";

        navbar.style.boxShadow = "none";
    }

});


// ==========================
// SCROLL REVEAL
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".invitation-card,.countdown-card,.event-card,.gallery-grid img,.venue-section,.thankyou-section"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ==========================
// FLOATING PETALS
// ==========================

for(let i=0;i<25;i++){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.fontSize =
        (15 + Math.random()*15) + "px";

    petal.style.animationDuration =
        (8 + Math.random()*8) + "s";

    petal.style.opacity =
        Math.random();

    document.body.appendChild(petal);
}


// ==========================
// GALLERY POPUP
// ==========================

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const overlay =
        document.createElement("div");

        overlay.classList.add("image-popup");

        overlay.innerHTML = `
            <img src="${img.src}">
        `;

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

});