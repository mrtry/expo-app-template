import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-locale/polyfill';
import '@formatjs/intl-pluralrules/polyfill';

import type { ReactNode } from 'react';

import TypesafeI18nProvider from '@/i18n/i18n-react';
import { useLocaleFromStorage } from '@/i18n/utils/hooks';

export type I18nProviderProps = {
  children: ReactNode;
};

export const I18nProvider = (props: I18nProviderProps) => {
  const { children } = props;
  const { locale } = useLocaleFromStorage();

  return <TypesafeI18nProvider locale={locale}>{children}</TypesafeI18nProvider>;
};
