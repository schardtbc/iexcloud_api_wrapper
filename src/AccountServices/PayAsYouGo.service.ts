import * as dotenv from "dotenv";

import axios from "axios";

const baseURL = "https://cloud.iexapis.com/";

dotenv.config();

const sk = process.env.IEXCLOUD_SECRET_KEY;

const apiversion = process.env.IEXCLOUD_API_VERSION;

const token = `?token=${sk}`;

export const enablePayAsYouGo = (): Promise<any> => {
  const restURL = baseURL + apiversion + "/account/payasyougo" + token;
  // console.log( restURL );
  const result: Promise<any> = axios
    .post(restURL, { token: sk, allow: true })
    .then(res => res.data);
  return result;
};

export const disablePayAsYouGo = (): Promise<any> => {
  const restURL = baseURL + apiversion + "/account/payasyougo" + token;
  // console.log( restURL );
  const result: Promise<any> = axios
    .post(restURL, { token: sk, allow: false })
    .then(res => res.data);
  return result;
};
