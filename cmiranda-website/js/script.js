function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-navbar .navbar-items');
    mobileMenu.classList.toggle('show');
    mobileMenu.classList.toggle('hide');
}

const mobileLinks = document.querySelectorAll('.mobile-navbar .navbar-items .item a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        const mobileMenu = document.querySelector('.mobile-navbar .navbar-items');
        mobileMenu.classList.remove('show');
    });
});
const mobileFlags = document.querySelectorAll('.mobile-navbar .navbar-items .flags img');
mobileFlags.forEach(link => {
    link.addEventListener('click', () => {
        const mobileMenu = document.querySelector('.mobile-navbar .flags');
        mobileMenu.classList.remove('show');
    });
});

function redirectToPDF(pdfLink) {
    window.open(pdfLink, '_blank');
}

function redirectToCatalogs() {
    window.location.href = '../public/catalogs.html';
}
function redirectToNews() {
    window.location.href = '../public/news.html';
}
function redirectToHomePage() {
    window.location.href = '../index.html';
}

document.addEventListener("DOMContentLoaded", function () {
    const announcementBar = document.getElementById("announcementBar");
    const contents = Array.from(announcementBar.getElementsByClassName("announcement-content"));
    let currentIndex = 0;

    function showNextContent() {
        contents[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % contents.length;
        contents[currentIndex].style.display = "block";
    }

    for (let i = 1; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    contents[currentIndex].style.display = "block";

    announcementBar.style.display = "block";

    setInterval(showNextContent, 10000);
});

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const backToTopButton = document.querySelector(".back-to-top");
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


