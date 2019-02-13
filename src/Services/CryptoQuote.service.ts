import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

import { Quote as CryptoQuote } from "./Quote.service";

const cryptoQuote = async (symbol: string): Promise<CryptoQuote> => {
  const endpoint = `/crypto/${symbol}/quote`;
  const data: KVP = await iexApiRequest(endpoint);
  const result = Object.assign(new CryptoQuote(), data);
  return result;
};

export { CryptoQuote, cryptoQuote };
