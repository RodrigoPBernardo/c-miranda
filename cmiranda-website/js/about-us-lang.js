const translationsEn = {
    home: "Home",
    sobreNos: "About Us",
    catalogos: "Catalogs",
    novidades: "News",
    contactos: "Contacts",
    homeMobile: "Home",
    sobreNosMobile: "About Us",
    catalogosMobile: "Catalogs",
    novidadesMobile: "News",
    contactosMobile: "Contacts",
    tituloSobreNos: "Who we are?",
    conteudoSobreNos1: "With half a century of dedication, C.Miranda is proud to be more than a company – we are a family committed to excellence. Over these 50 years, we have cultivated fundamental values ​​of respect, ethics and responsibility, making us synonymous with trust in the world of school equipment.",
    conteudoSobreNos2: "Our journey has been marked by constant innovation, ensuring not only quality products, but also punctual delivery times and transparency in each action. As your partners, we are committed to providing full availability, driving the continuous evolution of school equipment.",
    siga: "Follow Us",
    politicaPrivacidade: "Privacy Policy",
    livroReclamacoes: "Complaint book",
    copyright: "CMIRANDA Copyright 2024 - All rights reserved"
};
const translationsFr = {
    home: "Maison",
    sobreNos: "À propos de nous",
    catalogos: "Catalogues",
    novidades: "Nouvelles",
    contactos: "Contacts",
    homeMobile: "Maison",
    sobreNosMobile: "À propos de nous",
    catalogosMobile: "Catalogues",
    novidadesMobile: "Nouvelles",
    contactosMobile: "Contacts",
    tituloSobreNos: "Qui nous sommes?",
    conteudoSobreNos1: "Avec un demi-siècle de dévouement, C.Miranda est fière d'être plus qu'une entreprise : nous sommes une famille engagée envers l'excellence. Au cours de ces 50 années, nous avons cultivé des valeurs fondamentales de respect, d'éthique et de responsabilité, qui font de nous synonyme de confiance dans le monde de l'équipement scolaire.",
    conteudoSobreNos2: "Notre parcours a été marqué par une innovation constante, garantissant non seulement des produits de qualité, mais aussi des délais de livraison ponctuels et une transparence dans chaque action. En tant que partenaires, nous nous engageons à assurer une disponibilité totale, favorisant l'évolution continue des équipements scolaires.",
    siga: "Suivez-nous",
    politicaPrivacidade: "Politique de Confidentialite",
    livroReclamacoes: "Livre de réclamation",
    copyright: "CMIRANDA Copyright 2024 - Tous droits réservés"
};
const translationsEs = {
    home: "Página de inicio",
    sobreNos: "Sobre nosotros",
    catalogos: "Catálogos",
    novidades: "Noticias",
    contactos: "Contactos",
    homeMobile: "Página de inicio",
    sobreNosMobile: "Sobre nosotros",
    catalogosMobile: "Catálogos",
    novidadesMobile: "Noticias",
    contactosMobile: "Contactos",
    tituloSobreNos: "Quienes somos?",
    conteudoSobreNos1: "Con medio siglo de dedicación, C.Miranda se enorgullece de ser más que una empresa: somos una familia comprometida con la excelencia. A lo largo de estos 50 años, hemos cultivado valores fundamentales de respeto, ética y responsabilidad, lo que nos convierte en sinónimo de confianza en el mundo del equipamiento escolar.",
    conteudoSobreNos2: "Nuestro camino ha estado marcado por la innovación constante, asegurando no sólo productos de calidad, sino también puntualidad en los plazos de entrega y transparencia en cada acción. Como sus socios, nos comprometemos a brindar total disponibilidad, impulsando la evolución continua del equipamiento escolar.",
    siga: "Síganos",
    politicaPrivacidade: "Política de Confidencialidad",
    livroReclamacoes: "Libro de reclamaciones",
    copyright: "CMIRANDA Copyright 2024 - Todos los derechos reservados"
};
const translationsPt = {
    home: "Home",
    sobreNos: "Sobre Nós",
    catalogos: "Catálogos",
    novidades: "Novidades",
    contactos: "Contactos",
    homeMobile: "Home",
    sobreNosMobile: "Sobre Nós",
    catalogosMobile: "Catálogos",
    novidadesMobile: "Novidades",
    contactosMobile: "Contactos",
    tituloSobreNos: "Quem Somos?",
    conteudoSobreNos1: "Com meio século de dedicação, a C.Miranda orgulha-se de ser mais do que uma empresa – somos uma família comprometida com a excelência. Ao longo destes 50 anos, cultivamos valores fundamentais de respeito, ética e responsabilidade, tornando-nos sinónimo de confiança no universo dos equipamentos escolares.",
    conteudoSobreNos2: "A nossa jornada foi marcada pela inovação constante, assegurando não apenas produtos de qualidade, mas também prazos de entrega pontuais e transparência em cada ação. Como seus parceiros, comprometemo-nos a proporcionar disponibilidade total, impulsionando a evolução contínua do equipamento escolar.",
    siga: "Siga-nos",
    politicaPrivacidade: "Política de Privacidade",
    livroReclamacoes: "Livro de Reclamações",
    copyright: "CMIRANDA Copyright 2024 - Todos os direitos reservados"
};

function getLanguagePreference() {
    return localStorage.getItem('language') || 'pt'; 
}

function setLanguagePreference(languageCode) {
    localStorage.setItem('language', languageCode);
}

function changeLanguage(languageCode) {
    const translations = getTranslations(languageCode);

    Object.keys(translations).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            const anchorElement = element.querySelector('a');

            if (anchorElement) {
                anchorElement.textContent = translations[key];
            } else {
                element.textContent = translations[key];
            }
        }
    });

    Object.keys(translations.placeholders).forEach(key => {
        const inputElement = document.getElementById(key);
        if (inputElement) {
            inputElement.placeholder = translations.placeholders[key];
        }
    });

    updateElementText('titulo', translations.titulo);
    updateElementText('outroElementoID', translations.outroElemento);

    setLanguagePreference(languageCode);
}

function updateElementText(elementId, newText) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = newText;
    }
}

function getTranslations(languageCode) {
    switch (languageCode) {
        case 'en':
            return translationsEn;
        case 'fr':
            return translationsFr;
        case 'es':
            return translationsEs;
        default:
            return translationsPt;
    }
}

const initialLanguage = getLanguagePreference();
changeLanguage(initialLanguage);