import * as dotenv from "dotenv";

import axios from "axios";

const baseURL = "https://cloud.iexapis.com/";

dotenv.config();

const pk = process.env.IEXCLOUD_PUBLIC_KEY;

const apiversion = process.env.IEXCLOUD_API_VERSION;

const aToken = `&token=${pk}`;

const qToken = `?token=${pk}`;

const chooseToken = (str:string) => {
  if (str.includes("?")) {
    return aToken
  } else {
    return qToken
  }
}

export const iexApiRequest = (endpoint: string): Promise<any> => {
  const iexRestURL = baseURL + apiversion + endpoint + chooseToken(endpoint);
  // console.log( iexRestURL );
  const result: Promise<any> = axios
    .get(iexRestURL)
    .then(res => res.data);
  return result;
};
