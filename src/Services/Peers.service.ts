import { iexApiRequest } from "./iexcloud.service";

export const peers = async (symbol: string): Promise<string[]> => {
  return iexApiRequest(`/stock/${symbol}/peers`);
};
