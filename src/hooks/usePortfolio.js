import { useContext } from "react";
import { portContext } from "../contexts/portContext";
function usePortfolio() {
  return useContext(portContext);
}
export { usePortfolio };
