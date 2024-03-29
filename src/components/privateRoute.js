import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const { token } = useAuth();
  return token ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
}
