import * as dotenv from "dotenv";

import axios from "axios";

const baseURL = "https://cloud.iexapis.com/";

dotenv.config();

const sk = process.env.IEXCLOUD_SECRET_KEY;
const apiversion = process.env.IEXCLOUD_API_VERSION;

export const iexApiRequest = async (
  endpoint: string,
  params = {}
): Promise<any> => {
  const { data } = await axios.get(`${baseURL}${apiversion}${endpoint}`, {
    params: {
      ...params,
      token: sk,
    },
  });

  return data;
};

export interface KVP {
  [k: string]: any;
}

export class DynamicObject implements KVP {
  [k: string]: any;

  constructor(theObject: { [x: string]: any }) {
    for (const key of Object.keys(theObject)) {
      this[key] = theObject[key];
    }
  }
}
