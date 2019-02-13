import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const price = async (symbol: string): Promise<number> => {
  const endpoint = `/stock/${symbol}/price`;
  const result: number = await iexApiRequest(endpoint);
  return result;
};
