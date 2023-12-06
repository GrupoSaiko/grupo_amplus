import { useState } from "react";

/**
 * @type {import("./types").StateUseClientes}
 */
const INITIAL_STATE = {
  rfc: "",
  isLoading: true,
};

/**
 * 
 * @returns {import("./types").ReturnUseClientes}
 */
export default function useClientes() {
  const [state, setState] = useState(INITIAL_STATE);

  /**
   * Set the rfc to search
   * @param {string} rfc - RFC
   * @returns {void}
   */
  const setRfc = (rfc) =>
    setState((current) => ({
      ...current,
      rfc:rfc.toUpperCase(),
    }));

  return {
    ...state,
    setRfc,
  };
}
