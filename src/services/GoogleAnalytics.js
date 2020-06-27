import { Analytics, Event, PageHit } from 'expo-analytics';
import { GOOGLE_ANALYTICS_TRACKING_ID } from 'react-native-dotenv';

const analytics = new Analytics(GOOGLE_ANALYTICS_TRACKING_ID);

const pageHit = page => {
  analytics.hit(new PageHit(page));
};

const eventSwipeQuestion = () => {
  analytics.event(new Event('question', 'swipe', null, null));
};

const eventShareQuestion = () => {
  analytics.event(new Event('question', 'share', null, null));
};

const eventBookingQuestion = () => {
  analytics.event(new Event('question', 'booking', null, null));
};

const eventSearchQuestion = () => {
  analytics.event(new Event('question', 'search', null, null));
};

const eventSelectPrayer = name => {
  analytics.event(new Event('prayer', name, null, null));
};

const eventSelectBook = name => {
  analytics.event(new Event('book', name, null, null));
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
