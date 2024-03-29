import { getDatabase, onValue, ref } from 'firebase/database';

export const LOAD_QUESTIONS_INIT = 'LOAD_QUESTIONS_INIT';
export const LOAD_QUESTIONS_ERROR = 'LOAD_QUESTIONS_ERROR';
export const LOAD_QUESTIONS_SUCCESS = 'LOAD_QUESTIONS_SUCCESS';
export const UPDATE_QUESTIONS_SUCCESS = 'UPDATE_QUESTIONS_SUCCESS';
export const OFFLINE_INIT = 'OFFLINE_INIT';
export const READ_QUESTIONS = 'READ_QUESTIONS';
export const READ_BOOKING_QUESTIONS = 'READ_BOOKING_QUESTIONS';
export const UPDATE_INDEX_QUESTION_BOOKING_QUESTIONS = 'UPDATE_INDEX_QUESTION_BOOKING_QUESTIONS';

export function readQuestions(dispatch, question) {
  dispatch({ type: READ_QUESTIONS, value: question });
}

export function readBookingQuestions(dispatch, question) {
  dispatch({ type: READ_BOOKING_QUESTIONS, value: question });
}

export function updateIndexBookingQuestions(dispatch, index) {
  dispatch({ type: UPDATE_INDEX_QUESTION_BOOKING_QUESTIONS, value: index });
}

export const loadQuestions = () => dispatch => {
  dispatch({ type: LOAD_QUESTIONS_INIT });
  const db = getDatabase();
  const connected = ref(db, '.info/connected');

  onValue(connected, function(snap) {
    if (snap.val() === true) {
      dispatch({ type: OFFLINE_INIT, value: false });

      try {
        const dbquestion = ref(db, 'Question/');
        onValue(dbquestion, function(snapshot) {
          const obj = snapshot.val();
          const result = Object.keys(obj).map(key => {
            return obj[key];
          });

          dispatch({
            type: LOAD_QUESTIONS_SUCCESS,
            payload: {
              result: result,
            },
          });
        });
      } catch (error) {
        dispatch({
          type: LOAD_QUESTIONS_ERROR,
          payload: error.code !== undefined ? error.code : error,
        });
      }
    } else {
      dispatch({ type: OFFLINE_INIT, value: true });
    }
  });
};

export const updateQuestions = () => dispatch => {
  try {
    dispatch({ type: OFFLINE_INIT, value: false });

    const dbquestion = ref(db, 'Question/');
    onValue(dbquestion, function(snapshot) {
      const obj = snapshot.val();
      const result = Object.keys(obj).map(key => {
        return obj[key];
      });

      dispatch({
        type: UPDATE_QUESTIONS_SUCCESS,
        payload: {
          result: result,
        },
      });
    });
  } catch (error) {}
};
