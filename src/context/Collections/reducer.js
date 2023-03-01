export const initialState = {
  data: [],
  items: [],
  titles: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setUserCollections": {
      return {
        ...state,
        data: action.payload,
        titles: action.payload.map((i) =>
          Object.assign({}, { value: i._id, label: i.name })
        ),
      };
    }
    case "setCurrentItems": {
      return {
        ...state,
        item: action.payload,
      };
    }
    default:
      return state;
  }
};
