import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const company = async (symbol: string): Promise<Company> => {
  const endpoint = `/stock/${symbol}/company`;
  const data: KVP = await iexApiRequest(endpoint);
  // console.log(data);
  const result = Object.assign(new Company(), data);
  return result;
};

export interface IEXCompany {
  symbol: string;
  companyName: string;
  exchange: string;
  industry: string;
  website: string;
  description: string;
  issueType: string;
  sector: string;
  tags: string[];
}

export class Company {
  public symbol: string = "";
  public companyName: string = "";
  public exchange: string = "";
  public industry: string = "";
  public website: string = "";
  public description: string = "";
  public issueType: string = "";
  public sector: string = "";
  public tags: string[] = [];
}
