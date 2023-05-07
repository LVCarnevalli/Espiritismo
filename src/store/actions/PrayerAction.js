import { getDatabase, onValue, ref } from 'firebase/database';

export const LOAD_PRAYERS_INIT = 'LOAD_PRAYERS_INIT';
export const LOAD_PRAYERS_ERROR = 'LOAD_PRAYERS_ERROR';
export const LOAD_PRAYERS_SUCCESS = 'LOAD_PRAYERS_SUCCESS';
export const UPDATE_PRAYERS_SUCCESS = 'UPDATE_PRAYERS_SUCCESS';
export const OFFLINE_INIT = 'OFFLINE_INIT';

export const loadPrayers = () => dispatch => {
  dispatch({ type: LOAD_PRAYERS_INIT });
  const db = getDatabase();
  const connected = ref(db, '.info/connected');

  onValue(connected, function(snap) {
    if (snap.val() === true) {
      dispatch({ type: OFFLINE_INIT, value: false });

      try {
        const dbqprayer = ref(db, 'Prayer/');
        onValue(dbqprayer, function(snapshot) {
          const obj = snapshot.val();
          const result = Object.keys(obj).map(key => {
            return obj[key];
          });

          dispatch({
            type: LOAD_PRAYERS_SUCCESS,
            payload: {
              result: result,
            },
          });
        });
      } catch (error) {
        dispatch({
          type: LOAD_PRAYERS_ERROR,
          payload: error.code !== undefined ? error.code : error,
        });
      }
    } else {
      dispatch({ type: OFFLINE_INIT, value: true });
    }
  });
};

export const updatePrayers = () => dispatch => {
  try {
    dispatch({ type: OFFLINE_INIT, value: false });

    const dbqprayer = ref(db, 'Prayer/');
    onValue(dbqprayer, function(snapshot) {
      const obj = snapshot.val();
      const result = Object.keys(obj).map(key => {
        return obj[key];
      });

      dispatch({
        type: UPDATE_PRAYERS_SUCCESS,
        payload: {
          result: result,
        },
      });
    });
  } catch (error) {}
};
