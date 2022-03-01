import { get } from "../../Api";
import { endpoints } from "../../Api/configs";
import { toast } from "../../utils";
import types from "./actionTypes";

const setImage = (image) => {
  console.log('setImage action: ', image);
  return { type: types.SET_IMAGE, payload: image };
};

const signup = (data, callback, error) => {
  console.log('action called', data);
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      // const response = await api.post(endpoints.auth.signup, data, true);
      // console.log('signup action: ', response);
      // callback(response)
      dispatch({ type: types.SIGN_UP, payload: data });
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      callback('signup successfull');
    } catch (e) {
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      error(e);
    }
  };
};




const login = (data, callback) => {
  const newData = { ...data, device_id: 'testtoken' };
  console.log('login action called', newData);
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      // const response = await api.post(endpoints.auth.login, newData, false);
      dispatch({ type: types.LOGIN, payload: data }); //payload: response
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      return Promise.resolve('login successful'); //response
    } catch (e) {
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      console.log('error response action: ', e);
      return Promise.reject(e);
    }
  };
};


const logout = (data, callback) => {
  const newData = { ...data, device_id: 'testtoken' };
  console.log('login action called', newData);
  return async (dispatch) => {
    // dispatch({type: types.loaderOn});
    try {
      // const response = await api.post(endpoints.auth.login, newData, false);
      dispatch({ type: types.LOGOUT, payload: data }); //payload: response
      // setTimeout(() =>{ dispatch({type: types.loaderOff})}, 500)
      return Promise.resolve('user logged out'); //response
    } catch (e) {
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      console.log('error response action: ', e);
      return Promise.reject(e);
    }
  };
};



const addPost = (data, callback, error) => {
  console.log('Add post action called', data);
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      // const response = await api.post(endpoints.auth.signup, data, true);
      // console.log('signup action: ', response);
      // callback(response)
      dispatch({ type: types.ADD_POST, payload: data });
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      toast('Post Added successfully');
    } catch (e) {
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      error(e);
    }
  };
};

const getPosts = () => {
  console.log('Get Posts action called');
  return async (dispatch) => {
    // dispatch({type: types.loaderOn});
    try {
      const response = await get('https://jsonplaceholder.typicode.com/posts', {});
      dispatch({ type: types.GET_POSTS, payload: response }); //payload: response
      console.log('Get Posts action success', response);
      // setTimeout(() =>{ dispatch({type: types.loaderOff})}, 500)
      return Promise.resolve(response); //response
    } catch (e) {
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      console.log('Get post error response action: ', e);
      return Promise.reject(e);
    }
  };
};





export const actions = {
  signup,
  login,
  setImage,
  logout,
  getPosts,
  addPost
}