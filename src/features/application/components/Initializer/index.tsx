import { useSuspenseQuery } from '@tanstack/react-query';

import { useLocaleFromStorage } from '@/i18n/utils/hooks';

export const Initializer = () => {
  useInitializer();

  return <></>;
};

const useInitializer = () => {
  useLocaleFromStorage();

  useSuspenseQuery({
    queryKey: ['initializer'],
    queryFn: initializeAsync,
  });
};

const initializeAsync = async () => {
  // 初期化処理をここに書く
  return '';
};
