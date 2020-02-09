// This code is a legacy and will be modified for good practice.

export const FIRST_LAUNCH_INIT = 'FIRST_LAUNCH_INIT';
export const OFFLINE_INIT = 'OFFLINE_INIT';

export function updateNotFirstLaunch(dispatch) {
  dispatch({ type: FIRST_LAUNCH_INIT, value: false });
}

export const updateOffline = () => dispatch => {
  dispatch({ type: OFFLINE_INIT, value: true });
};
