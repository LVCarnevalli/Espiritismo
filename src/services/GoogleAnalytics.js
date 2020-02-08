import { Analytics, PageHit, Event } from 'expo-analytics';
import Config from './src/constants/Config';

export const pageHit = page => {
  const analytics = new Analytics(Config.GoogleAnalyticsConfig.trackingId);
  analytics.hit(new PageHit(page));
};

export const eventSwipeQuestion = () => {
  const analytics = new Analytics(Config.GoogleAnalyticsConfig.trackingId);
  analytics.event(new Event('question', 'swipe', null, null));
};

export const eventShareQuestion = () => {
  const analytics = new Analytics(Config.GoogleAnalyticsConfig.trackingId);
  analytics.event(new Event('question', 'share', null, null));
};

export const eventBookingQuestion = () => {
  const analytics = new Analytics(Config.GoogleAnalyticsConfig.trackingId);
  analytics.event(new Event('question', 'booking', null, null));
};

export const eventSearchQuestion = () => {
  const analytics = new Analytics(Config.GoogleAnalyticsConfig.trackingId);
  analytics.event(new Event('question', 'search', null, null));
};
