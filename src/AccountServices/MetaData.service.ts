import { DynamicObject, iexApiRequest, KVP } from "./iexaccount.service";

export const accountMetadata = async (): Promise<AccountMetaData> => {
  const data: KVP = await iexApiRequest(`/account/metadata`);

  return new AccountMetaData(data);
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

export class AccountMetaData extends DynamicObject {
  public payAsYouGoEnabled: boolean = false;
  public effectiveDate: number = 0;
  public endDateEffective: number = 0;
  public subscriptionTermType: string = "";
  public tierName: string = "";
  public messageLimit: number = 0;
  public messagesUsed: number = 0;
}
