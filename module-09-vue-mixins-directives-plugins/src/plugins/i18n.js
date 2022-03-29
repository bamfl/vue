export default {
  install(app, options) {
    let currnetLang = 'ru';

    const changeLang = lang => {
      currnetLang = lang;
    }

    app.config.globalProperties.$i18n = (key) => {
      return options[currnetLang][key] || 'wrong key';
    }

    app.provide('changeLangI18n', changeLang);
  }
}
