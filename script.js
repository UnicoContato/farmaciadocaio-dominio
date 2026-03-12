const header = document.getElementById('header');
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const btnPrivacy = document.getElementById('btn-privacy');
const btnCloseModal = document.getElementById('btn-close-modal');
const modalPrivacy = document.getElementById('modal-privacy');
const modalContent = document.getElementById('modal-content');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 80) {
        header.style.transform = 'translateY(-100%)';
        mobileMenu.classList.add('hidden');
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

document.getElementById('year').textContent = new Date().getFullYear();

const openModal = () => {
    modalPrivacy.classList.remove('hidden');
    modalPrivacy.classList.add('flex');
    setTimeout(() => {
        modalPrivacy.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
    }, 10);
};

const closeModal = () => {
    modalPrivacy.classList.add('opacity-0');
    modalContent.classList.add('scale-95');
    setTimeout(() => {
        modalPrivacy.classList.add('hidden');
        modalPrivacy.classList.remove('flex');
    }, 300);
};

btnPrivacy.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);

modalPrivacy.addEventListener('click', (e) => {
    if (e.target === modalPrivacy) {
        closeModal();
    }
});