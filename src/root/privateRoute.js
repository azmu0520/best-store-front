import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/Auth";

const PrivateRoute = ({ children }) => {
  const [{ token }] = useAuthContext();

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default PrivateRoute;
