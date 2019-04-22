import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const ceoCompensation = async (symbol: string): Promise<CeoCompensation> => {
  const endpoint = `/stock/${symbol}/ceo-compensation`;
  const data: KVP = await iexApiRequest(endpoint);
  // console.log(data);
  const result = Object.assign(new CeoCompensation(), data);
  return result;
};

export interface IEXCeoCompensation {
    symbol: string;
    name: string;
    companyName: string;
    location: string;
    salary: number;
    bonus: number;
    stockAwards: number;
    optionAwards: number;
    nonEquityIncentives: number;
    pensionAndDeferred: number;
    otherComp: number;
    total: number;
    year: string;
}

export class CeoCompensation implements IEXCeoCompensation {
    public symbol: string = "";
    public name: string = "";
    public companyName: string = "";
    public location: string = "";
    public salary: number = 0;
    public bonus: number = 0;
    public stockAwards: number = 0;
    public optionAwards: number = 0;
    public nonEquityIncentives: number = 0;
    public pensionAndDeferred: number = 0;
    public otherComp: number = 0;
    public total: number = 0;
    public year: string = "";
}