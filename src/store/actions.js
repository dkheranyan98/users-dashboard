import { 
    GET_USERS, 
    SET_PAGE,
    TOGGLE_USER,
    SET_EDIT
} from './types';
import { request } from './../helpers/request';

export const getUsers = (value) => {
  return async (dispatch) => {
      return await request({
          method: 'GET',
          endpoint: `/users?_page=${value}&_limit=10`,
          dispatch,
          type: GET_USERS,
      });
  };
};

export const setPage = (value) => {
    return {
        type: SET_PAGE,
        payload: value,
    };
};

export const toggleUser = (id) => {
    return {
        type: TOGGLE_USER,
        payload: id,
    };
};

export const setEdit = (value) => {
    return {
        type: SET_EDIT,
        payload: value
    }
}