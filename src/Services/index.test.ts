import * as iex from "./index";

// test("balanceSheet", async () => {
//   expect(await iex.balanceSheet("AAPL")).toEqual(
//     expect.arrayContaining([expect.any(iex.BalanceSheet)])
//   );
// });

// test("cashFlowStatement", async () => {
//   expect(await iex.cashFlowStatement("AAPL")).toEqual(
//     expect.arrayContaining([expect.any(iex.CashFlowStatement)])
//   );
// });

// test("incomeStatement", async () => {
//   expect(await iex.incomeStatement("AAPL")).toEqual(
//     expect.arrayContaining([expect.any(iex.IncomeStatement)])
//   );
// });

// test("auction", async () => {
//   expect(await iex.auction("AAPL")).toBeInstanceOf(iex.Auction);
// });

test("book", async () => {
  expect(await iex.book("AAPL")).toBeInstanceOf(iex.Book);
});
test("officialPrice", async () => {
  expect(await iex.officialPrice("AAPL")).toBeInstanceOf(iex.DEEPOfficialPrice);
});
test("deepTrades", async () => {
  expect(await iex.deepTrades("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.DEEPTrades)])
  );
});
test("delayedQuote", async () => {
  expect(await iex.delayedQuote("APPL")).toBeInstanceOf(iex.DelayedQuote);
});
test("dividends", async () => {
  expect(await iex.dividends("APPL")).toEqual(
    expect.arrayContaining([expect.any(iex.Dividends)])
  );
});
test("earnings", async () => {
  expect(await iex.earnings("APPL")).toEqual(
    expect.arrayContaining([expect.any(iex.Earnings)])
  );
});
test("effectiveSpread", async () => {
  expect(await iex.effectiveSpread("APPL")).toEqual(
    expect.arrayContaining([expect.any(iex.EffectiveSpread)])
  );
});
test("endOfDay", async () => {
  expect(await iex.endOfDay("APPL")).toEqual(
    expect.arrayContaining([iex.EndOfDay])
  );
});
test("endOfDayCloseOnly", async () => {
  expect(await iex.endOfDayCloseOnly("APPL")).toEqual(
    expect.arrayContaining([expect.any(iex.EndOfDayCloseOnly)])
  );
});
test("estimates", async () => {
  expect(await iex.estimates("APPL")).toEqual(
    expect.arrayContaining([expect.any(iex.Estimates)])
  );
});
test("financials", async () => {
  expect(await iex.financials("APPL")).toEqual(
    expect.arrayContaining([expect.any(iex.Financials)])
  );
});
test("iexSymbols", async () => {
  expect(await iex.iexSymbols()).toEqual(
    expect.arrayContaining([expect.any(iex.IEXSymbol)])
  );
});
test("incomeStatement", async () => {
  expect(await iex.incomeStatement("APPL")).toEqual(
    expect.arrayContaining([expect.any(iex.IncomeStatement)])
  );
});
test("intraday", async () => {
  expect(await iex.intraday("APPL")).toEqual(
    expect.arrayContaining([expect.any(iex.Intraday)])
  );
});
test("intradayIEXOnly", async () => {
  expect(await iex.intradayIEXOnly("APPL")).toEqual(
    expect.arrayContaining([expect.any(iex.IntradayIEXOnly)])
  );
});
test("keyStats", async () => {
  expect(await iex.keyStats("APPL")).toBeInstanceOf(iex.KeyStats);
});
test("list", async () => {
  expect(await iex.list("gainers")).toEqual(
    expect.arrayContaining([expect.any(iex.Quote)])
  );
});
test("logo", async () => {
  expect(await iex.logo("AAPL")).toBeInstanceOf(iex.Logo);
});
test("marketSymbols", async () => {
  expect(await iex.marketSymbols()).toEqual(
    expect.arrayContaining([expect.any(iex.MarketSymbol)])
  );
});
test("marketVolume", async () => {
  expect(await iex.marketVolume()).toEqual(
    expect.arrayContaining([expect.any(iex.MarketVolume)])
  );
});
test("news", async () => {
  expect(await iex.news("AAPL", 2)).toEqual(
    expect.arrayContaining([expect.any(iex.NewsItem)])
  );
});
test("ohlc", async () => {
  expect(await iex.ohlc("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.OHLC)])
  );
});
test("peers", async () => {
  expect(await iex.peers("AAPL")).toEqual(
    expect.arrayContaining([expect.any(String)])
  );
});
test("previousDay", async () => {
  expect(await iex.previousDay("AAPL")).toBeInstanceOf(iex.PreviousDay);
});
test("price", async () => {
  expect(await iex.price("AAPL")).toBeInstanceOf(Number);
});
test("priceTarget", async () => {
  expect(await iex.priceTarget("AAPL")).toBeInstanceOf(iex.PriceTarget);
});
test("quote", async () => {
  expect(await iex.quote("AAPL")).toBeInstanceOf(iex.Quote);
});
test("sectorPerformance", async () => {
  expect(await iex.sectorPerformance()).toEqual(
    expect.arrayContaining([expect.any(iex.SectorPerformance)])
  );
});
test("socialSentiment", async () => {
  expect(await iex.socialSentiment("APPL")).toBeInstanceOf(iex.SocialSentiment);
});
test("splits", async () => {
  expect(await iex.splits("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.Splits)])
  );
});
test("tops", async () => {
  expect(await iex.tops("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.TOPS)])
  );
});
test("topsLast", async () => {
  expect(await iex.topsLast("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.TOPSLast)])
  );
});
test("volumeByVenue", async () => {
  expect(await iex.volumeByVenue("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.VolumeByVenue)])
  );
});
