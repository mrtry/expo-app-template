import 'react-native-gesture-handler/jestSetup';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

// 🔴 __ExpoImportMetaRegistry のモック（必須: Expo内部で使用される）
// Expo winter runtimeが期待するグローバル変数
// see: https://github.com/expo/expo/blob/sdk-53/packages/expo/src/winter/runtime.ts
Object.defineProperty(globalThis, '__ExpoImportMetaRegistry', {
  value: new Map(),
  writable: true,
});
