import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

/**
 * Pulls cash flow data. Available quarterly (4 quarters) and annually (4 years)
 *
 * - Data Weighting: 1000 message units per symbol per period
 * - Data Schedule: Updates at 8am, 9am UTC daily
 *
 * @param symbol stock symbol
 * @param period (quarter) "annual" | "quarter"
 * @param lastN (1) number of periods to report
 * @return a dataframe
 * @export
 * @examples
 * cashflowStatement("AAPL",period = "quarter", lastN =4)
 */
export const cashFlowStatement = async (
  symbol: string,
  period: string = "quarter",
  lastN: number = 1
): Promise<CashFlowStatement[]> => {
  const endpoint = `/stock/${symbol}/cash-flow?period=${period}?last=${lastN}`;
  const data: KVP = await iexApiRequest(endpoint);
  // console.log(data);
  const result: any[] = data.cashflow;
  return result.map((o: KVP) => {
    const r = Object.assign(new CashFlowStatement(), o);
    r.symbol = symbol;
    return r;
  });
};

export interface IEXCashFlow {
  symbol: string;
  reportDate: string;
  netIncome: number;
  depreciation: number;
  changesInReceivables: number;
  changesInInventories: number;
  cashChange: number;
  cashFlow: number;
  capitalExpenditures: number;
  investments: number;
  investingActivityOther: number;
  totalInvestingCashFlows: number;
  dividendsPaid: number;
  netBorrowings: number;
  otherFinancingCashFlows: number;
  cashFlowFinancing: number;
  exchangeRateEffect: number | null;
}

export class CashFlowStatement implements IEXCashFlow {
  public symbol:string = "";
  public reportDate: string = "";
  public netIncome: number = 0;
  public depreciation: number = 0;
  public changesInReceivables: number = 0;
  public changesInInventories: number = 0;
  public cashChange: number = 0;
  public cashFlow: number = 0;
  public capitalExpenditures: number = 0;
  public investments: number = 0;
  public investingActivityOther: number = 0;
  public totalInvestingCashFlows: number = 0;
  public dividendsPaid: number = 0;
  public netBorrowings: number = 0;
  public otherFinancingCashFlows: number = 0;
  public cashFlowFinancing: number = 0;
  public exchangeRateEffect: number | null = 0;
}
