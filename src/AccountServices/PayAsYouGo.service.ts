import * as dotenv from "dotenv";

import axios from "axios";

const baseURL = "https://cloud.iexapis.com/";

dotenv.config();

const sk = process.env.IEXCLOUD_SECRET_KEY;
const apiversion = process.env.IEXCLOUD_API_VERSION;

export const enablePayAsYouGo = async (): Promise<any> => {
  const restURL = `${baseURL}${apiversion}/account/payasyougo`;

  const { data } = await axios.post(
    restURL,
    {},
    {
      params: {
        allow: true,
        token: sk,
      },
    }
  );

  return data;
};

export const disablePayAsYouGo = async (): Promise<any> => {
  const restURL = `${baseURL}${apiversion}/account/payasyougo`;

  const { data } = await axios.post(
    restURL,
    {},
    {
      params: {
        allow: true,
        token: sk,
      },
    }
  );

  return data;
};
