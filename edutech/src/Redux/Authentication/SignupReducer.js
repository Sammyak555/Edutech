export const initialData = {
  name: "",
  email: "",
  password: "",
  cls: "",
  subject: "",
  state: "",
};

export const signupReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case "name": {
      return {
        ...state,
        name: payload,
      };
    }

    case "email": {
      return {
        ...state,
        email: payload,
      };
    }
    case "password": {
      return {
        ...state,
        password: payload,
      };
    }
    case "class": {
      return {
        ...state,
        cls: payload,
      };
    }

    case "subject": {
      return {
        ...state,
        subject: payload,
      };
    }
    case "state": {
      return {
        ...state,
        state: payload,
      };
    }
    case "initialState": {
      return {
        ...state,
        name: "",
        email: "",
        password: "",
        class: "",
        subject: "",
        state: "",
      };
    }

    default: {
      return state;
    }
  }
};
