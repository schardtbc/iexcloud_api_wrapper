import { iexApiRequest, KVP } from "./iexaccount.service";

type UsageType =
  | "messages"
  | "rules"
  | "rule-records"
  | "alerts"
  | "alert-records";

export const accountUsage = async (type: UsageType): Promise<KVP> => {
  return iexApiRequest(`/account/usage/${type}`);
};
