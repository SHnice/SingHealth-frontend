import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import { useAuth } from "../context/auth";

export const Protected = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <Navigate
        to={"/"}
        replace={true}
      ></Navigate>
    );
  }
  return children;
};

export const Public = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return children;
  }
  return (
    <Navigate
      to={"/"}
      replace={true}
    ></Navigate>
  );
};

export const Admin = ({ children }) => {
  const auth = useAuth()

  if (auth?.user?.admin) {
    return children;
  }
  return (
    <Navigate
      to={"/"}
      replace={true}
    ></Navigate>
  );
};