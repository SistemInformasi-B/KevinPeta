// script.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Peta Wulauan, Tondano Utara berhasil dimuat.");

    // Efek shadow dinamis saat kartu informasi di-hover
    const infoCards = document.querySelectorAll('.info-card');
    
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
            card.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
        });
    });
});