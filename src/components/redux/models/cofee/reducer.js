import {
  ADD_COFEE_REQUEST_FAILURE,
  ADD_COFEE_REQUEST_SUCCESS,
  GET_COFEE_REQUEST_FAILURE,
  GET_COFEE_REQUEST_SUCCESS,
  REMOVE_COFEE_REQUEST_FAILURE,
  REMOVE_COFEE_REQUEST_SUCCESS,
  UPDATE_COFEE_REQUEST_FAILURE,
  UPDATE_COFEE_REQUEST_SUCCESS,
  GET_COFEES_REQUEST_FAILURE,
  GET_COFEES_REQUEST_SUCCESS,
} from './types';
const initialState = {
  cofees: [],
  err: '',
  message: '',
  cofee: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COFEE_REQUEST_SUCCESS: {
      const cofee = action.payload;

      return {...state, cofee, err: ''};
    }
    case GET_COFEE_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }
    case GET_COFEES_REQUEST_SUCCESS: {
      const cofees = action.payload;
      return {...state, cofees: [...cofees], err: ''};
    }
    case GET_COFEES_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }
    case ADD_COFEE_REQUEST_SUCCESS: {
      const message = action.payload.message;
      const cofee = action.payload.cofee;

      return {
        ...state,
        cofees: [...state.cofees, cofee],
        err: '',
        message,
      };
    }

    case ADD_COFEE_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }

    case REMOVE_COFEE_REQUEST_SUCCESS: {
      const message = action.payload.message;
      const cofeeId = action.cofeeId;

      const newList = state.cofees.filter(el => el._id !== cofeeId);

      return {...state, cofees: [...newList], message, err: ''};
    }

    case REMOVE_COFEE_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }

    case UPDATE_COFEE_REQUEST_SUCCESS: {
      const message = action.payload.message;
      const cofeeId = action.cofeeData._id;
      const cofeeData = action.cofeeData;
      console.log('cofeeId', cofeeData._id);
      const newList = state.cofees.map(el =>
        el._id === cofeeId ? {...cofeeData} : el,
      );

      return {...state, cofees: [...newList], message, err: ''};
    }

    case UPDATE_COFEE_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }

    default:
      return state;
  }
};

export {reducer};
