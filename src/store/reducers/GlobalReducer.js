// This code is a legacy and will be modified for good practice.

import { FIRST_LAUNCH_INIT, OFFLINE_INIT } from '../actions/GlobalAction';

const INITIAL_STATE = {
  firstLaunch: true,
  offline: false,
};

export default function globalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FIRST_LAUNCH_INIT:
      return { ...state, firstLaunch: action.value };

    case OFFLINE_INIT:
      return { ...state, offline: action.value };

    default:
      return state;
  }
}
