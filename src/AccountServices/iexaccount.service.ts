import * as dotenv from "dotenv";

import axios from "axios";

const baseURL = "https://cloud.iexapis.com/";

dotenv.config();

const sk = process.env.IEXCLOUD_SECRET_KEY;

const apiversion = process.env.IEXCLOUD_API_VERSION;

const token = `&token=${sk}`;

export function apiBaseURL() {
  return baseURL + apiversion;
}

export function apiAuthentication() {
  return token;
}

export const iexApiRequest = (endpoint: string): Promise<any> => {
  const iexRestURL = baseURL + apiversion + endpoint + token;
  console.log( iexRestURL );
  const result: Promise<any> = axios
    .get(iexRestURL)
    .then(res => res.data);
  return result;
};
