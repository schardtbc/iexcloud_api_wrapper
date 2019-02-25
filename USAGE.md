
# iexcloud_api_wrapper

## Usage

Use the npm cli to install as a dependancy into your project

```
npm install --save git+https://git@github.com/schardtbc/iexcloud_api_wrapper
```

then in your .env file add the following keys

```
IEXCLOUD_API_VERSION = "beta"
IEXCLOUD_PUBLIC_KEY = "pk_..."
IEXCLOUD_SECRET_KEY = "sk_..."

# use the pk and sk obtained from your iexcloud account
# make sure the .env file is in your .gitignore file
# do not hard code the keys into your application code
# do not upload the keys to github.
# you can easily change the keys if they become compromised
```

To test that everything installed correctly and the .env file is properly setup you can use the following or similar code

```javascript
// reminder: this is an async interface ...it's promises all the way down

const  iex = require( 'iexcloud_api_wrapper' )

const quote = async (sym) => {
    const quoteData = await iex.quote(sym);
    // do something with returned quote data
    console.log(quoteData)
};

quote("WDC");

//  Quote {
//   symbol: 'WDC',
//   companyName: 'Western Digital Corporation',
//   calculationPrice: 'tops',
//   open: 47.56,
//   openTime: 1550154600850,
//   close: 47.69,
//   closeTime: 1550091600563,
//   high: 48.75,
//   low: 47.43,
//   latestPrice: 47.89,
//   latestSource: 'IEX real time price',
//   latestTime: '11:53:07 AM',
//   latestUpdate: 1550163187646,
//   latestVolume: 2660380,
//   iexRealtimePrice: 47.89,
//   iexRealtimeSize: 1,
//   iexLastUpdated: 1550163187646,
//   delayedPrice: 47.925,
//   delayedPriceTime: 1550162368700,
//   extendedPrice: 47.56,
//   extendedChange: -0.33,
//   extendedChangePercent: -0.00689,
//   extendedPriceTime: 1550189098346,
//   previousClose: 47.69,
//   change: 0.2,
//   changePercent: 0.00419,
//   iexMarketPercent: 0.03971124425833904,
//   iexVolume: 105647,
//   avgTotalVolume: 8340178,
//   iexBidPrice: 47.8,
//   iexBidSize: 100,
//   iexAskPrice: 47.89,
//   iexAskSize: 100,
//   marketCap: 13928854390,
//   week52High: 106.96,
//   week52Low: 33.83,
//   ytdChange: 0.25066151071615267 }
```

## Package function call signitures

### Account

```typescript
export declare const accountMetadata: () => Promise<AccountMetaData>

export declare const enablePayAsYouGo: () => Promise<any>;
export declare const disablePayAsYouGo: () => Promise<any>;

export declare type UsageType = "messages" | "rules" | "rule-records" | "alerts" | "alert-records";

export declare const accountUsage: (type: UsageType) => Promise<any>;
```

### Stocks

```javascript

export declare const balanceSheet: (symbol: string, period?: string, lastN: number =1) => Promise<BalanceSheet[]>;

export declare const book: (symbol: string) => Promise<Book>;

export declare const cashFlowStatement: (symbol: string, period?: string, lastN: number =1) => Promise<CashFlowStatement[]>;

export declare type CollectionType = "sector" | "tag" | "list";

export declare const collection: (collectionType: CollectionType, collectionName: string) => Promise<Quote[]>;

export declare const company: (symbol: string) => Promise<Company>;

export declare const cryptoQuote: (symbol: string) => Promise<CryptoQuote>;

export declare const delayedQuote: (symbol: string) => Promise<DelayedQuote>;

export declare type timePeriod = "next" | "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";

export declare const dividends: (symbol: string, range?: timePeriod) => Promise<Dividends[]>;

export declare const earnings: (symbol: string, lastn?: number) => Promise<Earnings[]>;

export declare const effectiveSpread: (symbol: string) => Promise<EffectiveSpread[]>;

export declare type timePeriod = "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";

export declare const endOfDay: (symbol: string, period?: timePeriod="1m", chartLastN?: number = 1, chartInterval?: number =1 , changeFromClose?: boolean=false, chartReset?: boolean = false, chartSimplify?: boolean= false) => Promise<EndOfDay[]>;

export declare const endOfDayCloseOnly: (symbol: string, period?: timePeriod, chartLastN?: number, chartInterval?: number, changeFromClose?: boolean, chartReset?: boolean, chartSimplify?: boolean) => Promise<EndOfDayCloseOnly[]>;

export declare const estimates: (symbol: string, lastN?: number) => Promise<Estimates[]>;

export declare const endOfDayCloseOnly: (symbol: string, period?: timePeriod, chartLastN?: number, chartInterval?: number, changeFromClose?: boolean, chartReset?: boolean, chartSimplify?: boolean) => Promise<EndOfDayCloseOnly[]>;


export declare const estimates: (symbol: string, lastN?: number) => Promise<Estimates[]>;

export declare const financials: (symbol: string, lastn?: number) => Promise<Financials[]>;

export declare const iexApiRequest: (endpoint: string) => Promise<any>;

export declare const iexSymbols: () => Promise<IEXSymbol[]>;

export declare const incomeStatement: (symbol: string, period?: string, lastN: number =1) => Promise<IncomeStatement[]>;

export declare const intraday: (symbol: string, chartLastN?: number, chartInterval?: number, changeFromClose?: boolean, chartReset?: boolean, chartSimplify?: boolean) => Promise<Intraday[]>;

export declare const intradayForDate: (symbol: string, date:string, chartLastN?: number, chartInterval?: number, changeFromClose?: boolean, chartReset?: boolean, chartSimplify?: boolean) => Promise<IntradayIEXOnly[]>;

export declare const intradayIEXOnly: (symbol: string, chartLastN?: number, chartInterval?: number, changeFromClose?: boolean, chartReset?: boolean, chartSimplify?: boolean) => Promise<IntradayIEXOnly[]>;

export declare const keyStats: (symbol: string) => Promise<KeyStats>;

export declare type ListType = "mostactive" | "gainers" | "losers" | "iexvolume" | "iexpercent" | "infocus";

export declare const list: (listType?: ListType) => Promise<Quote[]>;

export declare const logoURL: (symbol: string) => Promise<Logo>;

export declare const marketSymbols: () => Promise<MarketSymbol[]>;

export declare const news: (symbol: string, lastN?: number) => Promise<NewsItem[]>;

export declare const ohlc: (symbol: string) => Promise<OHLC>;

export declare const peers: (symbol: string) => Promise<string[]>;

export declare const previousDay: (symbol: string) => Promise<PreviousDay>;

export declare const price: (symbol: string) => Promise<number>;

export declare const priceTarget: (symbol: string) => Promise<PriceTarget>;

export declare const quote: (symbol: string) => Promise<Quote>;

export declare const sectorPerformance: () => Promise<SectorPerformance[]>;

export declare type SentimentType = "daily" | "minute";

export declare const socialSentiment: (symbol: string, type?: SentimentType, date?: string) => Promise<SocialSentiment | SocialSentiment[] | null>;

export declare const splits: (symbol: string, period?: timePeriod) => Promise<Splits[]>;
```
## IEX  
These endpoints unlimited usage free of message unit charges

```javascript 
export declare const tops: (symbol: string) => Promise<TOPS[]>;

export declare const topsLast: (symbol: string) => Promise<TOPSLast[]>;

export declare const volumeByVenue: (symbol: string) => Promise<VolumeByVenue[]>;

export declare const auction: (symbol: string) => Promise<Auction>;

export declare const deepBook: (symbol: string) => Promise<any>;

export declare const officialPrice: (symbol: string) => Promise<DEEPOfficialPrice>;

export declare const deepTrades: (symbol: string) => Promise<DEEPTrade[]>;
```

