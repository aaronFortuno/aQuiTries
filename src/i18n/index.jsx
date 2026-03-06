import { createContext, useContext, useState, useCallback } from 'react';
import ca from './ca';
import es from './es';

const locales = { ca, es };

const I18nContext = createContext();

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState('ca');

  const t = useCallback((key, params) => {
    const value = getNestedValue(locales[locale], key) ?? key;
    if (!params) return value;
    return value.replace(/\{(\w+)\}/g, (_, k) => params[k] ?? `{${k}}`);
  }, [locale]);

  return (
    <I18nContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used within I18nProvider');
  return ctx;
}
