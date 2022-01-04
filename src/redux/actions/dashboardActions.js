import {
  CREATE_DASHBOARD_SUCCESS,
  CREATE_DASHBOARD_REQUEST,
  CREATE_DASHBOARD_ERROR,
} from '../constant/dashboard.types';

export const createDashboardRequest = () => {
  return {
    type: CREATE_DASHBOARD_REQUEST,
  }
};

export const createDashboardSuccess = (newContent) => async (dispatch, getState) => {
  dispatch({
    type: CREATE_DASHBOARD_SUCCESS,
    payload: newContent,
  })
  localStorage.setItem('dashboard', JSON.stringify(newContent));
};

export const createDashboardError = (error) => {
  return {
    type: CREATE_DASHBOARD_ERROR,
    payload: error,
  };
};
