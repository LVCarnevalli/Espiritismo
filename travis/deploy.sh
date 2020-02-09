#! /bin/sh
echo $FIREBASE_API_KEY > .env
echo $FIREBASE_AUTH_DOMAIN >> .env
echo $FIREBASE_DATABASE_URL >> .env
echo $FIREBASE_PROJECT_ID >> .env
echo $GOOGLE_ANALYTICS_TRACKING_ID >> .env

yarn global add expo-cli@3.11.9
expo login -u $EXPO_USERNAME -p $EXPO_PASSWORD --non-interactive
expo build:android
