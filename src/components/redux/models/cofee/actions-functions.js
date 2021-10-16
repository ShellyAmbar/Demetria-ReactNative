import {
  ADD_COFEE_REQUEST_FAILURE,
  ADD_COFEE_REQUEST_SUCCESS,
  GET_COFEE_REQUEST_FAILURE,
  GET_COFEE_REQUEST_SUCCESS,
  REMOVE_COFEE_REQUEST_FAILURE,
  REMOVE_COFEE_REQUEST_SUCCESS,
  UPDATE_COFEE_REQUEST_FAILURE,
  UPDATE_COFEE_REQUEST_SUCCESS,
  GET_COFEES_REQUEST_SUCCESS,
  GET_COFEES_REQUEST_FAILURE,
} from './types';
//GET

const getCofeesActionSuccess = data => {
  return {
    type: GET_COFEES_REQUEST_SUCCESS,
    payload: data,
  };
};
const getCofeesActionError = error => {
  return {
    type: GET_COFEES_REQUEST_FAILURE,
    err: error,
  };
};

const getCofeeActionSuccess = data => {
  return {
    type: GET_COFEE_REQUEST_SUCCESS,
    payload: data,
  };
};
const getCofeeActionError = error => {
  return {
    type: GET_COFEE_REQUEST_FAILURE,
    err: error,
  };
};
//SET

const addCofeeActionSuccess = data => {
  return {
    type: ADD_COFEE_REQUEST_SUCCESS,
    payload: data,
  };
};
const addCofeeActionError = error => {
  return {
    type: ADD_COFEE_REQUEST_FAILURE,
    err: error,
  };
};

//DELETE

const removeCofeeActionSuccess = (data, CofeeId) => {
  return {
    type: REMOVE_COFEE_REQUEST_SUCCESS,
    payload: data,
    CofeeId,
  };
};
const removeCofeeActionError = error => {
  return {
    type: REMOVE_COFEE_REQUEST_FAILURE,
    err: error,
  };
};

// Update
const updateCofeeActionSuccess = (data, CofeeData) => {
  return {
    type: UPDATE_COFEE_REQUEST_SUCCESS,
    payload: data,
    CofeeData,
  };
};
const updateCofeeActionError = error => {
  return {
    type: UPDATE_COFEE_REQUEST_FAILURE,
    err: error,
  };
};

export {
  getCofeeActionError,
  getCofeeActionSuccess,
  getCofeesActionError,
  getCofeesActionSuccess,
  addCofeeActionError,
  addCofeeActionSuccess,
  removeCofeeActionError,
  removeCofeeActionSuccess,
  updateCofeeActionError,
  updateCofeeActionSuccess,
};
