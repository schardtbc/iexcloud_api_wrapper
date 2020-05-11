import { iexApiRequest, KVP } from "./iexcloud.service";
import { Quote as CryptoQuote } from "./Quote.service";

const cryptoQuote = async (symbol: string): Promise<CryptoQuote> => {
  const data: KVP = await iexApiRequest(`/crypto/${symbol}/quote`);

  return new CryptoQuote(data);
};

export { CryptoQuote, cryptoQuote };
