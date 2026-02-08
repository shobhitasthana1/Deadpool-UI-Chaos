/* <=============================== Mobile Menu Toggle Logic ======================================= > */

// Elements select kar rahe hain
var hamburger = document.querySelector('.hamgurber-menu');
var mobileMenu = document.querySelector('nav ul');
var menuLinks = document.querySelectorAll('nav ul li a');

// Open/Close Menu Function
hamburger.addEventListener('click', function() {
    
    // 'active' class add/remove karega CSS transition ke liye
    mobileMenu.classList.toggle('active');
    
    // Hamburger Icon Animation (Lines ko X banana)
    var spans = hamburger.querySelectorAll('span');

    if(mobileMenu.classList.contains('active')){
        // 1. Agar Menu Khul raha hai -> Cross (X) banao & Red karo
        gsap.to(spans[0], { rotation: 45, y: 7, backgroundColor: "white", duration: 0.3 });
        gsap.to(spans[1], { opacity: 0, duration: 0.1 }); // Beech wali line gayab
        gsap.to(spans[2], { rotation: -45, y: -7, backgroundColor: "white", duration: 0.3 });
        
        // Background Red
        gsap.to(hamburger, { backgroundColor: "#ad1222", duration: 0.3 });
        
        // Menu Items Animation (Ek-ek karke aayenge)
        gsap.fromTo(menuLinks, 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: "power2.out" }
        );

    } else {
        // 2. Agar Menu Band ho raha hai -> Wapas Hamburger banao
        gsap.to(spans[0], { rotation: 0, y: 0, backgroundColor: "black", duration: 0.3 });
        gsap.to(spans[1], { opacity: 1, backgroundColor: "black", duration: 0.1 });
        gsap.to(spans[2], { rotation: 0, y: 0, backgroundColor: "black", duration: 0.3 });
        
        // Background White
        gsap.to(hamburger, { backgroundColor: "white", duration: 0.3 });
    }
});

// Link click karne par menu apne aap band ho jaye
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(mobileMenu.classList.contains('active')) {
            hamburger.click(); // Hamburger click trigger karke band kar do
        }
    });
});