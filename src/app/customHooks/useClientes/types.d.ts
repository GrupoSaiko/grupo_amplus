export interface StateUseClientes {
  rfc: string;
  isLoading: boolean;
}

export interface ReturnUseClientes extends StateUseClientes {
  setRfc: (rfc: string) => void;
}
