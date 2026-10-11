document.addEventListener("DOMContentLoaded", () => {
    
    const preloader = document.getElementById('preloader');
    const counterElement = document.getElementById('counter');
    const progressBar = document.getElementById('progress');
    let count = 0;

    const loadingInterval = setInterval(() => {
        count += Math.floor(Math.random() * 3) + 1; 
        if (count >= 100) {
            count = 100;
            clearInterval(loadingInterval);
            
            setTimeout(() => {
                preloader.classList.add('slide-up');
                document.body.classList.remove('loading'); 
                mulaiAnimasiBento(); 
                
                setTimeout(() => {
                    preloader.style.display = 'none'; 
                }, 1000); 
            }, 300);
        }
        
        counterElement.innerText = count + '%';
        progressBar.style.width = count + '%';
        
    }, 50);

    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const bentoCards = document.querySelectorAll('.bento-card');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        gsap.to(cursorOutline, {
            x: posX,
            y: posY,
            duration: 0.15,
            ease: "power2.out"
        });
        
        bentoCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    const hoverElements = document.querySelectorAll('a, button, .bento-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('cursor-hover');
        });
    });

    gsap.registerPlugin(ScrollTrigger);

    function mulaiAnimasiBento() {
        gsap.from(".bento-card", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });

        gsap.from(".project-card", {
            scrollTrigger: {
                trigger: ".works-section",
                start: "top 85%", 
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
        
        gsap.from(".footer-contact", {
            scrollTrigger: {
                trigger: ".footer-contact",
                start: "top 90%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    }

    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        updateIcon(newTheme);

        gsap.fromTo(themeToggleBtn, 
            { scale: 0.8, rotation: -45 }, 
            { scale: 1, rotation: 0, duration: 0.5, ease: "back.out(2)" }
        );
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fa-solid fa-sun';
        } else {
            themeIcon.className = 'fa-solid fa-moon';
        }
    }
    
    // --- 5. REGISTER SERVICE WORKER ---
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(registration => {
                    console.log('PWA / Mesin Bagi Beban Aktif!', registration.scope);
                })
                .catch(err => {
                    console.log('PWA Gagal:', err);
                });
        });
    }
});
