// This code is a legacy and will be modified for good practice.

import { Analytics, PageHit, Event } from 'expo-analytics';
import { GOOGLE_ANALYTICS_TRACKING_ID } from 'react-native-dotenv';

export const pageHit = page => {
  const analytics = new Analytics(GOOGLE_ANALYTICS_TRACKING_ID);
  analytics.hit(new PageHit(page));
};

export const eventSwipeQuestion = () => {
  const analytics = new Analytics(GOOGLE_ANALYTICS_TRACKING_ID);
  analytics.event(new Event('question', 'swipe', null, null));
};

export const eventShareQuestion = () => {
  const analytics = new Analytics(GOOGLE_ANALYTICS_TRACKING_ID);
  analytics.event(new Event('question', 'share', null, null));
};

export const eventBookingQuestion = () => {
  const analytics = new Analytics(GOOGLE_ANALYTICS_TRACKING_ID);
  analytics.event(new Event('question', 'booking', null, null));
};

export const eventSearchQuestion = () => {
  const analytics = new Analytics(GOOGLE_ANALYTICS_TRACKING_ID);
  analytics.event(new Event('question', 'search', null, null));
};
