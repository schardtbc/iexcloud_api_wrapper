import * as dotenv from "dotenv";

import axios from "axios";

const baseURL = "https://cloud.iexapis.com/";

dotenv.config();

const sk = process.env.IEXCLOUD_SECRET_KEY;

const apiversion = process.env.IEXCLOUD_API_VERSION;

const chooseToken = (str:string) => `${(str.includes("?")) ? `&` : `?`}token=${sk}`;

export const iexApiRequest = (endpoint: string): Promise<any> => {
  const iexRestURL = baseURL + apiversion + endpoint + chooseToken(endpoint);

  const result: Promise<any> = axios
    .get(iexRestURL)
    .then(res => res.data);
  return result;
};
