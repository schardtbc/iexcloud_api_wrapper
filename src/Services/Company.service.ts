import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

export const company = async (symbol: string): Promise<Company> => {
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
  securityName: string | null
  tags: string[];
  employees: number | null
}

export class Company extends DynamicObject {
  public symbol: string = "";
  public companyName: string = "";
  public CEO: string="";
  public exchange: string = "";
  public industry: string = "";
  public website: string = "";
  public description: string = "";
  public issueType: string = "";
  public sector: string = "";
  public securityName: string = "";
  public tags: string[] = [];
  public employees: number = 0;
}
