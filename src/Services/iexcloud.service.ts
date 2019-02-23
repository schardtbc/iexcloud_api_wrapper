import * as dotenv from "dotenv";
import * as EventSource  from "eventsource"
import * as request from "superagent";
const Throttle = require('superagent-throttle');

const throttle = new Throttle({
  active: true,
  rate: 100,
  ratePer: 60000
});

const baseURL = "https://cloud.iexapis.com/";
const sandboxURL = "https://sandbox.iexapis.com/";
// const baseSSEURL = "https://cloud-sse.iexapis.com/";

dotenv.config();

const pk = process.env.IEXCLOUD_PUBLIC_KEY;
const apiversion = process.env.IEXCLOUD_API_VERSION;

const prefix = () => pk && pk[0]==="T" ? sandboxURL : baseURL
const chooseToken = (str:string) => `${str.includes("?") ? '&' : '?'}token=${pk}`;
const constructURL = (endpoint: string): string =>
  `${prefix()}${apiversion}${endpoint}${chooseToken(endpoint)}`

export const iexApiRequest = (endpoint: string): Promise<any> => {
  const result: Promise<any> = request
    .get(constructURL(endpoint))
    .use(throttle.plugin())
    .then(res => JSON.parse(res.text));
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
