import {
  CREATE_DASHBOARD_SUCCESS,
  CREATE_DASHBOARD_REQUEST,
  CREATE_DASHBOARD_ERROR,
} from '../constant/dashboard.types';

export const dashboardReducer = (state = { dashboard: []}, action) => {
  switch (action.type) {
    case CREATE_DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboard: [...state.dashboard, action.payload],
        loading: false,
        error: '',
      };
    case CREATE_DASHBOARD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_DASHBOARD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
