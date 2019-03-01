import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const stats = {
  
}

export const keyStats = async (symbol: string, stat?: keyof KeyStats): Promise<KeyStats> => {
  const endpoint = `/stock/${symbol}/stats${stat ? `/${stat}` : ''}`;
  const res = await iexApiRequest(endpoint);
  var data: KVP;
  if (stat) {
    data = {};
    data[stat] = res;
    data[symbol] = symbol;
  } else {
    data = res;
  }
  return Object.assign(new KeyStats(), data);
};

export interface IEXKeyStats {
  companyName: string;
  marketcap: number;
  week52high: number;
  week52low: number;
  week52change: number;
  sharesOutstanding: number;
  float: number;
  symbol: string;
  avg10Volume: number;
  avg30Volume: number;
  day200MovingAvg: number;
  day50MovingAvg: number;
  employees: number;
  maxChangePercent: number;
  year5ChangePercent: number;
  year2ChangePercent: number;
  year1ChangePercent: number;
  ytdChangePercent: number;
  month6ChangePercent: number;
  month3ChangePercent: number;
  month1ChangePercent: number;
  day30ChangePercent: number;
  day5ChangePercent: number;
}

export class KeyStats implements IEXKeyStats {
  public companyName: string = "";
  public marketcap: number = 0;
  public week52high: number = 0;
  public week52low: number = 0;
  public week52change: number = 0;
  public sharesOutstanding: number = 0;
  public float: number = 0;
  public symbol: string = "";
  public avg10Volume: number = 0;
  public avg30Volume: number = 0;
  public day200MovingAvg: number = 0;
  public day50MovingAvg: number = 0;
  public employees: number = 0;
  public maxChangePercent: number = 0;
  public year5ChangePercent: number = 0;
  public year2ChangePercent: number = 0;
  public year1ChangePercent: number = 0;
  public ytdChangePercent: number = 0;
  public month6ChangePercent: number = 0;
  public month3ChangePercent: number = 0;
  public month1ChangePercent: number = 0;
  public day30ChangePercent: number = 0;
  public day5ChangePercent: number = 0;
}
