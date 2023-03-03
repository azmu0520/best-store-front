export const initialState = {
  data: [],
  allCollections: [],
  item: {},
  titles: [],
  collectionAdded: [],
  filter: "All",
  sort: "All",
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
    case "setAllCollections": {
      return {
        ...state,
        allCollections: action.payload,
      };
    }
    case "setSingleItem": {
      return {
        ...state,
        item: action.payload,
      };
    }
    case "setColllectionAdd": {
      return {
        ...state,
        collectionAdded: action.payload,
      };
    }

    case "setAlphabitFilter": {
      return {
        ...state,
        filter: action.payload,
      };
    }

    case "setTopicSort": {
      return {
        ...state,
        sort: action.payload,
      };
    }

    default:
      return state;
  }
};
