import * as Analytics from 'expo-firebase-analytics';

const pageHit = currentRouteName => {
  Analytics.setCurrentScreen (
    currentRouteName,
    currentRouteName
  );
};

const eventSwipeQuestion = () => {
  Analytics.logEvent('SwipeQuestion', {});
};

const eventShareQuestion = () => {
  Analytics.logEvent('ShareQuestion', {});
};

const eventBookingQuestion = () => {
  Analytics.logEvent('StartBooking', {});
};

const eventSearchQuestion = () => {
  Analytics.logEvent('SearchQuestion', {});
};

const eventSelectPrayer = name => {
  Analytics.logEvent('SelectPrayer', {});
};

const eventSelectBook = name => {
  Analytics.logEvent('SelectKardecBook', {});
};

export {
  pageHit,
  eventSwipeQuestion,
  eventShareQuestion,
  eventBookingQuestion,
  eventSearchQuestion,
  eventSelectPrayer,
  eventSelectBook,
};
