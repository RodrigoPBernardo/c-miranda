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
    titulo: "Contact Us",
    conteudo: "For any information, please contact us by filling out the form below:",
    informacao: "(Exclusive sale to educational and social institutions)",
    nome: "Name:",
    emailText: "Email:",
    telemovel: "Mobile:",
    mensagem: "Message:",
    placeholders: {
        name: "Enter your name...",
        email: "Enter your email...",
        mobile: "Enter your mobile...",
        message: "Enter your proposal..."
    },
    enviar: "Send",
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
    titulo: "Contactez-nous",
    conteudo: "Pour toute information, veuillez nous contacter en remplissant le formulaire ci-dessous:",
    informacao: "(Vente exclusive aux institutions éducatives et sociales)",
    nome: "Nom:",
    emailText: "Email:",
    telemovel: "Mobile:",
    mensagem: "Message:",
    placeholders: {
        name: "Entrez votre nom...",
        email: "Entrez votre email...",
        mobile: "Entraz votre mobile...",
        message: "Entrez voutre proposition..."
    },
    enviar: "Envoyer",
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
    titulo: "Contáctenos",
    conteudo: "Para cualquier información, por favor contáctenos completando el siguiente formulario:",
    informacao: "(Venta exclusiva a instituciones educativas y sociales)",
    nome: "Nombre:",
    emailText: "Correo electrónico:",
    telemovel: "Telemovil:",
    mensagem: "Mensaje:",
    placeholders: {
        name: "Introduzca su nombre...",
        email: "Entrez votre correo electrónico...",
        mobile: "Entraz votre telemovil...",
        message: "Entrez voutre propuesta..."
    },
    enviar: "Enviar",
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
    titulo: "Contacte-nos",
    conteudo: "Para qualquer informação entre em contacto connosco preenchendo o formulário abaixo:",
    informacao: "(Venda exclusiva a instituições de ensino e carácter social)",
    nome: "Nome:",
    emailText: "Email:",
    telemovel: "Telemóvel:",
    mensagem: "Mensagem:",
    placeholders: {
        name: "Insira o seu nome...",
        email: "Insira o seu email...",
        mobile: "Insira o seu telemóvel...",
        message: "Insira a sua proposta..."
    },
    enviar: "Enviar",
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