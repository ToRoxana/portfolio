document.addEventListener('DOMContentLoaded', () => {
    // Read Aloud Feature
    const readAloudButton = document.getElementById('readAloud');
    const content = document.getElementById('content').innerText;
    let isSpeaking = false;
    let speech;

    readAloudButton.addEventListener('click', () => {
        if (!isSpeaking) {
            speech = new SpeechSynthesisUtterance(content);
            window.speechSynthesis.speak(speech);
            isSpeaking = true;
            readAloudButton.textContent = 'Mute';
        } else {
            window.speechSynthesis.cancel();
            isSpeaking = false;
            readAloudButton.textContent = 'Read Aloud';
        }
    });

    // Multilingual Support
    const languages = {
        en: {
            content: "This is the content that will change based on the selected language."
        },
        es: {
            content: "Este es el contenido que cambiará según el idioma seleccionado."
        },
        fr: {
            content: "Voici le contenu qui changera en fonction de la langue sélectionnée."
        }
    };

    const languageSelector = document.getElementById('languageSelector');
    const multilingualContent = document.getElementById('multilingualContent');

    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        multilingualContent.innerText = languages[selectedLanguage].content;
    });

    // Search Functionality
    const contentItems = [
        { title: 'Home', content: 'Welcome to our homepage.' },
        { title: 'About', content: 'Learn more about our company.' },
        { title: 'Services', content: 'Discover our range of services.' },
        { title: 'Contact', content: 'Get in touch with us.' }
    ];

    const searchBar = document.getElementById('searchBar');
    const searchResults = document.getElementById('searchResults');

    searchBar.addEventListener('keyup', (event) => {
        const query = event.target.value.toLowerCase();
        searchResults.innerHTML = '';

        const filteredItems = contentItems.filter(item =>
            item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query)
        );

        filteredItems.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
            searchResults.appendChild(resultItem);
        });
    });

    // Modal Windows
    const modal = document.getElementById('myModal');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.querySelector('.close');

    openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Image Carousel
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});
