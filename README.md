iexcloud_api_wrapper

[![CircleCI](https://circleci.com/gh/schardtbc/iex-api-wrapper.svg?style=svg)](https://circleci.com/gh/schardtbc/iexcloud-api-wrapper)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) 


A Typescript wrapper for the new iexcloud market data API from IEX Group Inc. All data is returned as Promises for asynchronous data requests.

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

import iex from "iexcloud_api_wrapper"

// Using an IIFE
(async (sym) => {
    const quoteData = await iex.quote(sym);
    // do something with returned quote data
    console.log(q)
})("WDC")

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
| Scale | 1,000,000,000 | $ 499 |

see https://iexcloud.io/pricing/


## Api reference

https://iexcloud.io/docs/api/#introduction

## Attribution 

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
| [x] | Price Target | 500 per symbol
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

### Investors Exchange Data
|     | Endpoint       | Message Units | per |
|-----|----------------|---------------:|-----|
| [x] | TOPS | 0 |
| [x] | TOPS Last | 0 |
| [ ] | DEEP | 0 |
| [x] | DEEP Auction | 0 |
| [x] | DEEP Book | 0 |
| [ ] | DEEP Operational Halt Status | 0 |
| [x] | DEEP Official Price | 0 |
| [ ] | DEEP Security Event | 0 |
| [ ] | DEEP Short Sale Price Tst Status | 0 |
| [ ] | DEEP System Event | 0 |
| [x] | DEEP Trades | 0 |
| [ ] | DEEP Trade Break | 0 |
| [ ] | DEEP Trading Status | 0 |
| [ ] | Listed Regulation SHO Threshold Securities List | 0 |
| [ ] | Listed Short Interest List | 0 |
| [ ] | Stats Historical Daily | 0 | 
| [ ] | Stats Historical Summary | 0 |
| [ ] | Stats Intraday | 0 |
| [ ] | Stats Recent | 0 |
| [ ] | Stats Records | 0 |

### API System Metadata
|     | Endpoint       | Message Units | per |
|-----|----------------|---------------:|-----|
| [ ] | Status | 0 |

### In Development at IEX Group

- FOREX CURRANCIES
- OPTIONS
- COMMODITIES
- BONDS
- REALTME, SCALABLE NOTIFICATIONS
- EVENT DRIVEN AUTOMATED RULES FOR SERVERLESS DATA ANALYSIS
