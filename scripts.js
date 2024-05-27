document.addEventListener('DOMContentLoaded', () => {
    const readAloudButton = document.getElementById('readAloud');
    const languageSelector = document.getElementById('languageSelector');
    const searchBar = document.getElementById('searchBar');
    const searchResults = document.getElementById('searchResults');

    const contentItems = [
        { title: 'Welcome to My Portfolio', content: 'Explore my work and experience in copywriting, SEO, and more.' },
        { title: 'My Story', content: 'I\'m John Doe, a professional copywriter with a passion for crafting compelling content.' },
        { title: 'Published Articles', content: 'Here are some of my articles published on various websites.' },
        { title: 'Blog', content: 'Though my blog is no longer updated, you can still read my past posts.' },
        { title: 'Ghostwriting', content: 'I\'ve also ghostwritten numerous articles.' },
        { title: 'SEO Projects', content: 'My work in SEO includes the following projects.' },
        { title: 'Video Advice', content: 'I provided specific advice in a video for a company.' },
        { title: 'Get in Touch', content: 'If you\'d like to discuss a project or just want to say hello, feel free to contact me.' }
    ];

    const languages = {
        en: {
            content: "Explore my work and experience in copywriting, SEO, and more.",
            story: "I'm John Doe, a professional copywriter with a passion for crafting compelling content.",
            articles: "Here are some of my articles published on various websites.",
            blog: "Though my blog is no longer updated, you can still read my past posts.",
            ghostwriting: "I've also ghostwritten numerous articles.",
            seo: "My work in SEO includes the following projects.",
            video: "I provided specific advice in a video for a company.",
            contact: "If you'd like to discuss a project or just want to say hello, feel free to contact me."
        },
        it: {
            content: "Esplora il mio lavoro e la mia esperienza nella copywriting, SEO e altro ancora.",
            story: "Sono John Doe, un copywriter professionista con una passione per creare contenuti avvincenti.",
            articles: "Ecco alcuni dei miei articoli pubblicati su vari siti web.",
            blog: "Anche se il mio blog non è più aggiornato, puoi ancora leggere i miei post passati.",
            ghostwriting: "Ho anche scritto numerosi articoli come ghostwriter.",
            seo: "Il mio lavoro nel SEO include i seguenti progetti.",
            video: "Ho fornito consigli specifici in un video per un'azienda.",
            contact: "Se vuoi discutere di un progetto o semplicemente dire ciao, sentiti libero di contattarmi."
        },
        fr: {
            content: "Découvrez mon travail et mon expérience en rédaction, SEO et plus encore.",
            story: "Je suis John Doe, un rédacteur professionnel passionné par la création de contenus captivants.",
            articles: "Voici quelques-uns de mes articles publiés sur divers sites web.",
            blog: "Bien que mon blog ne soit plus mis à jour, vous pouvez toujours lire mes anciens articles.",
            ghostwriting: "J'ai également rédigé de nombreux articles en tant que ghostwriter.",
            seo: "Mon travail en SEO inclut les projets suivants.",
            video: "J'ai donné des conseils spécifiques dans une vidéo pour une entreprise.",
            contact: "Si vous souhaitez discuter d'un projet ou simplement dire bonjour, n'hésitez pas à me contacter."
        }
    };

    let isSpeaking = false;
    let speech;

    readAloudButton.addEventListener('click', () => {
        if (!isSpeaking) {
            const selectedLanguage = languageSelector.value;
            const contentToRead = languages[selectedLanguage].content;
            speech = new SpeechSynthesisUtterance(contentToRead);
            window.speechSynthesis.speak(speech);
            isSpeaking = true;
            readAloudButton.textContent = 'Mute';
        } else {
            window.speechSynthesis.cancel();
            isSpeaking = false;
            readAloudButton.textContent = 'Read Aloud';
        }
    });

    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        document.getElementById('content').innerText = languages[selectedLanguage].content;
        document.getElementById('multilingualContent').innerText = languages[selectedLanguage].content;
        // Add more elements that need to change based on language
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
