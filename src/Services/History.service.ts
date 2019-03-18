import { iexApiRequest } from "./iexcloud.service";

import { Intraday } from "./Intraday.service"

import { EndOfDay } from "./EndOfDay.service"

interface KVP {
  [k: string]: any;
}

type timePeriod = "1d" | "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";

export const history = async (
  symbol: string,
  {changeFromClose= true,
   closeOnly=  false,
   chartByDay=false,
   date = "",
   iexOnly = false,
   lastN = 0,
   interval = 1,
   period = "1m",
   reset = false,
   simplify = false}: 
  {changeFromClose?:boolean,
   closeOnly?:boolean ,
   chartByDay?: boolean,
   date?: string,
   iexOnly?: boolean,
   interval?: number,
   lastN?: number,
   period?: string,
   reset?: boolean,
   simplify?: boolean} = {}
): Promise<Array<(EndOfDay | Intraday)>> => {
  let intraday = false;
  let endpoint;
  if (date.length >0){
      date = date.replace(/-/g,"");
      if (chartByDay){
        period = `date/${date}?chartByDay=true`
      } else{
      period = `date/${date}?chartByDay=false`
      intraday = true;
      }
  }
  if (period === '1d'){
      intraday = true;
  }
  if (date.length>0) {
     endpoint = `/stock/${symbol}/chart/${period}&chartCloseOnly=${closeOnly}`;
  } else {
      endpoint = `/stock/${symbol}/chart/${period}?chartCloseOnly=${closeOnly}`;
  }
  if (iexOnly){
      endpoint = endpoint+"&chartIEXOnly=true";
  }
  if (lastN > 0) {
    endpoint = endpoint + `&chartLast=${lastN}`;
  }
  if (interval > 1) {
    endpoint = endpoint + `&chartInterval=${interval}`;
  }
  if (changeFromClose) {
    endpoint = endpoint + '&changeFromClose=true';
  }
  if (reset) {
    endpoint = endpoint + '&chartReset=true';
  }
  if (simplify) {
    endpoint = endpoint + '&chartSimplify=true';
  }
  const data: KVP[] = await iexApiRequest(endpoint);
  const result = data.map((o: KVP) => {
    let r;
    if (!intraday) {  
        r = Object.assign(new EndOfDay(), o);
    } else {
        r = Object.assign(new Intraday(), o);
    }
    r.symbol = symbol;
    return r;
  });
  return result;
};