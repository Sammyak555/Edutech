import {
  signupLoading,
  signupSuccess,
  signupFailure,
  loginLoading,
  loginFailure,
  loginSuccess,
} from "./actiontype";

const initialState = {
  signloading: false,
  signSuccess: "",
  signFailure: "",

  loginloading: false,
  loginSuccess: "",
  loginFailure: "",
  isAuthenticated: false,
};

export const Authentication = (state = initialState, { type, payload }) => {
  switch (type) {
    case signupLoading: {
      return {
        ...state,
        signloading: true,
        signSuccess: "",
        signFailure: "",
      };
    }

    case signupSuccess: {
      return {
        ...state,
        signloading: false,
        signSuccess: payload,
        signFailure: "",
      };
    }
    case signupFailure: {
      return {
        ...state,
        signloading: false,
        signSuccess: "",
        signFailure: payload,
      };
    }
    case loginLoading: {
      return {
        ...state,
        loginloading: true,
        loginSuccess: "",
        loginFailure: "",
        isAuthenticated: false,
      };
    }

    case loginSuccess: {
      return {
        ...state,
        loginloading: false,
        loginSuccess: payload,
        loginFailure: "",
        isAuthenticated: true,
      };
    }

    case loginFailure: {
      return {
        ...state,
        loginloading: false,
        loginSuccess: "",
        loginFailure: payload,
        isAuthenticated: false,
      };
    }
    case "logout": {
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    default: {
      return state;
    }
  }
};
