export const initialState = {
  token: localStorage.getItem('token') || null,
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      action.payload !== undefined &&
        localStorage.setItem('token', action.payload);
      return {
        token: action.payload,
      };

    case 'logout':
      localStorage.removeItem('token');
      return {
        token: null,
      };
    default:
      return state;
  }
};
