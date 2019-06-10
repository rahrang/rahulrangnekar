import * as storage from './storage';
import _includes from 'lodash/includes';

const STORAGE_THEME_KEY = 'css-theme';
export const LIGHT_THEME_KEY = 'light';
export const DARK_THEME_KEY = 'dark';

const colors = {
  dark: '#262626',
  darker: '#1A1A1A',
  light: '#FAFAED',
  lighter: '#FFF',
  blue: '#4B75B9',
  gold: '#F0CE3B'
};

const theme = {
  contentWidth: '900px',
  br: `0.25rem`
};

const lightTheme = {
  bxs: '0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23)',
  bgColor: colors.light,
  textColor: colors.dark,
  headingColor: colors.blue,
  linkColor: colors.blue,
  activeColor: colors.blue,
  linkHoverColor: colors.gold,
  offBgColor: colors.lighter
};

const darkTheme = {
  bxs: '0px 0px 2px 1px white',
  bgColor: colors.darker,
  textColor: colors.light,
  headingColor: colors.light,
  linkColor: colors.gold,
  activeColor: colors.gold,
  linkHoverColor: colors.blue,
  offBgColor: colors.dark
};

const themeKeyMap = {
  [LIGHT_THEME_KEY]: {
    colors: {
      ...lightTheme,
      ...colors
    },
    ...theme
  },
  [DARK_THEME_KEY]: {
    colors: {
      ...darkTheme,
      ...colors
    },
    ...theme
  }
};

export const getInitialTheme = () => {
  const themeKey = storage.get(STORAGE_THEME_KEY);
  if (_includes([LIGHT_THEME_KEY, DARK_THEME_KEY], themeKey)) {
    return themeKey;
  }
  return LIGHT_THEME_KEY;
};

export const getTheme = themeKey => {
  return themeKeyMap[themeKey] || themeKeyMap[LIGHT_THEME_KEY];
};

export const setTheme = themeKey => {
  storage.set(STORAGE_THEME_KEY, themeKey);
};
