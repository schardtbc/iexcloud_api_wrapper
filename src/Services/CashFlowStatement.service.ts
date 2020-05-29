import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

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
  const {
    cashflow
  } = await iexApiRequest(`/stock/${symbol}/cash-flow`, {
      last: lastN,
      period
  });

  return cashflow.map((o: KVP) => new CashFlowStatement({
    ...o,
    symbol
  }));
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

export class CashFlowStatement extends DynamicObject implements IEXCashFlow {
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
