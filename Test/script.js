// Function to slide down the header
function slideDownHeader() {
    var header = document.getElementById('header');
    header.style.top = '0';
}

window.addEventListener('load', slideDownHeader);

// Function to reveal elements on scroll
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var footer = document.querySelector('footer');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }

    // Reveal footer when reaching the end of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.style.display = 'block';
    }
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(reveal);
});

// To check the scroll position on page load
reveal();
