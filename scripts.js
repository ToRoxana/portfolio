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
            aboutTitle: "About Me",
            aboutContent: "I'm John Doe, a professional copywriter with a passion for crafting compelling content.",
            portfolioTitle: "My Projects",
            contactTitle: "Contact Me",
            contactContent: "You can reach me via email at john.doe@example.com or call me at (123) 456-7890.",
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
            aboutTitle: "Chi Sono",
            aboutContent: "Sono John Doe, un copywriter professionista con una passione per creare contenuti avvincenti.",
            portfolioTitle: "I Miei Progetti",
            contactTitle: "Contattami",
            contactContent: "Puoi contattarmi via email a john.doe@example.com o chiamarmi al (123) 456-7890.",
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
            aboutTitle: "À Propos",
            aboutContent: "Je suis John Doe, un rédacteur professionnel passionné par la création de contenus captivants.",
            portfolioTitle: "Mes Projets",
            contactTitle: "Contactez-moi",
            contactContent: "Vous pouvez me joindre par email à john.doe@example.com ou m'appeler au (123) 456-7890.",
            footerText: "&copy; 2024 John Doe",
            readAloudText: "Lire à haute voix"
        }
    };

    let isSpeaking = false;
    let speech;

    readAloudButton.addEventListener('click', () => {
        if (!isSpeaking) {
            const selectedLanguage = languageSelector.value;
            const contentToRead = document.querySelector('main').innerText;
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
        document.getElementById('aboutTitle').innerText = textElements[selectedLanguage].aboutTitle;
        document.getElementById('aboutContent').innerText = textElements[selectedLanguage].aboutContent;
        document.getElementById('portfolioTitle').innerText = textElements[selectedLanguage].portfolioTitle;
        document.getElementById('contactTitle').innerText = textElements[selectedLanguage].contactTitle;
        document.getElementById('contactContent').innerText = textElements[selectedLanguage].contactContent;
        document.getElementById('footerText').innerHTML = textElements[selectedLanguage].footerText;
        readAloudButton.textContent = textElements[selectedLanguage].readAloudText;

        // Store the selected language in local storage to maintain consistency across pages
        localStorage.setItem('selectedLanguage', selectedLanguage);
    });

    searchBar.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        searchResults.innerHTML = '';

        const contentItems = [
            { title: "Project 1", content: "Summary of project 1" },
            { title: "Project 2", content: "Summary of project 2" },
            { title: "Project 3", content: "Summary of project 3" },
            { title: "Project 4", content: "Summary of project 4" },
            { title: "Project 5", content: "Summary of project 5" }
        ];

        const filteredItems = contentItems.filter(item => item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query));
        filteredItems.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
            searchResults.appendChild(resultItem);
        });
    });

    // Apply the stored language preference on page load
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
        languageSelector.value = storedLanguage;
        const event = new Event('change');
        languageSelector.dispatchEvent(event);
    }
});
