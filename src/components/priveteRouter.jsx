import { useAuth } from "./context/Auth_contexts";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRouter() {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return currentUser ? <Outlet /> : <Navigate to="/login_page" />;
}
