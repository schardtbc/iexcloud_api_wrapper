import * as dotenv from 'dotenv';
import { resolve } from 'path';

import axios from 'axios';

const baseURL = 'https://cloud.iexapis.com/';
const sandboxURL = 'https://sandbox.iexapis.com/';

// const baseSSEURL = "https://cloud.sse.iexapis.com/";

dotenv.config({ path: resolve(process.cwd(), '.env.sb') });

const pk = process.env.IEXCLOUD_PUBLIC_KEY;
const apiVersion = process.env.IEXCLOUD_API_VERSION;

const baseUrl = pk && pk[0] === 'T' ? sandboxURL : baseURL;

export const iexApiRequest = async <T>(endpoint: string, params = {}) =>
  (
    await axios.get<T>(`${baseUrl}${apiVersion}${endpoint}`, {
      params: {
        ...params,
        token: pk,
      },
    })
  ).data;

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
