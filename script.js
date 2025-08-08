document.addEventListener('DOMContentLoaded', () => {

    // Liqa şəkillərinin dəyişmə funksiyası
    const currentLeagueSelect = document.getElementById('current-rank');
    const targetLeagueSelect = document.getElementById('desired-rank');
    const currentLeagueImage = document.getElementById('current-league-image');
    const targetLeagueImage = document.getElementById('target-league-image');

    const rankImagePaths = {
        'Demir 4': 'images/ranks/iron.png',
        'Demir 3': 'images/ranks/iron.png',
        'Demir 2': 'images/ranks/iron.png',
        'Demir 1': 'images/ranks/iron.png',
        'Bronz 4': 'images/ranks/bronz.png',
        'Bronz 3': 'images/ranks/bronz.png',
        'Bronz 2': 'images/ranks/bronz.png',
        'Bronz 1': 'images/ranks/bronz.png',
        'Gümüş 4': 'images/ranks/silver.png',
        'Gümüş 3': 'images/ranks/silver.png',
        'Gümüş 2': 'images/ranks/silver.png',
        'Gümüş 1': 'images/ranks/silver.png',
        'Altın 4': 'images/ranks/gold.png',
        'Altın 3': 'images/ranks/gold.png',
        'Altın 2': 'images/ranks/gold.png',
        'Altın 1': 'images/ranks/gold.png',
        'Platin 4': 'images/ranks/platinum.png',
        'Platin 3': 'images/ranks/platinum.png',
        'Platin 2': 'images/ranks/platinum.png',
        'Platin 1': 'images/ranks/platinum.png',
        'Zümrüt 4': 'images/ranks/emerald.png',
        'Zümrüt 3': 'images/ranks/emerald.png',
        'Zümrüt 2': 'images/ranks/emerald.png',
        'Zümrüt 1': 'images/ranks/emerald.png',
        'Elmas 4': 'images/ranks/diamond.png',
        'Elmas 3': 'images/ranks/diamond.png',
        'Elmas 2': 'images/ranks/diamond.png',
        'Elmas 1': 'images/ranks/diamond.png',
        'Ustalık': 'images/ranks/grandmaster.png',
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
            'service1-title': 'Elo Boost',
            'hero-cta': 'Calculate Price & Order',
}

    };

    const setLanguage = (lang) => {
        for (const key in translations[lang]) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = translations[lang][key];
            }
        }
        langSwitchers.forEach(flag => {
            flag.classList.remove('active-lang');
        });
        const selectedFlag = document.querySelector(`[data-lang="${lang}"]`);
        if (selectedFlag) {
            selectedFlag.classList.add('active-lang');
        }
        localStorage.setItem('lang', lang);
    };

    langSwitchers.forEach(flag => {
        flag.addEventListener('click', () => {
            const selectedLang = flag.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    const initialLang = localStorage.getItem('lang') || 'tr';
    setLanguage(initialLang);
});