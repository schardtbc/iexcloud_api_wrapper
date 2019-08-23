import { iexApiRequest } from "./iexaccount.service";

interface KVP {
  [k: string]: any;
}

type UsageType =
  | "messages"
  | "rules"
  | "rule-records"
  | "alerts"
  | "alert-records";

export const accountUsage = async (type: UsageType): Promise<any> => {
  const endpoint = `/account/usage/${type}`;
  const data: KVP = await iexApiRequest(endpoint);
  return data;
};
