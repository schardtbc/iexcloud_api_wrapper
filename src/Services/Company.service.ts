import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

export const company = async (symbol: string): Promise<IEXCompany> => {
  const data: KVP = await iexApiRequest(`/stock/${symbol}/company`);

  return new Company(data);
};

export interface IEXCompany {
  symbol: string;
  companyName: string;
  CEO: string;
  exchange: string;
  industry: string;
  website: string;
  description: string;
  issueType: string;
  sector: string;
  securityName: string | null;
  tags: string[];
  employees: number | null;
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
}

export class Company extends DynamicObject implements IEXCompany {
  public symbol: string = "";
  public companyName: string = "";
  public CEO: string = "";
  public exchange: string = "";
  public industry: string = "";
  public website: string = "";
  public description: string = "";
  public issueType: string = "";
  public sector: string = "";
  public securityName: string = "";
  public tags: string[] = [];
  public employees: number = 0;
  public address: string = "";
  public address2: string = "";
  public city: string = "";
  public state: string = "";
  public zip: string = "";
  public country: string = "";
  public phone: string = "";
}
