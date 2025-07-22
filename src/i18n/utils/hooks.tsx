import { useSuspenseQuery } from '@tanstack/react-query';

import { useI18nContext } from '@/i18n/i18n-react';
import type { Locales } from '@/i18n/i18n-types';
import { namespaces } from '@/i18n/i18n-util';
import { loadLocaleAsync, loadNamespaceAsync } from '@/i18n/i18n-util.async';
import { getLocaleFromStorage, saveLocaleToStorage } from '@/i18n/utils/async-storage';

export const useLocaleFromStorage = () => {
  const { data: locale } = useSuspenseQuery({
    queryKey: ['typesafeI18nProvider'],
    queryFn: async () => {
      const locale = await getLocaleFromStorage();
      await loadLocaleAsync(locale);
      for (const namespace of namespaces) {
        await loadNamespaceAsync(locale, namespace);
      }

      return locale;
    },
  });

  return {
    locale,
  };
};

export const useTranslation = () => {
  const context = useI18nContext();

  const { LL } = context;

  return {
    translation: LL,
  };
};

export const useLocale = () => {
  const context = useI18nContext();

  const { locale, setLocale: setter } = context;

  const setLocaleAsync = async (newLocale: Locales) => {
    if (newLocale === locale) return;

    await saveLocaleToStorage(newLocale);
    await loadLocaleAsync(newLocale);
    setter(newLocale);
  };

  return {
    locale,
    setLocaleAsync,
  };
};
