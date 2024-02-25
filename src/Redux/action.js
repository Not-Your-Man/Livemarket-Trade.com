import {
  SET_WALLET,
  SET_TOKEN,
  SET_USER_DETAILS,
  SET_ADMIN_DETAILS,
  LOGOUT,
  SET_ADUSER,
} from "./actionTypes";

export const setWalet = (wallet) => ({
  type: SET_WALLET,
  payload: wallet,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const setUserDetails = (userDetails) => ({
  type: SET_USER_DETAILS,
  payload: userDetails,
});
export const setAdminDetails = (adminDetails) => ({
  type: SET_ADMIN_DETAILS,
  payload: adminDetails,
});
export const logout = () => ({
  type: LOGOUT,
});

export const setAdUser = (user) => ({
  type: SET_ADUSER,
  payload: user,
});

// redux/actions/authActions.js
// export const loginRequest = () => ({
//   type: 'LOGIN_REQUEST',
// });

// export const loginSuccess = (user) => ({
//   type: 'LOGIN_SUCCESS',
//   payload: user,
// });

// export const loginFailure = (error) => ({
//   type: 'LOGIN_FAILURE',
//   payload: error,
// });

// // Add similar actions for signup if needed