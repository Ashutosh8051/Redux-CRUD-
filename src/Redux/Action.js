import axios from "axios";
import { toast } from "react-toastify";
import {
  ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ,
  MAKE_REQUEST, UPDATE_USER
} from "./Actiontype";

export const makeRequest = () => ({ type: MAKE_REQUEST });
export const failRequest = (err) => ({ type: FAIL_REQUEST, payload: err });
export const geUserList = (data) => ({ type: GET_USER_LIST, payload: data });
export const deleteUser = () => ({ type: DELETE_USER });
export const addUser = () => ({ type: ADD_USER });
export const updateUser = () => ({ type: UPDATE_USER });
export const getUserObj = (data) => ({ type: GET_USER_OBJ, payload: data });

const BASE_URL = 'http://localhost:8000/user';

export const FetchUserList = () => async (dispatch) => {
  dispatch(makeRequest());
  try {
    const response = await axios.get(BASE_URL);
    dispatch(geUserList(response.data));
  } catch (error) {
    console.error('Error fetching user list:', error);
    dispatch(failRequest(error.message));
  }
};

export const RemoveUser = (code) => async (dispatch) => {
  dispatch(makeRequest());
  try {
    await axios.delete(`${BASE_URL}/${code}`);
    dispatch(deleteUser());
  } catch (error) {
    console.error(`Error removing user with code ${code}:`, error);
    dispatch(failRequest(error.message));
  }
};

export const FunctionAddUser = (data) => async (dispatch) => {
  dispatch(makeRequest());
  try {
    await axios.post(BASE_URL, data);
    dispatch(addUser());
    toast.success('User added successfully.');
  } catch (error) {
    console.error('Error adding user:', error);
    dispatch(failRequest(error.message));
  }
};

export const FunctionUpdateUser = (data, code) => async (dispatch) => {
  dispatch(makeRequest());
  try {
    await axios.put(`${BASE_URL}/${code}`, data);
    dispatch(updateUser());
    toast.success('User updated successfully.');
  } catch (error) {
    console.error(`Error updating user with code ${code}:`, error);
    dispatch(failRequest(error.message));
  }
};

export const FetchUserObj = (code) => async (dispatch) => {
  dispatch(makeRequest());
  try {
    const response = await axios.get(`${BASE_URL}/${code}`);
    dispatch(getUserObj(response.data));
  } catch (error) {
    console.error(`Error fetching user with code ${code}:`, error);
    dispatch(failRequest(error.message));
  }
};
