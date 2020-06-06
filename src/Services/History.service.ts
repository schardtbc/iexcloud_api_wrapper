import { EndOfDay } from "./EndOfDay.service";
import { iexApiRequest, KVP } from "./iexcloud.service";
import { Intraday } from "./Intraday.service";

type timePeriod =
  | "1d"
  | "1m"
  | "3m"
  | "6m"
  | "ytd"
  | "1y"
  | "2y"
  | "5y"
  | "dynamic"
  | "max"
  | "date";

export const history = async (
  symbol: string,
  {
    changeFromClose = true,
    chartCloseOnly = false,
    chartByDay = false,
    date,
    chartIEXOnly = false,
    lastN = 0,
    chartInterval = 1,
    period = "1m",
    chartReset = false,
    chartSimplify = false,
  }: {
    changeFromClose?: boolean;
    chartCloseOnly?: boolean;
    chartByDay?: boolean;
    date?: string;
    chartIEXOnly?: boolean;
    chartInterval?: number;
    lastN?: number;
    period?: timePeriod;
    chartReset?: boolean;
    chartSimplify?: boolean;
  } = {}
): Promise<(Intraday | EndOfDay)[]> => {
  const intraday = (!chartByDay && date) || period === "1d" ? true : false;

  if (period === "date" && !date) {
    throw new Error("Date must be passed if period is date");
  }

  let endpoint = `/stock/${symbol}/chart/${period}`;

  if (date) {
    // @ts-ignore
    endpoint += `/${date.replace(/-/g, "")}`;
  }

  const data: KVP[] = await iexApiRequest(endpoint, {
    changeFromClose,
    chartCloseOnly,
    chartIEXOnly,
    chartInterval,
    chartLast: lastN,
    chartReset,
    chartSimplify,
  });

  return data.map((o: KVP) =>
    !intraday ? new EndOfDay({ ...o, symbol }) : new Intraday({ ...o, symbol })
  );
};
