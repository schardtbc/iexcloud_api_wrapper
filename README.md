# iexcloud_api_wrapper

[![CircleCI](https://circleci.com/gh/schardtbc/iexcloud_api_wrapper.svg?style=svg)](https://circleci.com/gh/schardtbc/iexcloud_api_wrapper)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) 


A Typescript wrapper for the new iexcloud market data API from IEX Group Inc. All data is returned as Promises for asynchronous data requests.

A complementary [R package](https://github.com/schardtbc/iexcloudR) is also availiable.


## Usage

- See USAGE.md file for complete interface definition and call signitures

Use the npm cli to install as a dependancy into your project

```
npm install --save git+https://git@github.com/schardtbc/iexcloud_api_wrapper

// OR

npm i iexcloud_api_wrapper
```

then in your .env file add the following keys

```
IEXCLOUD_API_VERSION = "stable"
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

## About iexcloud

iexcloud is a product of [IEX Group Inc.]( https://iextrading.com ) which operates the Investors Exchange IEX, a stock exhange for US equities which trades > 9B notational value on a daily basis.

Using iexcloud requires [registration](https://iexcloud.io/cloud-login#/register)  to obtain a unique api key which is used for all data requests.

A majority of the endpoints are charged a usage free which varies by the source and type of data returned. All IEX Group sourced data is free. 

Each endpoint is assigned a cost in terms of message units.

| Plan | Monthly Message Unit Allotment | Monthy Fee
|------|--------------------------------:|:------------|
| Free | 500,000 | Free
| Launch | 5,000,000 | $9 |
| Grow | 100,000,000 | $59($49 paid annually) |
| Scale | 2,000,000,000 | $ 499 |

see https://iexcloud.io/pricing/ for current plans, rates


## Api reference documentation

https://iexcloud.io/docs/api/#introduction

## Attribution to IEX

Attribution is required of all users of iexcloud. Put “Powered by IEX Cloud” somewhere on your site or app, and link that text to https://iexcloud.io. Alternately, the attribution link can be included in your terms of service.

<a href="https://iexcloud.io">Powered by IEX Cloud</a>

## Current Implementation Status

Below is a list of the iexcloud APIs that have ([x]) and have not ([ ]) been implemented by this package.

### Account

|     | Endpoint       | Message Units | per |
|-----|----------------|---------------:|-----|
| [x] | MetaData | 0 | as in free
| [x] | Usage | 0 | as in free
| [x] | Pay as you go | 0 | as in free


### Stocks
|     | Endpoint       | Message Units | per |
|-----|----------------|---------------:|-----|
| [x] | Balance Sheet |        3000 | per symbol per period |
| [ ] | Batch Requests |    varies | with data types requested |     
| [x] | Book |                     1 |per symbol   
| [x] | Cash Flow |             1000 |per symbol per period
| [x] | Collections  |             1 |per symbol in  collection
| [x] | Company  |                 1 |per symbol
| [x] | CEO Compensation  |       20 |per symbol
| [x] | Delayed Quote  |           1 |per symbol
| [x] | Dividends  |              10 |per symbol
| [x] | Earnings |              1000 |per symbol per period
| [ ] | Earnings Today|         1051 |per symbol returned
| [x] | Effective Spread  |         0  |as in free
| [x] | Estimates |             10000  |per symbol per period
| [x] | Financials  |            5000 |per symbol per period
| [x] | Historical Prices | | |
| [x] | End of day |    10 |per symbol per day
| [x] | Income Statement |  1000 | per symbol per period
| [ ] | IPO Calendar upcoming-ipos | 100 | per IPO returned
| [ ] | IPO Calendar today-ipos | 500 | per iPO returned
| [x] | Key Stats | 20 | per symbol
| [ ] | Largest Trades | 1 | per trade returned
| [x] | List | 1 | per quote returned
| [x] | Logo | 1 | per logo
| [x] | Market Volume (U.S.) | 1 | per call
| [x] | News | 10 | per news item returned
| [x] | OHLC | 2 | per symbol
| [x] | Peers | 500 | per symbol
| [x] | Previous Day Prices | 2 per symbol
| [x] | Price | 1 | per symbol per call
| [x] | Price Target | 500 | per symbol
| [x] | Recommendation Trends | 1000 | per symbol
| [x] | Quote | 1 | per quote 
| [x] | Sector Performance | 1 | per sector
| [x] | Social Sentiment, daily | 100 | per date
| [x] | Social Sentiment, by minute | 200 | per date
| [x] | Splits | 10 | per symbol  per record
| [x] | Volume by Venue | 20 | per call

### Alternative Data
|     | Endpoint       | Message Units | per |
|-----|----------------|---------------:|-----|
| [x] | News
| [ ] | Crypto

### Treasuries
|     | Endpoint       | Message Units | per |
|-----|----------------|---------------:|-----|
| [x] | Daily Treasury Rates | 1000 | per symbol per date

### Reference Data
|     | Endpoint       | Message Units | per |
|-----|----------------|---------------:|-----|
| [x] | Symbols | 100 | per call |
| [x] | IEX Symbols | 0 | as in free
| [ ] | U.S. Exchanges | 1 | per call
| [ ] | U.S. Holidays and Trading Days | 1 | per call
| [ ] | Stock Tags
| [ ] | Stock Collections
| [ ] | Mutual Fund Symbols | 100 | per call
| [ ] | OTC Symbols | 100 | per call
| [ ] | Forex / Currency Symbols
| [ ] | Options Symbols
| [ ] | Commodities Symbols
| [ ] | Bonds Symbols
| [ ] | Crypto Symbols

### Investors Exchange Data [Free]

|     | Endpoint       |
|-----|----------------|
| [x] | TOPS | 
| [x] | TOPS Last | 
| [ ] | DEEP | 
| [x] | DEEP Auction | 
| [x] | DEEP Book |
| [ ] | DEEP Operational Halt Status |
| [x] | DEEP Official Price | 
| [ ] | DEEP Security Event |
| [ ] | DEEP Short Sale Price Tst Status | 
| [ ] | DEEP System Event |
| [x] | DEEP Trades |
| [ ] | DEEP Trade Break |
| [ ] | DEEP Trading Status |
| [ ] | Listed Regulation SHO Threshold Securities List |
| [ ] | Listed Short Interest List |
| [ ] | Stats Historical Daily |
| [ ] | Stats Historical Summary |
| [ ] | Stats Intraday |
| [ ] | Stats Recent | 
| [ ] | Stats Records |

### API System Metadata
|     | Endpoint       | Message Units | per |
|-----|----------------|---------------:|-----|
| [ ] | Status | 0 |

## In Development at IEX Group

- FOREX CURRANCIES
- OPTIONS
- COMMODITIES
- BONDS
- REALTME, SCALABLE NOTIFICATIONS
- EVENT DRIVEN AUTOMATED RULES FOR SERVERLESS DATA ANALYSIS
