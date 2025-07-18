/* eslint-disable no-console */
export const Logger = {
  log(...args: unknown[]): void {
    console.log(...args);
  },

  warn(...args: unknown[]): void {
    console.warn(...args);
  },

  error(...args: unknown[]): void {
    console.error(...args);
  },

  logException(exception: unknown): void {
    // ここでSentryなどのエラーレポートサービスに例外を報告します
    // 例: Sentry.captureException(exception);

    if (__DEV__) {
      this.error(exception);
    }
  },
};
