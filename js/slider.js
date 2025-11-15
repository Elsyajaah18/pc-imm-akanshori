// Menunggu hingga seluruh konten HTML dimuat sebelum menjalankan skrip
document.addEventListener("DOMContentLoaded", function () {

    // Inisialisasi Swiper untuk slider Struktural/Bidang
    const swiperBidang = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Responsif breakpoints
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });

    // Inisialisasi Swiper untuk slider Artikel
    const swiperArtikel = new Swiper(".artikel-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            // Menggunakan kelas kustom untuk navigasi
            nextEl: ".artikel-next",
            prevEl: ".artikel-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Responsif breakpoints
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // --- Fungsi untuk Mobile Drawer Menu ---
    const drawer = document.getElementById("drawer");
    
    // Memeriksa apakah elemen drawer ada sebelum menambahkan event listener
    if (drawer) {
        const openBtn = document.getElementById("drawer-toggle");
        const closeBtn = document.getElementById("drawer-close");

        function openDrawer() {
            drawer.classList.remove("-translate-x-full");
            // Mencegah body scroll saat menu terbuka
            document.body.style.overflow = 'hidden';
        }

        function closeDrawer() {
            drawer.classList.add("-translate-x-full");
            // Mengembalikan body scroll
            document.body.style.overflow = '';
        }

        // Menambahkan listener ke tombol buka dan tutup
        if (openBtn) openBtn.addEventListener("click", openDrawer);
        if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

        // Menutup drawer saat salah satu link navigasi di dalamnya diklik
        document.querySelectorAll('#drawer nav a').forEach(link => {
            link.addEventListener('click', closeDrawer);
        });
    }

    // --- Fungsi untuk Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            try {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } catch (error) {
                console.error("Error finding element for smooth scroll:", targetId, error);
            }
        });
    });

});