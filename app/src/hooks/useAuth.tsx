import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";

const useAuth = () => {
  const { token, user, login, logout } = useContext(AuthContext);

  return {
    token,
    user,
    login,
    logout,
  };
};

export default useAuth;