import { iexApiRequest } from "./iexaccount.service";

interface KVP {
  [k: string]: any;
}

export const accountMetadata = async (): Promise<AccountMetaData> => {
  const endpoint = `/account/metadata`;
  const data: KVP = await iexApiRequest(endpoint);
  const result = Object.assign(new AccountMetaData(), data);
  return result;
};

export interface IEXAccountMetaData {
  payAsYouGoEnabled: boolean;
  effectiveDate: number;
  endDateEffective: number;
  subscriptionTermType: string;
  tierName: string;
  messageLimit: number;
  messagesUsed: number;
}

export class AccountMetaData {
  public payAsYouGoEnabled: boolean = false;
  public effectiveDate: number = 0;
  public endDateEffective: number = 0;
  public subscriptionTermType: string = "";
  public tierName: string = "";
  public messageLimit: number = 0;
  public messagesUsed: number = 0;
}
