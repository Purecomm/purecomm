// Navigation, Desktop & Mobile //
languageOptions = ['en', 'zh-cn', 'zh-hk', 'jp-jp', 'ko-kr', 'th-th'];
languageDictionary = {
    'en': 'en',
    'en-gb': 'en',
    'en-us': 'en',
    'zh-cn': 'zh-cn',
    'zh-hk': 'zh-ch',
    'ko-kr': 'ko-kr',
    'th-th': 'th-th',
    'jp-jp': 'jp-jp',
} // FILL IN THE REST OF THESE

// This is old and is just here for reference vv
/*function checkLanguage() {
    let lang = localStorage.getItem('lang'); 
    if (!lang) {
        lang = navigator.language.toLocaleLowerCase();
    }
    if (lang) {
        let userLang = languageDictionary[lang];

        let urlLang = window.location.pathname.split('/')[1];

        if (languageOptions.indexOf(urlLang) !== -1 && urlLang !== userLang) {
            changeLanguage(userLang);
        }
    }
};*/

function checkLanguage() {
    let lang = localStorage.getItem('lang');
    let urlLang = window.location.pathname.split('/')[1];

    if(!isNullOrWhitespace(urlLang)) {
        changeLanguage(urlLang);
    }
    else {
        if (!lang) {
            lang = navigator.language.toLocaleLowerCase();
        }
        if (lang) {
            let userLang = languageDictionary[lang];
            changeLanguage(userLang);
        }
    }
};

function isNullOrWhitespace( input ) {
    return !input || !input.trim();
}

checkLanguage();

// Changing language
function changeLanguage(lang) {
    if (languageOptions.indexOf(lang) === -1) {
        return;
    }
    localStorage.setItem('lang', lang);
    window.location.href = '/' + lang;
}