import Vue from 'vue'
import VueI18n from 'vue-i18n'

const DEFAULT_LOCALE = 'en';

Vue.use(VueI18n)

function loadLocaleMessages() {
    const locales = require.context(
        "./locales",
        true,
        /[A-Za-z0-9-_,\s]+\.json$/i
    );
    const messages = {};
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key);
        }
    });
    return messages;
}

export default new VueI18n({
    locale: DEFAULT_LOCALE || 'ar',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ar',
    messages: loadLocaleMessages()
})