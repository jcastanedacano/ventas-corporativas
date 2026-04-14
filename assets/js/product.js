// ========== BANNER CAROUSEL ==========
let currentBannerSlide = 0;
const bannerSlides = document.querySelectorAll('.banner-slide');
const bannerDots = document.querySelectorAll('.banner-dot');
const slidesContainer = document.querySelector('.banner-slides');

function updateBanner() {
    if (!slidesContainer) return;
    slidesContainer.style.transform = `translateX(-${currentBannerSlide * 100}%)`;
    bannerDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentBannerSlide);
    });
}

function changeBannerSlide(dir) {
    currentBannerSlide = (currentBannerSlide + dir + bannerSlides.length) % bannerSlides.length;
    updateBanner();
}

function goToBannerSlide(index) {
    currentBannerSlide = index;
    updateBanner();
}

// Auto-advance banner
let bannerInterval = setInterval(() => changeBannerSlide(1), 5000);

// Pause on hover
const bannerCarousel = document.querySelector('.banner-carousel');
if (bannerCarousel) {
    bannerCarousel.addEventListener('mouseenter', () => clearInterval(bannerInterval));
    bannerCarousel.addEventListener('mouseleave', () => {
        bannerInterval = setInterval(() => changeBannerSlide(1), 5000);
    });
}

// ========== PRODUCT FILTER ==========
function filterProducts() {
    const filterType = document.getElementById('filterType');
    if (!filterType) return;
    const type = filterType.value;
    const cards = document.querySelectorAll('.product-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const cardType = card.getAttribute('data-type');
        if (type === 'all' || cardType === type) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    const countEl = document.querySelector('.filter-count');
    if (countEl) {
        countEl.textContent = `${visibleCount} producto${visibleCount !== 1 ? 's' : ''} encontrado${visibleCount !== 1 ? 's' : ''}`;
    }
}
