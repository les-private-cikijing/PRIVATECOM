document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!"); // Debugging: cek apakah JS berjalan

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    const navMenu = document.querySelector(".nav-links");
    const hamburger = document.getElementById("hamburger");

    if (!navMenu) {
        console.error("ERROR: nav-menu tidak ditemukan!");
    }
    if (!hamburger) {
        console.error("ERROR: hamburger tidak ditemukan!");
    }

    function changeActiveNav() {
        let fromTop = window.scrollY + 100;

        sections.forEach(section => {
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                let activeSection = section.getAttribute("id");

                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").includes(activeSection)) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    // Fungsi Toggle Menu untuk Hamburger
    function toggleMenu(event) {
        event.preventDefault(); // Mencegah kejadian bawaan
        console.log("Hamburger diklik!"); // Debugging
        navMenu.classList.toggle("show");
    }

    // Menutup menu jika klik di luar menu atau memilih link
    function closeMenu(event) {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove("show");
        }
    }

    // Pastikan hamburger bisa diklik
    if (hamburger) {
        hamburger.addEventListener("click", toggleMenu);
        document.addEventListener("click", closeMenu); // Tambahkan event listener di luar menu
    } else {
        console.error("ERROR: Tidak bisa menambahkan event listener ke hamburger!");
    }

    window.addEventListener("scroll", changeActiveNav);
});
