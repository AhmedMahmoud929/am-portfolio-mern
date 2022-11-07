import { useContext } from "react";
import { dashContext } from "../contexts/dashContext";
function useDash() {
  return useContext(dashContext);
}
export { useDash };
