import { iexApiRequest } from './iexcloud.service';
import { IEXQuote } from './Quote.service';

export type CollectionType = 'sector' | 'tag' | 'list';

export const collection = (collectionType: CollectionType, collectionName: string) =>
  iexApiRequest<IEXQuote[]>(`/stock/market/collection/${collectionType}`, {
    collectionName,
  });
