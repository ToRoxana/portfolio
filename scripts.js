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
            content: "Explore my work and experience in copywriting, SEO, and more."
        },
        it: {
            content: "Esplora il mio lavoro e la mia esperienza nella copywriting, SEO e altro ancora."
        },
        fr: {
            content: "Découvrez mon travail et mon expérience en rédaction, SEO et plus encore."
        }
    };

    const languageSelector = document.getElementById('languageSelector');
    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        const contentElement = document.getElementById('multilingualContent');
        contentElement.innerText = languages[selectedLanguage].content;
    });

    // Search Feature
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

    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const searchResults = document.getElementById('searchResults');
        searchResults.innerHTML = '';

        const filteredItems = contentItems.filter(item => item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query));
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
