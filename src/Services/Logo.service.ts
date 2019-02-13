import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const logo = async (symbol: string): Promise<Logo> => {
  const endpoint = `/stock/${symbol}/logo`;
  const data: KVP = await iexApiRequest(endpoint);
  const result = Object.assign(new Logo(), data);
  return result;
};

export interface IEXLogo {
  url: string;
}

export class Logo {
  public url: string = "";
}
