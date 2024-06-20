const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');
const Handlebars = require('handlebars');
const i18next = require('i18next');
const HandlebarsI18n = require('handlebars-i18n');
const htmlEntities = require('html-entities');

const langs = ['en', 'ja'];

i18next.init({
    resources: {
        'en': {
            translation: JSON.parse(fs.readFileSync(`i18n/translations.en.json`, 'utf-8'))
        },
        'ja': {
            translation: JSON.parse(fs.readFileSync(`i18n/translations.ja.json`, 'utf-8'))
        }
    },
    lng: 'en',
    compatibilityJSON: 'v2'
});

const data = {};
HandlebarsI18n.init();

langs.forEach((lang) => {fs.mkdirSync(`pages/${lang}`, {recursive: true})});

globSync('pages/hbs/*.html').forEach((file) => {
    console.log(`::: ${file}`);
    const tmpl = fs.readFileSync(file, 'utf-8');
    const compiled = Handlebars.compile(tmpl);
    langs.forEach((lang) => {
        i18next.changeLanguage(lang);
        const decoded = htmlEntities.decode(compiled(data));
        fs.writeFileSync(`pages/${lang}/${path.basename(file)}`, decoded);
    });
})
