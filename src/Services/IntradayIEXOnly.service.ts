import { iexApiRequest, KVP } from "./iexcloud.service";
import { IntradayIEXOnly } from "./IntradayForDate.service"

// TODO: Is this needed
export const intradayIEXOnly = async (
  symbol: string,
  chartLastN: number = 0,
  chartInterval: number = 1,
  changeFromClose: boolean = true,
  chartReset: boolean = false,
  chartSimplify: boolean = false
): Promise<IntradayIEXOnly[]> => {
  let endpoint = `/stock/${symbol}/chart/1d?chartIEXOnly=true`;
  if (chartLastN > 0) {
    endpoint = endpoint + `&chartLast=${chartLastN}`;
  }
  if (chartInterval > 1) {
    endpoint = endpoint + `&chartInterval=${chartInterval}`;
  }
  if (changeFromClose) {
    endpoint = endpoint + `&changeFromClose=true`;
  }
  if (chartReset) {
    endpoint = endpoint + `&chartReset=true`;
  }
  if (chartSimplify) {
    endpoint = endpoint + `&chartSimplify=true`;
  }
  const data: KVP[] = await iexApiRequest(endpoint);

  return data.map((o: KVP) => new IntradayIEXOnly({
    ...o,
    symbol
  }));
};


