import {
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
} from './actions-functions';
import {data} from '../../data';

const getCofees = callback => {
  return dispatch => {
    try {
      dispatch(getCofeesActionSuccess(data));
      callback();
    } catch (error) {
      dispatch(getCofeesActionError(error));
      callback();
    }
  };
};
const getCofee = (cofeeId, callback) => {
  return dispatch => {
    try {
      dispatch(getCofeeActionSuccess(cofeeId));
      callback();
    } catch (error) {
      dispatch(getCofeeActionError(error));
      callback();
    }
  };
};
const addCofee = (cofee, callback) => {
  return dispatch => {
    try {
      dispatch(addCofeeActionSuccess(cofee));
      callback();
    } catch (error) {
      dispatch(addCofeeActionError(error));
      callback();
    }
  };
};

const removeCofee = (cofeeId, callback) => {
  return dispatch => {
    try {
      dispatch(removeCofeeActionSuccess(cofeeId));
      callback();
    } catch (error) {
      dispatch(removeCofeeActionError(error));
      callback();
    }
  };
};

const updateCofee = (cofeeData, callback) => {
  return dispatch => {
    try {
      dispatch(updateCofeeActionSuccess(cofeeData));
      callback();
    } catch (error) {
      dispatch(updateCofeeActionError(error));
      callback();
    }
  };
};

export {getCofee, getCofees, addCofee, updateCofee, removeCofee};
