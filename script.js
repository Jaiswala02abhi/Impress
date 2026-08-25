/* ==========================================
   Typing Effect
========================================== */

const text = "I Love You ❤️";
const typing = document.getElementById("typing");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

typeEffect();

/* ==========================================
   Days Together Counter
   Change the date below to your anniversary
========================================== */

const startDate = new Date("2024-02-1"); // <-- Change this

function updateCounter() {

    const today = new Date();

    const diff = today - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("daysCounter").innerHTML =
        `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes`;
}

updateCounter();

setInterval(updateCounter, 60000);

/* ==========================================
   Music Play / Pause
========================================== */

// const music = document.getElementById("bgMusic");
// const musicBtn = document.getElementById("musicBtn");

// let isPlaying = false;

// musicBtn.addEventListener("click", () => {

//     if (!isPlaying) {

//         music.play();

//         musicBtn.innerHTML =
//             '<i class="fa-solid fa-pause"></i> Pause Music';

//         isPlaying = true;

//     } else {

//         music.pause();

//         musicBtn.innerHTML =
//             '<i class="fa-solid fa-play"></i> Play Music';

//         isPlaying = false;
//     }

// });

/* ==========================================
   Gallery Popup
========================================== */

const galleryImages = document.querySelectorAll(".gallery img");

const popup = document.getElementById("popup");

const popupImg = document.getElementById("popupImg");

const closePopup = document.getElementById("closePopup");

galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        popup.style.display = "flex";

        popupImg.src = img.src;

    });

});

closePopup.addEventListener("click", () => {

    popup.style.display = "none";

});

popup.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.style.display = "none";

    }

});

/* ==========================================
   Surprise Button
========================================== */

const surpriseBtn = document.getElementById("surpriseBtn");

const surpriseText = document.getElementById("surpriseText");

const messages = [

    "❤️ I Love You Forever ❤️",

    "🌹 You Are My Happiness 🌹",

    "💍 Forever & Always 💍",

    "🥰 You're My Favorite Person 🥰",

    "💕 Every Moment With You Is Special 💕",

    "😘 You Complete My World 😘",

    "🌍 My Home Is Wherever You Are 🌍",

    "❤️ You're My Everything ❤️"

];

surpriseBtn.addEventListener("click", () => {

    const random =
        Math.floor(Math.random() * messages.length);

    surpriseText.innerHTML = messages[random];

    surpriseText.style.animation = "fadeIn 1s";

});

/* ==========================================
   Fade Animation
========================================== */

const style = document.createElement("style");

style.innerHTML = `

@keyframes fadeIn{

0%{
opacity:0;
transform:scale(.8);
}

100%{
opacity:1;
transform:scale(1);
}

}

`;

document.head.appendChild(style);

/* ==========================================
   Auto Slider
========================================== */

const slides = document.querySelector(".slides");

let scrollAmount = 0;

function autoSlide() {

    if (!slides) return;

    scrollAmount += 365;

    if (scrollAmount >= slides.scrollWidth / 2) {
        scrollAmount = 0;
    }

    slides.style.transition = "transform .8s ease";

    slides.style.transform =
        `translateX(-${scrollAmount}px)`;

}

setInterval(autoSlide, 3000);

/* ==========================================
   Floating Hearts Generator
========================================== */

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "absolute";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.top = "-30px";

    heart.style.fontSize =
        Math.random() * 25 + 15 + "px";

    heart.style.animation =
        `fall ${Math.random() * 5 + 5}s linear`;

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 500);

/* ==========================================
   Falling Petals Generator
========================================== */

const petals = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "absolute";

    petal.style.left = Math.random() * 100 + "%";

    petal.style.top = "-30px";

    petal.style.fontSize =
        Math.random() * 18 + 18 + "px";

    petal.style.animation =
        `fallRotate ${Math.random() * 5 + 7}s linear`;

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 12000);

}

setInterval(createPetal, 700);

/* ==========================================
   Dynamic Animations
========================================== */

const animationStyle = document.createElement("style");

animationStyle.innerHTML = `

@keyframes fall{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(110vh);
opacity:0;
}

}

@keyframes fallRotate{

0%{
transform:translateY(0) rotate(0deg);
opacity:1;
}

100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}

}

`;

document.head.appendChild(animationStyle);

/* ==========================================
   Scroll Animation
========================================== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = "all 1s ease";

    observer.observe(section);

});



// Music Autplay
window.addEventListener("load", function () {
    const music = document.getElementById("bgMusic");

    music.volume = 0.5; // Optional

    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // Browser blocked autoplay
            document.addEventListener(
                "click",
                function () {
                    music.play();
                },
                { once: true }
            );
        });
    }
});

/* ==========================================
   Smooth Navbar Highlight
========================================== */

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

