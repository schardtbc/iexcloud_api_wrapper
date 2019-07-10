import * as dotenv from "dotenv";

import axios from "axios";

import * as EventSource  from "eventsource"

interface Url {
  hostName: string;
  schema: string;
  path: string;
  query: any
}

const baseURL = "https://cloud.iexapis.com/";
const sandboxURL = "https://sandbox.iexapis.com/";

// const baseSSEURL = "https://cloud.sse.iexapis.com/";

dotenv.config();

const pk = process.env.IEXCLOUD_PUBLIC_KEY;

const apiversion = process.env.IEXCLOUD_API_VERSION;

const aToken = `&token=${pk}`;

const qToken = `?token=${pk}`;

const prefix = () => {
  if (pk && pk[0]==="T"){
    return sandboxURL;
  } else {
    return baseURL;
  }
}

const chooseToken = (str:string) => {
  if (str.includes("?")) {
    return aToken
  } else {
    return qToken
  }
}

const constructURL = (endpoint: string): string => {
   const result = prefix() + apiversion +  endpoint + chooseToken(endpoint)
   return result;
}

// const constructURL = (endpoint: string | object): string => {
//   let result: string
//   if (typeof endpoint === "string") {
//     result = prefix() + apiversion +  endpoint + chooseToken(endpoint)
//   } else if ( typeof endpoint === "object" ) {
    
//   }

//   return result;
// }

export const iexApiRequest = (endpoint: string): Promise<any> => {
  const iexRestURL = constructURL(endpoint);
  const result: Promise<any> = axios
    .get(iexRestURL)
    .then(res => res.data);
  return result;
};

// const defaultHandler = (evt: MessageEvent) => {
//   console.log(evt.data);
// }

// export const iexsse = (endpoint:string, onOpen: (evt: MessageEvent) => any = defaultHandler,
//                        onMessage: (evt: MessageEvent) => any = defaultHandler,
//                        onError: (evt: MessageEvent)=>any = defaultHandler
//                        ) => {
//     const sseURL = baseSSEURL + apiversion + endpoint + chooseToken(endpoint);
//     const source = new EventSource(sseURL)
//     source.onmessage = onMessage
//     source.onopen = onOpen
//     source.onerror = onError
//     return source

// }
