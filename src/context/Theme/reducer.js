export const initialState = {
  dark: localStorage.getItem("user-theme"),
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setDark": {
      localStorage.setItem("user-theme", "dark");
      return {
        dark: "dark",
      };
    }
    case "setLight": {
      localStorage.removeItem("user-theme");
      return {
        dark: null,
      };
    }
    default:
      return state;
  }
};
