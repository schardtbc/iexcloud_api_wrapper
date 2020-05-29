import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

export const ceoCompensation = async (symbol: string): Promise<CeoCompensation> => {
  const data: KVP = await iexApiRequest(`/stock/${symbol}/ceo-compensation`);

  return new CeoCompensation(data);
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

export class CeoCompensation extends DynamicObject implements IEXCeoCompensation {
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