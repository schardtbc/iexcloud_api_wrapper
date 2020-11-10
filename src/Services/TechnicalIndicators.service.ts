// import { DynamicObject, iexApiRequest } from "./iexcloud.service";
//
// export const indicators = [
//   "abs",
//   "acos",
//   "ad",
//   "add",
//   "adosc",
//   "adx",
//   "adxr",
//   "ao",
//   "apo",
//   "aroon",
//   "aroonosc",
//   "asin",
//   "atan",
//   "atr",
//   "avgprice",
//   "bbands",
//   "bop",
//   "cci",
//   "ceil",
//   "cmo",
//   "cos",
//   "cosh",
//   "crossany",
//   "crossover",
//   "cvi",
//   "decay",
//   "dema",
//   "di",
//   "div",
//   "dm",
//   "dpo",
//   "dx",
//   "edecay",
//   "ema",
//   "emv",
//   "exp",
//   "fisher",
//   "floor",
//   "fosc",
//   "hma",
//   "kama",
//   "kvo",
//   "lag",
//   "linreg",
//   "linregintercept",
//   "linregslope",
//   "ln",
//   "log10",
//   "macd",
//   "marketfi",
//   "mass",
//   "max",
//   "md",
//   "medprice",
//   "mfi",
//   "min",
//   "mom",
//   "msw",
//   "mul",
//   "natr",
//   "nvi",
//   "obv",
//   "ppo",
//   "psar",
//   "pvi",
//   "qstick",
//   "roc",
//   "rocr",
//   "round",
//   "rsi",
//   "sin",
//   "sinh",
//   "sma",
//   "sqrt",
//   "stddev",
//   "stderr",
//   "stoch",
//   "stochrsi",
//   "sub",
//   "sum",
//   "tan",
//   "tanh",
//   "tema",
//   "todeg",
//   "torad",
//   "tr",
//   "trima",
//   "trix",
//   "trunc",
//   "tsf",
//   "typprice",
//   "ultosc",
//   "var",
//   "vhf",
//   "vidya",
//   "volatility",
//   "vosc",
//   "vwma",
//   "wad",
//   "wcprice",
//   "wilders",
//   "willr",
//   "wma",
//   "zlema",
// ];
//
// export const technicalIndicators = async (
//   symbol: string,
//   indicator: typeof indicators[number],
//   range: string = "ytd",
//   inputs: number[] = []
// ): Promise<TechnicalIndicator[]> => {
//   const params = inputs.reduce(
//     (inputParams, current, num) => {
//       inputParams[`input${num + 1}`] = current;
//
//       return inputParams;
//     },
//     {
//       range,
//     } as any
//   );
//
//   const data = await iexApiRequest(
//     `/stock/${symbol}/indicator/${indicator}`,
//     params
//   );
//
//   return data.chart.map((chart: any, location: number) => {
//     const resultIndicators: number[] = data.indicator.map(
//       (indicatorsArray: number[]) => indicatorsArray[location]
//     );
//
//     return new TechnicalIndicator({
//       chart,
//       indicator: resultIndicators,
//       symbol,
//     });
//   });
// };
//
// export interface IEXTechnicalIndicator {
//   symbol: string;
//   indicator: number[];
//   chart: any;
// }
//
// export class TechnicalIndicator extends DynamicObject
//   implements IEXTechnicalIndicator {
//   public symbol = "";
//   public indicator = [];
//   public chart = {};
// }
