import { ThemeProvider } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { Suspense } from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationTheme, PaperTheme } from '@/constants/Colors';
import { Initializer } from '@/features/application/components/Initializer';
import { I18nProvider } from '@/i18n/utils/provider';
import { queryClient } from '@/lib/react-query/client';

export type ApplicationRootProps = {
  children: React.ReactNode;
};

export const ApplicationRoot = (props: ApplicationRootProps) => {
  const { children } = props;

  const onLayoutRootView = () => {
    SplashScreen.hide();
  };

  return (
    <>
      <StatusBar style="dark" />
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={undefined}>
          <Initializer />
          <PaperProvider theme={PaperTheme}>
            <ThemeProvider value={NavigationTheme}>
              <I18nProvider>
                <SafeAreaView
                  onLayout={onLayoutRootView}
                  style={{ flex: 1, backgroundColor: PaperTheme.colors.elevation.level2 }}
                >
                  {children}
                </SafeAreaView>
              </I18nProvider>
            </ThemeProvider>
          </PaperProvider>
        </Suspense>
      </QueryClientProvider>
    </>
  );
};
