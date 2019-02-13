import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const balanceSheet = async (
  symbol: string,
  period: string = "quarter"
): Promise<BalanceSheet[]> => {
  const endpoint = `/stock/${symbol}/balance-sheet?period=${period}`;
  const data: KVP = await iexApiRequest(endpoint);
  // console.log(data);
  const result: any[] = data.balancesheet;
  return result.map((o: KVP) => {
    const r = Object.assign(new BalanceSheet(), o);
    r.symbol = symbol;
    return r;
  });
};

export interface IEXBalanceSheet {
  symbol: string;
  reportDate: string;
  currentCash: number;
  shortTermInvestments: number;
  receivables: number;
  inventory: number;
  otherCurrentAssets: number;
  currentAssets: number;
  longTermInvestments: number;
  propertyPlantEquipment: number;
  goodwill: number | null;
  intangibleAssets: number | null;
  otherAssets: number;
  totalAssets: number;
  accountsPayable: number;
  currentLongTermDebt: number;
  otherCurrentLiabilities: number;
  totalCurrentLiabilities: number;
  longTermDebt: number;
  otherLiabilities: number;
  minorityInterest: number;
  totalLiabilities: number;
  commonStock: number;
  retainedEarnings: number;
  treasuryStock: number | null;
  capitalSurplus: number | null;
  shareholderEquity: number;
  netTangibleAssets: number;
}

export class BalanceSheet implements IEXBalanceSheet {
  public symbol: string = "";
  public reportDate: string = "";
  public currentCash: number = 0;
  public shortTermInvestments: number = 0;
  public receivables: number = 0;
  public inventory: number = 0;
  public otherCurrentAssets: number = 0;
  public currentAssets: number = 0;
  public longTermInvestments: number = 0;
  public propertyPlantEquipment: number = 0;
  public goodwill: number | null = 0;
  public intangibleAssets: number | null = 0;
  public otherAssets: number = 0;
  public totalAssets: number = 0;
  public accountsPayable: number = 0;
  public currentLongTermDebt: number = 0;
  public otherCurrentLiabilities: number = 0;
  public totalCurrentLiabilities: number = 0;
  public longTermDebt: number = 0;
  public otherLiabilities: number = 0;
  public minorityInterest: number = 0;
  public totalLiabilities: number = 0;
  public commonStock: number = 0;
  public retainedEarnings: number = 0;
  public treasuryStock: number | null = 0;
  public capitalSurplus: number | null = 0;
  public shareholderEquity: number = 0;
  public netTangibleAssets: number = 0;
}
