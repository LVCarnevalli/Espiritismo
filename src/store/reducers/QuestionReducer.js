import {
  LOAD_QUESTIONS_INIT,
  LOAD_QUESTIONS_SUCCESS,
  LOAD_QUESTIONS_ERROR,
  UPDATE_QUESTIONS_SUCCESS,
  READ_QUESTIONS,
  READ_BOOKING_QUESTIONS,
  UPDATE_INDEX_QUESTION_BOOKING_QUESTIONS,
} from '../actions/QuestionAction';

const INITIAL_STATE = {
  loading: true,
  result: [],
  resultRead: [],
  resultBookingRead: [],
  error: null,
  indexBookingRead: 0,
};

export default function questionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_QUESTIONS_INIT:
      return { ...state, loading: true, error: null };

    case LOAD_QUESTIONS_SUCCESS:
      return { ...state, loading: false, error: null, ...action.payload };

    case LOAD_QUESTIONS_ERROR:
      return { ...state, loading: false, error: action.payload };

    case UPDATE_QUESTIONS_SUCCESS:
      return { ...state, loading: false, error: null, ...action.payload };

    case READ_QUESTIONS:
      return { ...state, resultRead: action.value };

    case READ_BOOKING_QUESTIONS:
      return { ...state, resultBookingRead: action.value };

    case UPDATE_INDEX_QUESTION_BOOKING_QUESTIONS:
      return { ...state, indexBookingRead: action.value };

    default:
      return state;
  }
}
