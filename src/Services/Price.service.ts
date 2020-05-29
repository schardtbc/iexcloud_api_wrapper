import { iexApiRequest } from "./iexcloud.service";

export const price = async (symbol: string): Promise<number> => {
  return iexApiRequest(`/stock/${symbol}/price`);
};
