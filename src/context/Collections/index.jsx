import { useReducer, createContext, useContext } from "react";
import { reducer, initialState } from "./reducer";

export const CollectionsContext = createContext();

export const useCollectionsContext = () => useContext(CollectionsContext);

export const CollectionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CollectionsContext.Provider value={[state, dispatch]}>
      {children}
    </CollectionsContext.Provider>
  );
};
