// ⭐ Smooth Scroll for Navigation Links
document.querySelectorAll('.navigation-ui-element a, .try-btn').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ⭐ Contact Form Handling
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("⚠️ Please fill out all fields!");
            return;
        }

        window.alert(`🎉 Thanks ${name}! Your message was sent successfully!`);
        contactForm.reset();
    });
}

// ⭐ Wiggle Try Now Button every 5s
const tryNowBtn = document.querySelector(".try-btn");

if (tryNowBtn) {
    setInterval(() => {
        tryNowBtn.style.transform = "scale(1.09) rotate(1deg)";
        setTimeout(() => {
            tryNowBtn.style.transform = "scale(1) rotate(0deg)";
        }, 250);
    }, 5000);
}
