import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

export const logoURL = async (symbol: string): Promise<Logo> => {
  const data: KVP = await iexApiRequest(`/stock/${symbol}/logo`);

  return new Logo(data);
};

export interface IEXLogo {
  url: string;
}

export class Logo extends DynamicObject {
  public url: string = "";
}
