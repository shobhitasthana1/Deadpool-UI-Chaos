
/* <=============================== Navabar ======================================= > */

gsap.to('nav',{
    y : '100px',
    duration : 1
})


/* <=============================== Herobox ======================================= > */

gsap.to('.top-bar',{
    top : '5%',
    opacity : 1,
    duration : 1
})

var HerosNames = document.querySelectorAll('.heros-names'); 

HerosNames.forEach(function(Names){
    var HeroNameText = Names.textContent.split('')
    var storage = ''
    HeroNameText.forEach(function(NameCharacter){
        storage += `<span>${NameCharacter}</span>`
    })
    Names.innerHTML = storage
})

gsap.to('.herobox-content-container .heros-names span',{
    x : '-80px',
    transform : 'rotateY(0deg)',
    duration : 1,
    opacity : 1,
    stagger : 0.04
})

gsap.to('.grid',{
    top : '8%',
    opacity : 1,
    duration : 1
})

var heroMainHeading = document.querySelector('.herobox-mainheading')
var heroMainHeadingText = heroMainHeading.textContent.split('')

var letterStorage = ''
heroMainHeadingText.forEach(function(letters){
    letterStorage += `<span>${letters}</span>`
})
heroMainHeading.innerHTML = letterStorage

gsap.to('.herobox h1.herobox-mainheading span',{
    x : '-150px',
    transform : 'rotateY(0deg)',
    duration : 1.5,
    opacity : 1,
    stagger : 0.04,
})

gsap.to('.red-circle',{
    scale : 1,
    opacity: 1,
    duration : 1
})

gsap.to('.character',{
    bottom : '0%',
    scale : 1,
    duration : 1
})

gsap.to('.herobox .hero-slider',{
    bottom : '30%',
    opacity : 1,
    duration : 1
})
gsap.to('.slider-container',{
    left : '-600px',
    duration : 10,
    repeat : -1,
    ease: 'none'
})

gsap.to('.hero-footer',{
    bottom : '0%',
    opacity : 1,
    duration : 1,
    scrollTrigger :{
        trigger : '.hero-footer',
        start : 'top 90%'
    }
})


/* <=============================== Section 1 ======================================= > */

gsap.to('.marvel-studio',{
    top : '8%',
    duration : 1,
    opacity : 1,
    scrollTrigger :{
        trigger : '.section-1',
        start : 'top 80%'
    }
})

gsap.to('.date-status',{
    top : '8%',
    duration : 1,
    opacity : 1,
    filter : 'blur(0px)',
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 80%'
    }
})

gsap.to('.section1-right-top-description',{
    top : '8%',
    duration : 1,
    opacity : 1,
    filter : 'blur(0px)',
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 80%'
    }
})

gsap.to('.card-container',{
    top : '50%',
    transform : 'translate(-50%, -50%)',
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.card-container .card:nth-child(1)',{
    transform : 'rotate(5deg)',
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.card-container .card:nth-child(2)',{
    transform : 'rotate(15deg)',
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.card-container .card:nth-child(3)',{
    transform : 'rotate(-15deg)',
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.rating',{
    left : '60px',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.socials',{
    right : '60px',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})
gsap.to('.slider-left-indicator',{
    left : '0px',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.slider-right-indicator',{
    right : '0px',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.left-section1-content',{
    top : '52%',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 20%'
    }
})

var sectionOneFooterHeadings = document.querySelectorAll('.section-1FooterHeading'); 

sectionOneFooterHeadings.forEach(function(sectionOneFooterElement){
    var sectionOneFooterElementText = sectionOneFooterElement.textContent.split('')
    var sectionOneFooterStorage = ''
    sectionOneFooterElementText.forEach(function(sectionOneFooterElementLetters){
        sectionOneFooterStorage += `<span>${sectionOneFooterElementLetters}</span>`
    })
    sectionOneFooterElement.innerHTML = sectionOneFooterStorage
})


gsap.to('.section-1 .section-1FooterHeading span',{
    left : '0px',
    transform : 'rotateY(0deg)',
    duration : 1,
    opacity : 1,
    scrollTrigger :{
        trigger : '.section-1',
        start : 'top 10%'
    },
    stagger : 0.04
})

gsap.to('.section-1 p.section-1footer-date',{
    left : '60px',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 10%'
    }
})


/* <=============================== Section 2 ======================================= > */

gsap.to('.section2-counting',{
    top : '5%',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 80%'
    }
})

gsap.to('.section-2 h1.section-2-mainHeading',{
    scale : 1,
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 80%'
    }
})

gsap.to('.left-users',{
    left : '0px',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 80%'
    }
})

gsap.to('.mid-arrows',{
    scale : 1,
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 70%'
    }
})


gsap.to('.right-cd',{
    right : '0px',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 80%'
    }
})
gsap.to('.left-section2-content',{
    scale : 1,
    filter : 'blur(0px)',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 40%'
    }
})

gsap.to('.card-img',{
    top : '80%',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : '20% 40%'
    }
})

gsap.to('.left-footer-image',{
    top : '0px',
    duration : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 40%'
    }
})

gsap.to('.right-footer-image',{
    top : '0px',
    duration : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 40%'
    }
})

gsap.to('.deadpool-character',{
    bottom : '0%',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : '20% 20%'
    }
})


gsap.to('.deadpool-character',{
    top : '146.5%',
    left:'35%',
    scale : 1.8,
    duration : 1,
    scrollTrigger : {
        trigger : '.footer',
        start : 'top 50%',
        end : 'bottom 100%',
        scrub : 1 
    },
})

gsap.to('.footer-content',{
    scale : 1,
    opacity : 1,
    filter : 'blur(0px)',
    duration : 1,
    scrollTrigger : {
        trigger : '.footer',
        start : 'top 50%',
        end : 'bottom 100%',
    },
})


/* <=============================== Mouse Move Parallax Effect (Only Deadpool) ======================================= > */

// Herobox container ko select karte hain
var heroboxContainer = document.querySelector('.herobox');

heroboxContainer.addEventListener("mousemove", function(dets) {
    
    // Mouse ki position screen ke center se calculate karte hain
    var moveX = (dets.x - window.innerWidth / 2);
    var moveY = (dets.y - window.innerHeight / 2);

    // Sirf Deadpool Character (.character) ko move kara rahe hain
    // 0.03 multiplier hai. Agar aur kam hilana ho to 0.02 kar dena.
    gsap.to('.character', {
        x: moveX * 0.03, 
        y: moveY * 0.03,
        duration: 0.5, // Smoothness ke liye
        ease: "power2.out"
    });
});

// Jab mouse herobox se bahar nikle to Deadpool wapas apni jagah aa jaye (Optional, acha lagta hai)
heroboxContainer.addEventListener("mouseleave", function() {
    gsap.to('.character', {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

/* <=============================== Mouse Move Parallax Effect (Only Deadpool) ======================================= > */

// 1. Character Movement (Parallax) - Sirf Image Hilegi
var heroboxContainer = document.querySelector('.herobox');

heroboxContainer.addEventListener("mousemove", function(dets) {
    var moveX = (dets.x - window.innerWidth / 2);
    var moveY = (dets.y - window.innerHeight / 2);

    gsap.to('.character', {
        x: moveX * 0.03, 
        y: moveY * 0.03,
        duration: 0.5,
        ease: "power2.out"
    });
});

heroboxContainer.addEventListener("mouseleave", function() {
    gsap.to('.character', {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});


/* <=============================== 2. Text Hover Crazy Glitch Effect (FIXED) ======================================= > */

var mainHeading = document.querySelector('.herobox-mainheading');

mainHeading.addEventListener('mouseenter', function() {
    gsap.to('.herobox-mainheading span', {
        // Yahan MAGIC hai: Hum -150 ke aas paas vibrate karayenge
        x: "random(-160, -140)", // -150 se thoda left-right
        y: "random(-10, 10)",    // Upar-neeche vibration
        rotation: "random(-10, 10)",
        color: "#ad1222",
        scale: 1.1,
        duration: 0.08,
        stagger: 0.02,
        repeat: -1,
        yoyo: true,
        ease: "rough"
    });
});

mainHeading.addEventListener('mouseleave', function() {
    // Mouse hatne par wapas -150px par set karna zaroori hai
    gsap.to('.herobox-mainheading span', {
        x: -150, // <--- Ye Bahut Zaroori hai (Warna text wapas nahi aayega)
        y: 0,
        rotation: 0,
        color: "white",
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        overwrite: true
    });
});


/* <=============================== Hero Section Star Background Effect ======================================= > */

function createStars() {
    const herobox = document.querySelector('.herobox');
    // Kitne stars chahiye? (Desktop pe 150, mobile pe kam kar sakte ho agar chaho to)
    const starCount = window.innerWidth < 768 ? 80 : 150; 

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Random Position (0% se 100% ke beech kahin bhi)
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        // Random Animation Speed aur Delay taaki sab ek sath blink na karein
        // Duration: 2 se 5 second ke beech random speed
        const duration = Math.random() * 3 + 2; 
        // Delay: 0 se 5 second ke beech random shuruwat
        const delay = Math.random() * 5; 

        // Styles apply karna
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        
        // CSS variables set kar rahe hain taaki animation use kar sake
        star.style.setProperty('--star-duration', `${duration}s`);
        star.style.setProperty('--star-delay', `${delay}s`);

        // Herobox mein star ko add karna
        herobox.appendChild(star);
    }
}

// Function ko run karo jab page load ho
createStars();


/* <=============================== Actor Names Crazy Radioactive Effect ======================================= > */

// 1. Saare Actor ke naamon ko select karte hain
var actorNames = document.querySelectorAll('.heros-names');

actorNames.forEach(function(nameBlock) {
    
    // Har naam ke andar ke letters (spans) ko dhoondte hain
    // (Tumhare purane code ne already inhe spans mein tod diya hai, so ye work karega)
    var letters = nameBlock.querySelectorAll('span');

    // 2. Mouse enter hone par "Crazy Radioactive" Animation
    nameBlock.addEventListener('mouseenter', function() {
        gsap.to(letters, {
            y: "random(-10, 10)",        // Upar-Neeche wild movement
            x: "random(-5, 5)",          // Left-Right thoda kam
            rotate: "random(-20, 20)",   // Letters ghumenge
            skewX: "random(-20, 20)",    // Letters tedhe (skew) ho jayenge <--- NEW
            scale: "random(0.8, 1.4)",   // Kabhi chota kabhi bada
            opacity: 1,
            
            // Magic Function: Har letter ka color random change hoga (Red, White, Yellow)
            color: function() {
                var colors = ["#ad1222", "#ffffff", "#f5c518"]; // Deadpool Red, White, Wolverine Yellow
                return colors[Math.floor(Math.random() * colors.length)];
            },
            
            textShadow: "0px 0px 15px rgba(173, 18, 34, 0.8)", // Peeche Red Glow aayega
            duration: 0.1,               // Bahut tez (Electric current jaisa)
            stagger: {
                amount: 0.1,
                from: "random"           // Kahin se bhi shuru ho
            },
            repeat: -1,                  // Chalta rahega jab tak mouse upar hai
            yoyo: true                   // Wapas aayega
        });
    });

    // 3. Mouse hatne par wapas Shareef (Normal) ban jaye
    nameBlock.addEventListener('mouseleave', function() {
        gsap.to(letters, {
            y: 0,
            x: 0,
            rotate: 0,
            skewX: 0,
            scale: 1,
            color: "white",             // Wapas safed
            textShadow: "none",         // Glow khatam
            duration: 0.4,
            stagger: 0.05,              // Line se wapas set ho
            ease: "power2.out",
            overwrite: true             // Purana crazy animation rok do
        });
    });
});

/* <=============================== The "Cursed" Deadpool Navbar Effect ======================================= > */

// 1. Navbar Links select karte hain
var navLinks = document.querySelectorAll('nav ul li a');
var specialChars = "!@#$%^&*()_+-=[]{}|;':,./<>?"; // Random symbols

navLinks.forEach(function(link) {
    
    // Original text ko save kar lete hain taaki wapas la sakein
    var originalText = link.textContent;
    
    link.addEventListener('mouseenter', function() {
        
        // 1. GSAP se Text Color aur Size change
        gsap.to(link, {
            color: "#ad1222",      // Blood Red
            scale: 1.2,            // Thoda bada
            fontWeight: "bold",
            textShadow: "0px 0px 10px #ad1222", // Red Glow
            duration: 0.2
        });

        // 2. "Hacker/Comic Scramble" Logic - Text ko random symbols banana
        var iterations = 0;
        var interval = setInterval(function() {
            link.innerText = link.innerText
                .split("")
                .map(function(letter, index) {
                    // Agar iteration complete ho gayi, to wapas original letter dikhao
                    // Warna random symbol dikhao
                    if(index < iterations) {
                        return originalText[index]; 
                    }
                    return specialChars[Math.floor(Math.random() * 28)];
                })
                .join("");
            
            // Loop ko roknay ki condition (sirf thodi der glitch karega)
            if(iterations >= originalText.length) { 
                clearInterval(interval);
                link.innerText = originalText; // Safety ke liye wapas set kar do
            }
            iterations += 1 / 3; 
        }, 30); // Har 30ms mein text change hoga

        // 3. Shake/Jitter Effect
        gsap.to(link, {
            x: "random(-5, 5)",
            y: "random(-2, 2)",
            rotate: "random(-5, 5)",
            duration: 0.1,
            repeat: -1,
            yoyo: true,
            ease: "rough"
        });
    });

    link.addEventListener('mouseleave', function() {
        // Wapas Normal
        gsap.to(link, {
            color: "white",
            scale: 1,
            textShadow: "none",
            x: 0, 
            y: 0,
            rotate: 0,
            fontWeight: "normal",
            duration: 0.3
        });
        
        // Text ko wapas original kar do turant
        link.innerText = originalText;
    });
});


/* <=============================== Story Paragraph "Classified Reveal" Effect ======================================= > */

var storyText = document.querySelector('.left-hero-content p');

storyText.addEventListener('mouseenter', function() {
    
    // 1. Text Expansion & Brightness (Dhamaka)
    gsap.to(storyText, {
        opacity: 1,                 // Bilkul saaf dikhega
        color: "#ffffff",           // Pure White
        letterSpacing: "2px",       // Letters khul jayenge (Expansion)
        fontWeight: "bold",         // Text mota ho jayega
        textShadow: "0px 0px 8px #ad1222", // Peeche Red Glow
        duration: 0.3,
        ease: "back.out(2)"         // Bouncy effect (khatak se khulega)
    });

    // 2. Nervous Shake (Panic Mode)
    gsap.to(storyText, {
        x: "random(-3, 3)",         // Thoda left-right hilega
        y: "random(-1, 1)",         // Thoda upar-neeche
        skewX: "random(-10, 10)",   // Text tedha-medha hoga (Distortion)
        duration: 0.05,             // Bahut fast vibration
        repeat: -1,                 // Jab tak mouse hai
        yoyo: true,                 // Wapas aayega
        ease: "rough"
    });
});

storyText.addEventListener('mouseleave', function() {
    
    // Wapas Normal (Chhup jao)
    gsap.to(storyText, {
        opacity: 0.3,               // Wapas dhundhla
        color: "white",
        letterSpacing: "normal",    // Spacing normal
        fontWeight: "100",          // Patla font
        textShadow: "none",         // Glow khatam
        x: 0,
        y: 0,
        skewX: 0,                   // Seedha ho jaye
        duration: 0.5,
        ease: "power2.out",
        overwrite: true
    });
});


/* <=============================== "Book Now" Button Blast Animation ======================================= > */

var bookBtn = document.querySelector('.right-hero-content a');

bookBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Link ko rok rahe hain taaki animation dikhe

    // 1. Screen Flash (Safed Jhatka)
    var flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = 0;
    flash.style.left = 0;
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.backgroundColor = 'white';
    flash.style.zIndex = 9999;
    flash.style.opacity = 0;
    document.body.appendChild(flash);

    // Flash Animation
    gsap.to(flash, {
        opacity: 0.8,
        duration: 0.1,
        onComplete: () => {
            gsap.to(flash, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => flash.remove()
            });
        }
    });

    // 2. Button Shake & Shrink (Tayyari)
    gsap.to(bookBtn, {
        scale: 0.9,
        x: "random(-10, 10)",
        y: "random(-10, 10)",
        rotation: "random(-10, 10)",
        duration: 0.1,
        yoyo: true,
        repeat: 5,
        onComplete: function() {
            
            // 3. Blast Particles (Button Phat Gaya)
            createBlast(e.clientX, e.clientY);
            
            // Button Gayab
            gsap.to(bookBtn, {
                scale: 0,
                opacity: 0,
                duration: 0.1
            });

            // 4. Wapas aana (Reset) - 2 second baad
            setTimeout(() => {
                gsap.to(bookBtn, {
                    scale: 1,
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotation: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)"
                });
            }, 2000);
        }
    });
});

// Particle Blast Function
function createBlast(x, y) {
    for (let i = 0; i < 30; i++) { // 30 Tukde
        let particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 10 + 5 + 'px'; // Random size
        particle.style.height = Math.random() * 10 + 5 + 'px';
        particle.style.backgroundColor = Math.random() > 0.5 ? '#ad1222' : '#000'; // Red & Black
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.borderRadius = '50%';
        particle.style.zIndex = 999;
        document.body.appendChild(particle);

        // Particles udana
        gsap.to(particle, {
            x: (Math.random() - 0.5) * 400, // Dur tak jayenge
            y: (Math.random() - 0.5) * 400,
            rotation: Math.random() * 360,
            opacity: 0,
            scale: 0,
            duration: Math.random() * 1 + 0.5,
            ease: "power2.out",
            onComplete: () => particle.remove()
        });
    }
}

/* <=============================== Director Names "Ego Blast" Animation ======================================= > */

var directorNames = document.querySelectorAll('.directors-container h1');

directorNames.forEach(function(nameTag) {
    
    // 1. Text ko Todna (Split text into spans for animation)
    var textContent = nameTag.textContent;
    var splittedText = textContent.split("").map(char => `<span style="display:inline-block">${char}</span>`).join("");
    nameTag.innerHTML = splittedText;

    var letterSpans = nameTag.querySelectorAll('span');

    nameTag.addEventListener('mouseenter', function() {
        
        // Step A: Baaki sabko dhundhla karo (Focus Effect)
        gsap.to(directorNames, {
            opacity: 0.1,
            filter: "blur(4px)",
            duration: 0.2
        });
        // Jise hover kiya wo saaf dikhe
        gsap.to(nameTag, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.1
        });

        // Step B: The "BLAST" (Letters udd jayenge)
        gsap.to(letterSpans, {
            x: "random(-60, 60)",      // Left-right phatenge
            y: "random(-60, 60)",      // Upar-neeche phatenge
            rotation: "random(-180, 180)", // Gol ghumenge
            opacity: 0,                // Gayab ho jayenge
            scale: 0.5,
            duration: 0.1,             // Bahut fast blast
            ease: "power1.out",
            onComplete: function() {
                
                // Step C: The "SNAP BACK" (Wapas judna with Style)
                gsap.to(letterSpans, {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    opacity: 1,
                    scale: 1.5,             // Size Bada (Ego boost)
                    color: "#f5c518",       // Hollywood Gold Color
                    textShadow: "0px 0px 20px #f5c518", // Gold Glow
                    fontWeight: "bold",
                    duration: 0.4,
                    ease: "elastic.out(1, 0.4)" // Bouncy effect
                });
            }
        });
    });

    nameTag.addEventListener('mouseleave', function() {
        
        // Sab wapas Normal
        gsap.to(directorNames, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.3
        });

        gsap.to(letterSpans, {
            scale: 1,
            color: "black",          // Wapas Black
            textShadow: "none",
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});


/* <=============================== Section 2 Main Heading "Screaming/Distortion" Effect ======================================= > */

var section2Heading = document.querySelector('.section-2-mainHeading');

// 1. Text ko Todna (Split text into spans)
var s2Text = section2Heading.textContent;
var s2Split = s2Text.split("").map(char => {
    // Space ko maintain rakhna zaroori hai
    return char === " " ? "&nbsp;" : `<span style="display:inline-block">${char}</span>`;
}).join("");

section2Heading.innerHTML = s2Split;

var s2Letters = section2Heading.querySelectorAll('span');

section2Heading.addEventListener('mouseenter', function() {
    
    // THE "SCREAM" EFFECT
    gsap.to(s2Letters, {
        scaleY: 2.5,                // Text lamba khich jayega (Stretch)
        scaleX: 0.7,                // Text patla ho jayega (Compressed)
        y: "random(-10, 10)",       // Upar-Neeche hilega
        color: "#ad1222",           // Deadpool Red
        filter: "blur(2px)",        // Motion Blur (Tez movement feel)
        textShadow: "0px 10px 20px rgba(173, 18, 34, 0.8)", // Khooni Shadow
        skewX: "random(-20, 20)",   // Tedha-Medha (Distortion)
        
        duration: 0.2,
        stagger: {
            amount: 0.2,            // Wave ki tarah effect jayega
            from: "center"          // Beech se shuru hoga
        },
        ease: "power2.out"
    });
});

section2Heading.addEventListener('mouseleave', function() {
    
    // Wapas Normal (Snap Back)
    gsap.to(s2Letters, {
        scaleY: 1,                  // Normal Height
        scaleX: 1,                  // Normal Width
        y: 0,
        color: "black",             // Wapas Black
        filter: "blur(0px)",        // Blur Khatam
        textShadow: "none",
        skewX: 0,
        
        duration: 0.5,
        ease: "elastic.out(1, 0.3)", // Bouncy effect wapas aate waqt
        stagger: 0.02
    });
});


/* <=============================== "Premiering" Zero Gravity Floating Effect ======================================= > */

// 1. Target Element ko dhoondte hain
var allContentBlocks = document.querySelectorAll('.left-section2-content');
var gravityBlock = null;

allContentBlocks.forEach(function(block) {
    if (block.innerText.includes("PREMIERING")) {
        gravityBlock = block;
    }
});

if (gravityBlock) {
    
    // 2. Text ko "WORDS" mein todna hai (Letters mein nahi, Words mein taaki padh sakein)
    var contentP = gravityBlock.querySelector('p');
    var originalTextContent = contentP.innerText;
    
    // Words mein split karke span mein wrap kar rahe hain
    var words = originalTextContent.split(" ").map(word => {
        return `<span style="display:inline-block; margin-right: 5px;">${word}</span>`;
    }).join("");
    
    contentP.innerHTML = words;
    
    var wordSpans = contentP.querySelectorAll('span');

    // 3. Hover Effect - Zero Gravity
    gravityBlock.addEventListener('mouseenter', function() {
        
        gsap.to(wordSpans, {
            x: "random(-40, 40)",       // Left-Right random udega
            y: "random(-30, 30)",       // Upar-Neeche random udega
            rotation: "random(-20, 20)",// Thoda sa ghumega
            scale: 1.2,                 // Thoda bada hoga
            color: "#ad1222",           // Deadpool Red
            textShadow: "0px 10px 10px rgba(0,0,0,0.5)", // Shadow aayegi (Depth feel hoga)
            opacity: 1,
            
            duration: 2,                // Slow motion feel (2 second)
            ease: "power2.out",         // Smooth start
            stagger: {
                amount: 0.5,            // Ek-ek karke nahi, bheed mein udenge
                from: "random"
            }
        });
    });

    // 4. Mouse Leave - Magnetic Snap Back
    gravityBlock.addEventListener('mouseleave', function() {
        
        gsap.to(wordSpans, {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            color: "black",             // Wapas Black
            textShadow: "none",
            opacity: 1,
            
            duration: 0.5,              // Wapas jaldi aayenge
            ease: "back.out(1.7)",      // Thoda bounce karke judenge
            stagger: 0.02
        });
    });
}

/* <=============================== "X-MEN" Wolverine Slash Effect ======================================= > */

// 1. Target Block ko dhoondte hain (jisme X-MEN likha hai)
var allContentBlocks = document.querySelectorAll('.left-section2-content');
var xMenBlock = null;

allContentBlocks.forEach(function(block) {
    if (block.innerText.includes("X-MEN")) {
        xMenBlock = block;
    }
});

if (xMenBlock) {
    var xMenHeading = xMenBlock.querySelector('h1');
    var xMenText = xMenBlock.querySelector('p');

    // 2. Hover Event - The CLAW SLASH
    xMenBlock.addEventListener('mouseenter', function() {
        
        // A. Heading (X-MEN) turns into Classic Wolverine Colors
        gsap.to(xMenHeading, {
            color: "#f5c518",          // Wolverine Yellow
            textShadow: "4px 4px 0px #0000ff", // X-Men Blue Stroke
            scale: 1.5,                // Bada hoga
            rotation: 10,              // Thoda tedha
            duration: 0.2,
            ease: "back.out(1.7)"
        });

        // B. Paragraph gets "Slashed" and Bleeds
        gsap.to(xMenText, {
            color: "#ad1222",          // Blood Red
            skewX: -30,                // Zor se jhukega (Slash effect)
            x: 20,                     // Thoda side mein shift
            filter: "blur(1px)",       // Impact se dhundhla
            textShadow: "0px 20px 10px rgba(173, 18, 34, 0.6)", // Khoon tapak raha hai (Drip shadow)
            duration: 0.1,             // Instant hit
            ease: "power4.out"
        });

        // C. Impact Shake (Pura box hilega)
        gsap.to(xMenBlock, {
            x: "random(-5, 5)",
            y: "random(-5, 5)",
            duration: 0.05,
            repeat: 5,
            yoyo: true
        });
    });

    // 3. Mouse Leave - The HEALING FACTOR
    xMenBlock.addEventListener('mouseleave', function() {
        
        // Heading Normal
        gsap.to(xMenHeading, {
            color: "black",
            textShadow: "none",
            scale: 1,
            rotation: 0,
            duration: 0.5
        });

        // Text "Heals" slowly (Wapas jud raha hai)
        gsap.to(xMenText, {
            color: "black",
            skewX: 0,
            x: 0,
            filter: "blur(0px)",
            textShadow: "none",
            duration: 1.5,             // Dheere-dheere theek hoga (Healing factor)
            ease: "elastic.out(1, 0.3)"
        });
    });
}

/* <=============================== "Release Date" Time Travel Slot Machine Effect ======================================= > */

// 1. Target Element
var releaseText = document.querySelector('.left-section1-content p');

// 2. Text ko Words mein todna (Words mein todne se animation heavy/impactful lagta hai)
var releaseContent = releaseText.innerText;
var releaseSplit = releaseContent.split(" ").map(word => {
    return `<span style="display:inline-block; margin-right: 4px;">${word}</span>`;
}).join("");

releaseText.innerHTML = releaseSplit;

var releaseWords = releaseText.querySelectorAll('span');

// 3. Hover Event - The Slot Machine Roll
releaseText.addEventListener('mouseenter', function() {
    
    // Step A: Words Upar ki taraf gayab honge (Fast)
    gsap.to(releaseWords, {
        y: -30,                 // Upar gaye
        opacity: 0,             // Gayab
        duration: 0.1,
        stagger: 0.01,          // Ek ke baad ek (Wave)
        ease: "power1.in",
        onComplete: function() {
            
            // Step B: Neeche set karo wapas aane ke liye
            gsap.set(releaseWords, { y: 30, color: "#a50b5e" }); // Purple Color (Phase 5)
            
            // Step C: Neeche se wapas aao (Impact ke sath)
            gsap.to(releaseWords, {
                y: 0,
                opacity: 1,
                color: "#ad1222",       // Final Deadpool Red
                fontWeight: "bold",     // Thoda mota
                duration: 0.4,
                stagger: 0.02,          // Rolling effect
                ease: "back.out(1.7)"   // Thoda bounce karega girne par
            });
        }
    });
});

releaseText.addEventListener('mouseleave', function() {
    
    // Wapas Normal Black
    gsap.to(releaseWords, {
        y: 0,
        color: "black",
        fontWeight: "normal",
        duration: 0.5,
        stagger: 0.01,
        ease: "power2.out"
    });
});


/* <=============================== "GLITCH-GANG" Cute & Crazy Jelly Effect ======================================= > */

// 1. Teeno GLITCH-GANG layers ko select karte hain
var glitchLayers = document.querySelectorAll('.section-1footer-heading3');

// Container (Agar parent mil jaye toh better, nahi toh direct layers pe lagayenge)
// Hum maan ke chal rahe hain ye teeno ek ke upar ek stacked hain (CSS positioning se)

glitchLayers.forEach(function(layer, index) {
    
    // Har layer ka animation thoda alag hoga
    layer.addEventListener('mouseenter', function() {
        
        // Sabko ek saath trigger karne ke liye loop
        glitchLayers.forEach((l, i) => {
            
            // Step 1: Colors & Position Split (The Crazy Part)
            let xMove = 0;
            let yMove = 0;
            let color = "white";
            let rotate = 0;

            if(i === 0) { // Pehla Text (Cyan - Left)
                xMove = -15; 
                yMove = -10;
                color = "#00ffff"; // Cyan
                rotate = -10;
            } 
            else if(i === 1) { // Dusra Text (Magenta - Right)
                xMove = 15; 
                yMove = -5;
                color = "#ff00ff"; // Magenta
                rotate = 10;
            } 
            else { // Teesra Text (Yellow - Bottom)
                xMove = 0; 
                yMove = 10;
                color = "#ffff00"; // Yellow
                rotate = 5;
            }

            // Step 2: The "Cute" Jelly Animation
            gsap.to(l, {
                x: xMove,
                y: yMove,
                rotation: rotate,
                color: color,
                scaleX: 1.2,          // Thoda chauda (Stretch)
                scaleY: 0.8,          // Thoda pichka hua (Squash)
                
                duration: 0.4,
                ease: "elastic.out(1.5, 0.4)", // BOING!! (Jelly bounce)
            });

            // Step 3: Constant Wiggle (Dance)
            gsap.to(l, {
                rotation: rotate * -1, // Ulta ghumega
                yoyo: true,
                repeat: -1,
                duration: 0.2,
                delay: 0.4,           // Bounce ke baad shuru hoga
                ease: "sine.inOut"
            });
        });
    });

    // Reset (Mouse hatne par)
    layer.addEventListener('mouseleave', function() {
        
        glitchLayers.forEach((l) => {
            gsap.to(l, {
                x: 0,
                y: 0,
                rotation: 0,
                color: "black",       // Wapas Black (ya jo original tha)
                scaleX: 1,
                scaleY: 1,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)", // Wapas chipak jayenge
                overwrite: true       // Wiggle band karo
            });
        });
    });
});

/* <=============================== Footer "DEADPOOL III" System Meltdown Effect ======================================= > */

// 1. Footer Heading ko select karo
var footerTitle = document.querySelector('.footer-content h1');
var footerText = footerTitle.innerText;

// 2. Letters mein todna (Split Text)
var footerSplit = footerText.split("").map(char => {
    // Space ko maintain rakhna zaroori hai
    return char === " " ? "&nbsp;" : `<span style="display:inline-block">${char}</span>`;
}).join("");
footerTitle.innerHTML = footerSplit;

var footerLetters = footerTitle.querySelectorAll('span');

// 3. Hover Event - High Voltage Chaos
footerTitle.addEventListener('mouseenter', function() {

    // A. Color War (Red vs Yellow Strobing)
    gsap.to(footerLetters, {
        color: function(i) {
            // Even numbers Red, Odd numbers Yellow (Deadpool vs Wolverine)
            return i % 2 === 0 ? "#ad1222" : "#f5c518"; 
        },
        textShadow: "0px 0px 25px white", // Bright Electric Glow
        duration: 0.1,                    // Bahut fast color change
        yoyo: true,
        repeat: -1
    });

    // B. Violent Physical Meltdown (Sab hilega)
    gsap.to(footerLetters, {
        y: "random(-20, 20)",        // Upar-Neeche wild movement
        x: "random(-10, 10)",        // Left-Right shaking
        rotation: "random(-15, 15)", // Tedha-Medha
        scale: "random(0.9, 1.2)",   // Kabhi chota kabhi bada
        opacity: "random(0.6, 1)",   // Flickering (Light kharab hai)
        
        duration: 0.05,              // EXTREMELY FAST (Current lagne jaisa)
        stagger: {
            amount: 0.2,
            from: "random"           // Kahin se bhi start ho
        },
        repeat: -1,
        yoyo: true,
        ease: "rough"
    });
});

footerTitle.addEventListener('mouseleave', function() {

    // 4. Snap Back to Reality (Reset)
    gsap.to(footerLetters, {
        y: 0,
        x: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        color: "black",          // Wapas Black (Ya jo CSS me tha)
        textShadow: "none",
        
        duration: 0.5,
        ease: "elastic.out(1, 0.3)", // Wapas bouncy tarike se judenge
        stagger: 0.05,
        overwrite: true          // Purana current rok do
    });
});

/* <=============================== REMAINING ELEMENTS ANIMATIONS ======================================= > */

// 1. Social Icons (Facebook, Discord, X) - "Radar Spin"
var socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(function(icon) {
    icon.addEventListener('mouseenter', function() {
        gsap.to(icon, {
            scale: 1.3,
            backgroundColor: "#ad1222", // Red Background
            boxShadow: "0px 0px 15px #ad1222",
            duration: 0.3,
            ease: "back.out(2)"
        });
        
        // Icon andar ghumega
        gsap.to(icon.querySelector('i'), {
            rotation: 360,
            color: "white",
            duration: 0.5,
            ease: "power2.out"
        });
    });

    icon.addEventListener('mouseleave', function() {
        gsap.to(icon, {
            scale: 1,
            backgroundColor: "rgb(60, 60, 60)", // Original Grey
            boxShadow: "none",
            duration: 0.3
        });
        gsap.to(icon.querySelector('i'), {
            rotation: 0,
            duration: 0.3
        });
    });
});


// 2. Movie Cards (Section 1) - "Pick a Card"
var cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
    // Original transform save kar rahe hain (kyunki CSS me rotate hai)
    var originalTransform = getComputedStyle(card).transform;

    card.addEventListener('mouseenter', function() {
        // Card sabse upar aa jayega aur seedha ho jayega
        gsap.to(card, {
            y: -30,                 // Thoda upar uthega
            scale: 1.1,             // Bada hoga
            rotation: 0,            // Seedha ho jayega
            zIndex: 100,            // Sabse aage
            boxShadow: "0px 20px 30px rgba(0,0,0,0.5)",
            border: "2px solid #ad1222",
            duration: 0.3,
            ease: "power2.out"
        });
    });

    card.addEventListener('mouseleave', function() {
        // Wapas apni jagah
        gsap.to(card, {
            y: 0,
            scale: 1,
            rotation: function() {
                // Wapas wahi rotation jo CSS me thi (Trick: hum ise wapas CSS class pe chhod dete hain)
                return index === 0 ? 5 : (index === 1 ? 15 : -15); 
                // Note: Agar ye exact match na kare to manually adjust kar lena, 
                // ya phir sirf 'clearProps' use karo:
            },
            zIndex: 1,
            boxShadow: "none",
            border: "none",
            duration: 0.4,
            ease: "power2.inOut",
            clearProps: "transform,zIndex" // Sabse best: CSS wapas le aao
        });
    });
});


// 3. Status Circles (Trailer, IMAX, Date) - "Reactor Pulse"
var statusCircles = document.querySelectorAll('.trailer, .IMAX, .date');

statusCircles.forEach(function(circle) {
    circle.addEventListener('mouseenter', function() {
        gsap.to(circle, {
            scale: 1.2,
            rotation: 360,          // Pura circle ghumega
            backgroundColor: "#ad1222", // Sab Red ho jayenge
            border: "2px solid white",
            duration: 0.5,
            ease: "back.out(1.5)"
        });
        
        // Andar ka text white aur bada
        gsap.to(circle.querySelectorAll('h1, h2'), {
            color: "white",
            scale: 1.1,
            duration: 0.2
        });
    });

    circle.addEventListener('mouseleave', function() {
        gsap.to(circle, {
            scale: 1,
            rotation: 0,
            // Original colors wapas lana mushkil hai loop me, 
            // isliye hum 'clearProps' use karenge taaki CSS wapas lag jaye
            clearProps: "backgroundColor, border", 
            duration: 0.5,
            ease: "power2.out"
        });
        
        gsap.to(circle.querySelectorAll('h1, h2'), {
            scale: 1,
            clearProps: "color",
            duration: 0.2
        });
    });
});


// 4. Genre Buttons (Action, Comedy, Sci-Fi) - "Neon Flicker"
var genreButtons = document.querySelectorAll('.topbar-buttons span');

genreButtons.forEach(function(btn) {
    btn.addEventListener('mouseenter', function() {
        gsap.to(btn, {
            backgroundColor: "white",
            color: "#ad1222",
            scale: 1.1,
            fontWeight: "bold",
            boxShadow: "0px 0px 10px white", // Glow
            x: "random(-2, 2)",     // Thoda vibrate
            duration: 0.1,
            yoyo: true,
            repeat: -1
        });
    });

    btn.addEventListener('mouseleave', function() {
        gsap.to(btn, {
            backgroundColor: "transparent",
            color: "white",
            scale: 1,
            fontWeight: "normal",
            boxShadow: "none",
            x: 0,
            duration: 0.3,
            overwrite: true
        });
    });
});


// 5. Marvel Studio Logo Section - "Comic Pop"
var marvelSection = document.querySelector('.marvel-studio');

marvelSection.addEventListener('mouseenter', function() {
    gsap.to('.marvel-logo img', {
        scale: 1.2,
        filter: "drop-shadow(5px 5px 0px #ad1222)", // Comic book shadow
        rotation: -5,
        duration: 0.3,
        ease: "back.out(2)"
    });
    
    // Icon spin
    gsap.to('.marvel-icon', {
        rotation: 180,
        backgroundColor: "white",
        duration: 0.5
    });
});

marvelSection.addEventListener('mouseleave', function() {
    gsap.to('.marvel-logo img', {
        scale: 1,
        filter: "none",
        rotation: 0,
        duration: 0.3
    });
    
    gsap.to('.marvel-icon', {
        rotation: 0,
        backgroundColor: "#ad1222",
        duration: 0.5
    });
});

/* <=============================== Card Container "Poker Fan" (Snappy & Smooth) ======================================= > */

var cardContainer = document.querySelector('.card-container');
var allCards = document.querySelectorAll('.card');

cardContainer.addEventListener('mouseenter', function() {
    
    // 1. Container Uthega (Lift)
    gsap.to(cardContainer, {
        scale: 1.1,         // Thoda bada
        y: -10,             // Upar uthega
        zIndex: 100,        // Sabse upar
        duration: 0.3,      // Fast response
        ease: "power2.out",
        overwrite: true     // Purani animation cancel karke ye chalayega
    });

    // 2. Cards Failenge (Fan Out) - Har card apni alag disha mein
    
    // Card 1 (Left Most)
    gsap.to(allCards[0], {
        x: -110, y: 10, rotation: -20, 
        duration: 0.3, ease: "power2.out", overwrite: true
    });

    // Card 2 (Mid Left)
    gsap.to(allCards[1], {
        x: -40, y: -10, rotation: -5, 
        duration: 0.3, ease: "power2.out", overwrite: true
    });

    // Card 3 (Mid Right)
    gsap.to(allCards[2], {
        x: 40, y: -10, rotation: 5, 
        duration: 0.3, ease: "power2.out", overwrite: true
    });

    // Card 4 (Right Most)
    gsap.to(allCards[3], {
        x: 110, y: 10, rotation: 20, 
        duration: 0.3, ease: "power2.out", overwrite: true
    });
});

cardContainer.addEventListener('mouseleave', function() {
    
    // 3. Container Wapas Normal
    gsap.to(cardContainer, {
        scale: 1,
        y: 0,
        zIndex: 3,          // Wapas normal layer
        duration: 0.3,      // Turant wapas
        ease: "power2.out",
        overwrite: true
    });

    // 4. Cards Wapas Stack (Gaddi) ban jayenge
    // Wahi rotations wapas set kar rahe hain jo ScrollTrigger se set hui thi (5, 15, -15)
    
    gsap.to(allCards[0], { x: 0, y: 0, rotation: 5, duration: 0.3, ease: "power2.out", overwrite: true });
    gsap.to(allCards[1], { x: 0, y: 0, rotation: 15, duration: 0.3, ease: "power2.out", overwrite: true });
    gsap.to(allCards[2], { x: 0, y: 0, rotation: -15, duration: 0.3, ease: "power2.out", overwrite: true });
    gsap.to(allCards[3], { x: 0, y: 0, rotation: 0, duration: 0.3, ease: "power2.out", overwrite: true });
});


/* <=============================== Slider Indicators "Spin & Point" Animation ======================================= > */

var leftIndicator = document.querySelector('.slider-left-indicator');
var rightIndicator = document.querySelector('.slider-right-indicator');

// Animation Function
function addIndicatorAnimation(element, isLeft) {
    var arrow = element.querySelector('i');

    element.addEventListener('mouseenter', function() {
        // 1. Circle Bada aur Laal hoga
        gsap.to(element, {
            backgroundColor: "#ad1222", // Deadpool Red
            scale: 1.25,                // Thoda bada
            boxShadow: "0px 0px 20px #ad1222", // Glowing Red Shadow
            border: "2px solid white",  // White Border
            duration: 0.3,
            ease: "back.out(2)"         // Bounce effect
        });

        // 2. Arrow Ghumega aur Point karega
        gsap.to(arrow, {
            rotation: isLeft ? -360 : 360, // Left wala ulta ghumega
            color: "white",                // Arrow White ho jayega
            scale: 1.4,                    // Arrow bada hoga
            duration: 0.5,
            ease: "back.out(1.5)",
            onComplete: function() {
                // Spin khatam hone ke baad direction me "Poke" karega
                gsap.to(arrow, {
                    x: isLeft ? -6 : 6,    // Apni direction me hilega
                    duration: 0.1,
                    yoyo: true,
                    repeat: -1,            // Lagataar point karta rahega
                    ease: "sine.inOut"
                });
            }
        });
    });

    element.addEventListener('mouseleave', function() {
        // 3. Wapas Normal (Reset)
        // Original colors: Left wala Red tha, Right wala White tha
        var originalBg = isLeft ? "#ad1222" : "white"; 
        var originalArrowColor = isLeft ? "white" : "black"; 

        gsap.to(element, {
            backgroundColor: originalBg,
            scale: 1,
            boxShadow: "none",
            border: "none", // Border hat jayega
            duration: 0.3
        });

        gsap.to(arrow, {
            rotation: 0,
            scale: 1,
            color: originalArrowColor,
            x: 0,
            duration: 0.3,
            overwrite: true // Poking animation rok dega
        });
    });
}

// Dono buttons par apply kar rahe hain
if(leftIndicator) addIndicatorAnimation(leftIndicator, true);   // Left wala

if(rightIndicator) addIndicatorAnimation(rightIndicator, false); // Right wala


