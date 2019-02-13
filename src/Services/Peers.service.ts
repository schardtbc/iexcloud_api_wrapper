import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const peers = async (symbol: string): Promise<string[]> => {
  const endpoint = `/stock/${symbol}/peers`;
  const data: string[] = await iexApiRequest(endpoint);
  return data;
};
