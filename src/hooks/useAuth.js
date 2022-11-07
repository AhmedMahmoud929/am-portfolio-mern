import { useContext } from "react";
import { authContext } from "../contexts/authContext";
function useAuth() {
  return useContext(authContext);
}
export { useAuth };
