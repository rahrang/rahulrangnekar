import getHours from 'date-fns/get_hours';

const colors = {
  black: '#262626',
  white: '#FAFAED',
  blue: '#4B75B9',
  gold: '#F0CE3B'
};

// 7am - 6pm
const lightTheme = {
  bgColor: colors.white,
  textColor: colors.black,
  headingColor: colors.blue,
  linkColor: colors.blue,
  activeColor: colors.blue,
  linkHoverColor: colors.gold
};

// 6pm - 7am
const darkTheme = {
  bgColor: colors.black,
  textColor: colors.white,
  headingColor: colors.white,
  linkColor: colors.gold,
  activeColor: colors.gold,
  linkHoverColor: colors.blue
};

export default {
  colors: (time => {
    const currHour = getHours(time);
    if (currHour < 7 || currHour > 17) return darkTheme;
    return lightTheme;
    // if (currHour < 7 || currHour > 17) return lightTheme;
    // return darkTheme;
  })(Date.now())
};
