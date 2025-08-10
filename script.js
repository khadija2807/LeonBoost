document.addEventListener('DOMContentLoaded', () => {

    // Liqa şəkillərinin dəyişmə funksiyası
    const currentLeagueSelect = document.getElementById('current-rank');
    const targetLeagueSelect = document.getElementById('desired-rank');
    const currentLeagueImage = document.getElementById('current-league-image');
    const targetLeagueImage = document.getElementById('target-league-image');

    const rankImagePaths = {
        'Demir 4': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/iron.png',
        'Demir 3': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/iron.png',
        'Demir 2': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/iron.png',
        'Demir 1': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/iron.png',
        'Bronz 4': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/bronz.png',
        'Bronz 3': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/bronz.png',
        'Bronz 2': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/bronz.png',
        'Bronz 1': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/bronz.png',
        'Gümüş 4': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/silver.png',
        'Gümüş 3': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/silver.png',
        'Gümüş 2': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/silver.png',
        'Gümüş 1': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/silver.png',
        'Altın 4': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/gold.png',
        'Altın 3': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/gold.png',
        'Altın 2': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/gold.png',
        'Altın 1': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/gold.png',
        'Platin 4': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/platinum.png',
        'Platin 3': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/platinum.png',
        'Platin 2': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/platinum.png',
        'Platin 1': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/platinum.png',
        'Zümrüt 4': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/emerald.png',
        'Zümrüt 3': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/emerald.png',
        'Zümrüt 2': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/emerald.png',
        'Zümrüt 1': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/emerald.png',
        'Elmas 4': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/diamond.png',
        'Elmas 3': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/diamond.png',
        'Elmas 2': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/diamond.png',
        'Elmas 1': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/diamond.png',
        'Ustalık': 'https://raw.githubusercontent.com/khadija2807/LeonBoost/main/grandmaster.png',
        'placeholder': 'images/ranks/placeholder_rank.png'
    };

    if (currentLeagueSelect) {
        currentLeagueSelect.addEventListener('change', (event) => {
            const selectedText = event.target.options[event.target.selectedIndex].text;
            const imagePath = rankImagePaths[selectedText];
            if (imagePath) {
                currentLeagueImage.src = imagePath;
            } else {
                currentLeagueImage.src = rankImagePaths['placeholder'];
            }
        });
    }

    if (targetLeagueSelect) {
        targetLeagueSelect.addEventListener('change', (event) => {
            const selectedText = event.target.options[event.target.selectedIndex].text;
            const imagePath = rankImagePaths[selectedText];
            if (imagePath) {
                targetLeagueImage.src = imagePath;
            } else {
                targetLeagueImage.src = rankImagePaths['placeholder'];
            }
        });
    }

    // Modal pəncərələrin funksionallığı
    const loginBtn = document.querySelector('.btn-login');
    const signupBtn = document.querySelector('.btn-signup');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeBtns = document.querySelectorAll('.close-btn');

    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (loginModal) loginModal.style.display = "block";
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (signupModal) signupModal.style.display = "block";
        });
    }

    if (closeBtns) {
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.closest('.modal').style.display = "none";
            });
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = "none";
        }
    });

    // Dil dəyişdirmə funksiyası
    const langSwitchers = document.querySelectorAll('.lang-switcher img');

    const translations = {
        'tr': {
            'nav-anasayfa': 'Ana Sayfa',
            'nav-lolboost': 'LoL Boost',
            'nav-hakkimizda': 'Hakkımızda',
            'nav-boosterol': 'Booster Ol',
            'nav-iletisim': 'İletişim',
            'btn-giris': 'Giriş Yap',
            'btn-kayitol': 'Kayıt Ol',
            'features-title': 'Neden LEONBOOST?',
            'feature1-title': '100% Hesap Güvenliği',
            'feature1-desc': 'Hesabınız bizimle güvende. Gizliliğiniz her zaman önceliğimizdir.',
            'feature2-title': 'Hızlı ve Etkili',
            'feature2-desc': 'Siparişleriniz en kısa sürede profesyonelce tamamlanır.',
            'feature3-title': 'Deneyimli Boosterlar',
            'feature3-desc': 'Sadece en iyi ve en tecrübeli oyuncular ekibimizde yer alır.',
            'feature4-title': '7/24 Canlı Destek',
            'feature4-desc': 'Her türlü sorunuz için kesintisiz destek sağlıyoruz.',
            'services-overview-title': 'Ana Hizmetlerimiz',
            'service1-title': 'Elo Boost',
            'service1-desc': 'İstediğiniz lige hızla ulaşın.',
            'service1-cta': 'Daha Fazla Bilgi',
            'service2-title': 'Yerleştirme Maçları',
            'service2-desc': 'Yeni sezona en iyi başlangıcı yapın.',
            'service2-cta': 'Daha Fazla Bilgi',
            'service3-title': 'Duo Queue',
            'service3-desc': "Booster'ınızla beraber lig atlayın.",
            'service3-cta': 'Daha Fazla Bilgi',
            'service4-title': 'Win Boost',
            'service4-desc': 'Belirli sayıda zafer garantisi.',
            'service4-cta': 'Daha Fazla Bilgi',
            'stats-title': 'LEONBOOST Rakamlarla',
            'stat-members-text': 'Toplam Üye',
            'stat-completed-text': 'Tamamlanmış Siparişler',
            'stat-lol-text': 'LoL Siparişleri',
            'testimonials-title': 'Müşterilerimiz Bizim Hakkımızda Ne Diyor?',
            'testimonial1-text': '"Harika hizmet! Çok hızlı ve profesyonel. Kesinlikle tavsiye ederim."',
            'testimonial1-client': '- RiotPlayer123',
            'testimonial2-text': '"İstediğim lige kolayca ulaştım. Destek ekibi de çok ilgiliydi."',
            'testimonial2-client': '- LoLqueen',
            'faq-short-title': 'Sıkça Sorulan Sorular',
            'faq1-question': 'LEONBOOST güvenli mi? ',
            'faq1-answer': 'Evet, hesap güvenliğiniz bizim için en önemli önceliktir. Tüm işlemler gizlilik içinde yürütülür.',
            'faq2-question': 'Sipariş süreci nasıl işler? ',
            'faq2-answer': "İstediğiniz hizmeti seçin, gerekli bilgileri girin ve ödemeyi tamamlayın. Booster'ımız kısa sürede sizinle iletişime geçecektir.",
            'faq3-question': 'Hangi ödeme yöntemlerini kabul ediyorsunuz? ',
            'faq3-answer': 'MasterCard, Visa ve çeşitli yerel ödeme yöntemlerini kabul ediyoruz.',
            'faq-full-cta': 'Tüm Soruları Gör',
            'footer-about-text': 'LEONBOOST, League of Legends oyuncularına profesyonel ve güvenilir boost hizmetleri sunar. Hedefinizdeki lige bizimle ulaşın!',
            'footer-links-title': 'Hızlı Linkler',
            'footer-link-services': 'Hizmetler',
            'footer-link-contact': 'İletişim',
            'footer-link-terms': 'Şartlar & Koşullar',
            'footer-link-privacy': 'Gizlilik Politikası',
            'footer-contact-title': 'Bize Ulaşın',
            'footer-email': 'info@leonboost.com',
            'footer-discord': 'Discord Sunucumuz',
            'footer-payments-title': 'Ödeme Yöntemleri',
            'copyright-text': '© 2025 LEONBOOST. Tüm hakları saklıdır.',
            'disclaimer-text': 'LEONBOOST, Riot Games Inc. ile bağlantılı değildir veya onaylanmamıştır.',
            'login-modal-title': 'Giriş Yap',
            'login-email-label': 'E-mail',
            'login-password-label': 'Şifre',
            'login-submit-btn': 'Giriş Yap',
            'signup-modal-title': 'Kayıt Ol',
            'signup-username-label': 'Kullanıcı',
            'signup-email-label': 'E-mail',
            'signup-password-label': 'Şifre',
            'signup-submit-btn': 'Kayıt Ol',
        },
        'en': {
            'nav-anasayfa': 'Home',
            'nav-lolboost': 'LoL Boost',
            'nav-hakkimizda': 'About Us',
            'nav-boosterol': 'Become a Booster',
            'nav-iletisim': 'Contact',
            'btn-giris': 'Login',
            'btn-kayitol': 'Register',
            'features-title': 'Why LEONBOOST?',
            'feature1-title': '100% Account Security',
            'feature1-desc': 'Your account is safe with us. Your privacy is always our priority.',
            'feature2-title': 'Fast and Effective',
            'feature2-desc': 'Your orders are completed professionally in the shortest time.',
            'feature3-title': 'Experienced Boosters',
            'feature3-desc': 'Only the best and most experienced players are in our team.',
            'feature4-title': '24/7 Live Support',
            'feature4-desc': 'We provide uninterrupted support for all your questions.',
            'services-overview-title': 'Our Main Services',
            'service1-title': 'Elo Boost',
            'service1-desc': 'Reach your desired league quickly.',
            'service1-cta': 'Learn More',
            'service2-title': 'Placement Matches',
            'service2-desc': 'Start the new season in the best way.',
            'service2-cta': 'Learn More',
            'service3-title': 'Duo Queue',
            'service3-desc': 'Climb the league together with your booster.',
            'service3-cta': 'Learn More',
            'service4-title': 'Win Boost',
            'service4-desc': 'Guaranteed number of wins.',
            'service4-cta': 'Learn More',
            'stats-title': 'LEONBOOST in Numbers',
            'stat-members-text': 'Total Members',
            'stat-completed-text': 'Completed Orders',
            'stat-lol-text': 'LoL Orders',
            'testimonials-title': 'What Our Customers Say About Us?',
            'testimonial1-text': '"Great service! Very fast and professional. Highly recommend."',
            'testimonial1-client': '- RiotPlayer123',
            'testimonial2-text': '"I easily reached my desired league. Support team was very attentive."',
            'testimonial2-client': '- LoLqueen',
            'faq-short-title': 'Frequently Asked Questions',
            'faq1-question': 'Is LEONBOOST safe? ',
            'faq1-answer': 'Yes, account security is our top priority. All transactions are carried out confidentially.',
            'faq2-question': 'How does the order process work? ',
            'faq2-answer': 'Select the service you want, enter the required information, and complete the payment. Our booster will contact you shortly.',
            'faq3-question': 'Which payment methods do you accept? ',
            'faq3-answer': 'We accept MasterCard, Visa, and various local payment methods.',
            'faq-full-cta': 'View All Questions',
            'footer-about-text': 'LEONBOOST provides professional and reliable boost services for League of Legends players. Reach your desired league with us!',
            'footer-links-title': 'Quick Links',
            'footer-link-services': 'Services',
            'footer-link-contact': 'Contact',
            'footer-link-terms': 'Terms & Conditions',
            'footer-link-privacy': 'Privacy Policy',
            'footer-contact-title': 'Contact Us',
            'footer-email': 'info@leonboost.com',
            'footer-discord': 'Our Discord Server',
            'footer-payments-title': 'Payment Methods',
            'copyright-text': '© 2025 LEONBOOST. All rights reserved.',
            'disclaimer-text': 'LEONBOOST is not affiliated with or endorsed by Riot Games Inc.',
            'login-modal-title': 'Login',
            'login-email-label': 'Email',
            'login-password-label': 'Password',
            'login-submit-btn': 'Login',
            'signup-modal-title': 'Register',
            'signup-username-label': 'Username',
            'signup-email-label': 'Email',
            'signup-password-label': 'Password',
            'signup-submit-btn': 'Register',
        }
    };

function translatePage(lang) {
    // ID ilə tərcümə olunanlar
    for (const [id, text] of Object.entries(translations[lang])) {
        const el = document.getElementById(id);
        if (el) {
            if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
                if (el.type === 'button' || el.type === 'submit') {
                    el.value = text;
                } else {
                    el.placeholder = text;
                }
            } else {
                el.textContent = text;
            }
        }
    }

        // Yeni əlavə: data-tr / data-en olanları da dəyiş
    translateByDataAttr(lang);

    // data-tr və data-en ilə tərcümə olunanlar
    const translatables = document.querySelectorAll('[data-tr][data-en]');
    translatables.forEach(el => {
        const newText = el.getAttribute(`data-${lang}`);
        if (newText) {
            el.textContent = newText;
        }
    });
}


    langSwitchers.forEach(img => {
        img.addEventListener('click', () => {
            const selectedLang = img.getAttribute('data-lang');
            translatePage(selectedLang);
        });
    });

    // İlk yüklemede Türkcə tərcümə ilə başlayır
    translatePage('tr');
});


if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
    if (el.type === 'button' || el.type === 'submit') {
        el.value = text;
    } else {
        el.placeholder = text;
    }
} else {
    el.textContent = text;
}

langSwitchers.forEach(img => {
    img.addEventListener('click', () => {
        const selectedLang = img.getAttribute('data-lang');
        translatePage(selectedLang);
        localStorage.setItem('lang', selectedLang);
    });
});

// Sayfa yüklənəndə saxlanmış dili götür
const savedLang = localStorage.getItem('lang') || 'tr';
translatePage(savedLang);

function translateByDataAttr(lang) {
    const elements = document.querySelectorAll('[data-tr][data-en]');
    elements.forEach(el => {
        const translatedText = el.getAttribute(`data-${lang}`);
        if (translatedText) {
            el.textContent = translatedText;
        }
    });
}





