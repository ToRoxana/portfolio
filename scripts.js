document.addEventListener('DOMContentLoaded', () => {
    const readAloudButton = document.getElementById('readAloud');
    const languageSelector = document.getElementById('languageSelector');
    const searchBar = document.getElementById('searchBar');
    const searchResults = document.getElementById('searchResults');

    const textElements = {
        en: {
            pageTitle: "Copywriter Portfolio",
            headerTitle: "John Doe - Copywriter Portfolio",
            navHome: "Home",
            navAbout: "About",
            navPortfolio: "Portfolio",
            navContact: "Contact",
            welcomeTitle: "Welcome to My Portfolio",
            welcomeText: "Explore my work and experience in copywriting, SEO, and more.",
            footerText: "&copy; 2024 John Doe",
            readAloudText: "Read Aloud"
        },
        it: {
            pageTitle: "Portfolio di Copywriter",
            headerTitle: "John Doe - Portfolio di Copywriter",
            navHome: "Home",
            navAbout: "Chi Sono",
            navPortfolio: "Portfolio",
            navContact: "Contatti",
            welcomeTitle: "Benvenuto nel Mio Portfolio",
            welcomeText: "Esplora il mio lavoro e la mia esperienza nella copywriting, SEO e altro ancora.",
            footerText: "&copy; 2024 John Doe",
            readAloudText: "Leggi ad alta voce"
        },
        fr: {
            pageTitle: "Portfolio de Rédacteur",
            headerTitle: "John Doe - Portfolio de Rédacteur",
            navHome: "Accueil",
            navAbout: "À Propos",
            navPortfolio: "Portfolio",
            navContact: "Contact",
            welcomeTitle: "Bienvenue dans Mon Portfolio",
            welcomeText: "Découvrez mon travail et mon expérience en rédaction, SEO et plus encore.",
            footerText: "&copy; 2024 John Doe",
            readAloudText: "Lire à haute voix"
        }
    };

    let isSpeaking = false;
    let speech;

    readAloudButton.addEventListener('click', () => {
        if (!isSpeaking) {
            const selectedLanguage = languageSelector.value;
            const contentToRead = document.getElementById('welcomeText').innerText;
            speech = new SpeechSynthesisUtterance(contentToRead);
            window.speechSynthesis.speak(speech);
            isSpeaking = true;
            readAloudButton.textContent = textElements[selectedLanguage].readAloudText + " (Mute)";
        } else {
            window.speechSynthesis.cancel();
            isSpeaking = false;
            readAloudButton.textContent = textElements[languageSelector.value].readAloudText;
        }
    });

    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        document.getElementById('pageTitle').innerText = textElements[selectedLanguage].pageTitle;
        document.getElementById('headerTitle').innerText = textElements[selectedLanguage].headerTitle;
        document.getElementById('navHome').innerText = textElements[selectedLanguage].navHome;
        document.getElementById('navAbout').innerText = textElements[selectedLanguage].navAbout;
        document.getElementById('navPortfolio').innerText = textElements[selectedLanguage].navPortfolio;
        document.getElementById('navContact').innerText = textElements[selectedLanguage].navContact;
        document.getElementById('welcomeTitle').innerText = textElements[selectedLanguage].welcomeTitle;
        document.getElementById('welcomeText').innerText = textElements[selectedLanguage].welcomeText;
        document.getElementById('footerText').innerHTML = textElements[selectedLanguage].footerText;
        readAloudButton.textContent = textElements[selectedLanguage].readAloudText;
    });

    searchBar.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        searchResults.innerHTML = '';

        const filteredItems = contentItems.filter(item => item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query));
        filteredItems.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
            searchResults.appendChild(resultItem);
        });
    });
});
