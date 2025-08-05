import AsyncStorage from '@react-native-async-storage/async-storage';

import type { Locales } from '@/i18n/i18n-types';
import { baseLocale, isLocale } from '@/i18n/i18n-util';

const KEY_LOCALE = 'locale';

export async function getLocaleFromStorage(): Promise<Locales> {
  const locale = await AsyncStorage.getItem(KEY_LOCALE).catch(() => undefined);
  if (locale && isLocale(locale)) {
    return locale;
  }
  return baseLocale;
}

export async function saveLocaleToStorage(locale: Locales): Promise<void> {
  await AsyncStorage.setItem(KEY_LOCALE, locale);
}
