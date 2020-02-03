import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const indicators = [
  'abs',
  'acos',
  'ad',
  'add',
  'adosc',
  'adx',
  'adxr',
  'ao',
  'apo',
  'aroon',
  'aroonosc',
  'asin',
  'atan',
  'atr',
  'avgprice',
  'bbands',
  'bop',
  'cci',
  'ceil',
  'cmo',
  'cos',
  'cosh',
  'crossany',
  'crossover',
  'cvi',
  'decay',
  'dema',
  'di',
  'div',
  'dm',
  'dpo',
  'dx',
  'edecay',
  'ema',
  'emv',
  'exp',
  'fisher',
  'floor',
  'fosc',
  'hma',
  'kama',
  'kvo',
  'lag',
  'linreg',
  'linregintercept',
  'linregslope',
  'ln',
  'log10',
  'macd',
  'marketfi',
  'mass',
  'max',
  'md',
  'medprice',
  'mfi',
  'min',
  'mom',
  'msw',
  'mul',
  'natr',
  'nvi',
  'obv',
  'ppo',
  'psar',
  'pvi',
  'qstick',
  'roc',
  'rocr',
  'round',
  'rsi',
  'sin',
  'sinh',
  'sma',
  'sqrt',
  'stddev',
  'stderr',
  'stoch',
  'stochrsi',
  'sub',
  'sum',
  'tan',
  'tanh',
  'tema',
  'todeg',
  'torad',
  'tr',
  'trima',
  'trix',
  'trunc',
  'tsf',
  'typprice',
  'ultosc',
  'var',
  'vhf',
  'vidya',
  'volatility',
  'vosc',
  'vwma',
  'wad',
  'wcprice',
  'wilders',
  'willr',
  'wma',
  'zlema'
] as const; 

export const technicalIndicators = async (
  symbol: string,
  indicator: typeof indicators[number],
  range: string = "ytd",
  inputs: number[]=[]
): Promise<TechnicalIndicator[]> => {
  const inputsString = inputs.reduce((last, current, num) => {
    return `${last}&input${num+1}=${current}`;
  },''); 
  let endpoint = `/stock/${symbol}/indicator/${indicator}?range=${range}${inputsString}`;

  const data: KVP = await iexApiRequest(endpoint);
  const result: TechnicalIndicator[] = [];
  data.chart.forEach((chart: any, location: number) => {
    const indicator: number[] = [];
    data.indicator.forEach((indicatorsArray: number[]) => {
      indicator.push(indicatorsArray[location]);
    });
    const r = Object.assign(new TechnicalIndicator, {
      symbol,
      chart,
      indicator
    });
    result.push(r);
  });

  return result;
};

export interface IEXTechnicalIndicator {
  symbol: string;
  indicator: Array<number>;
  chart: any;
}

export class TechnicalIndicator implements IEXTechnicalIndicator{
  public symbol = "";
  public indicator = [];
  public chart={};
}

