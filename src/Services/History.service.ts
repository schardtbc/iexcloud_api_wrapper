import { iexApiRequest } from "./iexcloud.service";

import { Intraday } from "./Intraday.service"

import { EndOfDay } from "./EndOfDay.service"

interface KVP {
  [k: string]: any;
}

type timePeriod = "1d" | "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";

export const history = async (
  symbol: string,
  {changeFromClose,
   closeOnly,
   date,
   iexOnly,
   lastN,
   interval,
   period,
   reset,
   simplify}  =  
  {changeFromClose: true,
   closeOnly: false,
   date: "",
   iexOnly: false,
   interval: 1,
   lastN: 0,
   period: "1m",
   reset: false,
   simplify: false}
): Promise<Array<(EndOfDay | Intraday)>> => {
  let intraday = false;
  if (date.length >0){
      date = date.replace(/-/g,"");
      period = 'date/{date}'
      intraday = true;
  }
  if (period === '1d'){
      intraday = true;
  }
  let endpoint = `/stock/${symbol}/chart/${period}?chartCloseOnly={closeOnly}`;
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