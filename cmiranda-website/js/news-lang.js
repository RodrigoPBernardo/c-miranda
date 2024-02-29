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
    tituloNovidades: "News",
    novidades1: "Example 1",
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
    tituloNovidades: "Nouvelles",
    novidades1: "Exemple 1",
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
    tituloNovidades: "Noticias",
    novidades1: "Ejemplo 1",
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
    homeMobile: "Página de inicio",
    sobreNosMobile: "Sobre nosotros",
    catalogosMobile: "Catálogos",
    novidadesMobile: "Noticias",
    contactosMobile: "Contactos",
    tituloNovidades: "Novidades",
    novidades1: "Exemplo 1",
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