export const FIRST_LAUNCH_INIT = 'FIRST_LAUNCH_INIT';
export const OFFLINE_INIT = 'OFFLINE_INIT';
export const LOADING = 'LOADING';

export function updateNotFirstLaunch(dispatch) {
  dispatch({ type: FIRST_LAUNCH_INIT, value: false });
}

export const updateOffline = () => dispatch => {
  dispatch({ type: OFFLINE_INIT, value: true });
};

export function showLoading(dispatch) {
  dispatch({ type: LOADING, value: true });
}

export function hideLoading(dispatch) {
  dispatch({ type: LOADING, value: false });
}
