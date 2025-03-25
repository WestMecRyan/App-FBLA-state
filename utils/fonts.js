import * as Font from 'expo-font';

export const customFonts = {
  'pixel-font': require('../assets/fonts/pixel-font.woff'),
};

export const loadFonts = async () => {
  await Font.loadAsync(customFonts);
};