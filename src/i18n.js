import {createI18n} from 'vue-i18n'

const messages = Object.fromEntries(
    Object.entries(import.meta.glob('./locales/*.json', { eager: true }))
      .map(([key, value]) => {
          const locale = key.match(/([\w-]+)\.json$/)[1];
          return [locale,value.default];
      })
);

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
});

export default i18n;
