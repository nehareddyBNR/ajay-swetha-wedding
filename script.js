/* ==========================================
        WEDDING COUNTDOWN
========================================== */

const weddingDate = new Date("July 09, 2026 10:30:00").getTime();

const countdown = () => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if(distance < 0){

        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";

        return;
    }

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor(
        (distance % (1000*60*60*24))
        /(1000*60*60)
    );

    const minutes = Math.floor(
        (distance % (1000*60*60))
        /(1000*60)
    );

    const seconds = Math.floor(
        (distance % (1000*60))
        /1000
    );

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2,"0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2,"0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2,"0");

}

countdown();

setInterval(countdown,1000);


/* ==========================================
        SCROLL REVEAL
========================================== */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".hidden").forEach(el=>{

    observer.observe(el);

});


/* ==========================================
        NAVBAR EFFECT
========================================== */

window.addEventListener("scroll",()=>{

    const nav=document.querySelector(".navbar");

    if(window.scrollY>50){

        nav.style.background="rgba(78,54,41,.98)";

    }

    else{

        nav.style.background="rgba(78,54,41,.94)";

    }

});


/* ==========================================
        IMAGE POPUP
========================================== */

document.querySelectorAll("img").forEach(image=>{

    image.addEventListener("click",()=>{

        const popup=document.createElement("div");

        popup.className="image-popup";

        popup.innerHTML=

        `<img src="${image.src}">`;

        document.body.appendChild(popup);

        popup.onclick=()=>{

            popup.remove();

        }

    });

});


/* ==========================================
        FALLING PETALS
========================================== */

function createPetal(){

    const petal=document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML="🍂";

    petal.style.left=Math.random()*100+"vw";

    petal.style.fontSize=(18+Math.random()*18)+"px";

    petal.style.animationDuration=(8+Math.random()*8)+"s";

    petal.style.opacity=Math.random();

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },16000);

}

setInterval(createPetal,500);


/* ==========================================
        SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))

        .scrollIntoView({

            behavior:"smooth"

        });

    });

});
