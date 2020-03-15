// This code is a legacy and will be modified for good practice.

import {
  LOAD_PRAYERS_INIT,
  LOAD_PRAYERS_SUCCESS,
  LOAD_PRAYERS_ERROR,
  UPDATE_PRAYERS_SUCCESS,
  READ_PRAYERS,
  READ_BOOKING_PRAYERS,
  UPDATE_INDEX_PRAYER_BOOKING_PRAYERS,
} from '../actions/PrayerAction';

const INITIAL_STATE = {
  loading: true,
  result: [],
  error: null,
};

export default function prayerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_PRAYERS_INIT:
      return { ...state, loading: true, error: null };

    case LOAD_PRAYERS_SUCCESS:
      return { ...state, loading: false, error: null, ...action.payload };

    case LOAD_PRAYERS_ERROR:
      return { ...state, loading: false, error: action.payload };

    case UPDATE_PRAYERS_SUCCESS:
      return { ...state, loading: false, error: null, ...action.payload };

    default:
      return state;
  }
}
