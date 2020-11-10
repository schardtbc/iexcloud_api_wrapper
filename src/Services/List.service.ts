import { iexApiRequest } from './iexcloud.service';
import { IEXQuote } from './Quote.service';

export type ListType = 'mostactive' | 'gainers' | 'losers' | 'iexvolume' | 'iexpercent' | 'infocus';

export const list = (listType: ListType = 'mostactive') => iexApiRequest<IEXQuote[]>(`/stock/market/list/${listType}`);
