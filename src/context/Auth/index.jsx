import { useReducer, createContext, useContext } from 'react';
import { Reducer, initialState } from './authReducer';

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
