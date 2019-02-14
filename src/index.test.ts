import * as iex from "./index";

test("balanceSheet", async () => {
  expect(await iex.balanceSheet("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.BalanceSheet)])
  );
});
test("cashFlowStatement", async () => {
  expect(await iex.cashFlowStatement("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.CashFlowStatement)])
  );
});
test("incomeStatement", async () => {
  expect(await iex.incomeStatement("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.IncomeStatement)])
  );
});
test("auction", async () => {
  expect(await iex.auction("AAPL")).toBeInstanceOf(iex.Auction);
});
test("book", async () => {
  expect(await iex.book("AAPL")).toBeInstanceOf(iex.Book);
});
test("company", async () => {
  expect(await iex.company("AAPL")).toBeInstanceOf(iex.Company);
});
// test("cryptoQuote", async () => {
//   expect(await iex.cryptoQuote("BTC")).toBeInstanceOf(iex.CryptoQuote);
// });
test("officialPrice", async () => {
  expect(await iex.officialPrice("AAPL")).toBeInstanceOf(iex.DEEPOfficialPrice);
});
test("deepTrades", async () => {
  expect(await iex.deepTrades("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.DEEPTrade)])
  );
});
test("delayedQuote", async () => {
  expect(await iex.delayedQuote("AAPL")).toBeInstanceOf(iex.DelayedQuote);
});
test("dividends", async () => {
  expect(await iex.dividends("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.Dividends)])
  );
});
test("earnings", async () => {
  expect(await iex.earnings("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.Earnings)])
  );
});
// test("effectiveSpread", async () => {
//   expect(await iex.effectiveSpread("AAPL")).toEqual(
//     expect.arrayContaining([expect.any(iex.EffectiveSpread)])
//   );
// });
test("endOfDay", async () => {
  expect(await iex.endOfDay("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.EndOfDay)])
  );
});
test("endOfDayCloseOnly", async () => {
  expect(await iex.endOfDayCloseOnly("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.EndOfDayCloseOnly)])
  );
});
test("estimates", async () => {
  expect(await iex.estimates("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.Estimates)])
  );
});
test("financials", async () => {
  expect(await iex.financials("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.Financials)])
  );
});
test("iexSymbols", async () => {
  expect(await iex.iexSymbols()).toEqual(
    expect.arrayContaining([expect.any(iex.IEXSymbol)])
  );
});
test("incomeStatement", async () => {
  expect(await iex.incomeStatement("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.IncomeStatement)])
  );
});
test("intraday", async () => {
  expect(await iex.intraday("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.Intraday)])
  );
});
test("intradayIEXOnly", async () => {
  expect(await iex.intradayIEXOnly("AAPL")).toEqual(
    expect.arrayContaining([expect.any(iex.IntradayIEXOnly)])
  );
});
test("keyStats", async () => {
  expect(await iex.keyStats("AAPL")).toBeInstanceOf(iex.KeyStats);
});
test("list", async () => {
  expect(await iex.list("gainers")).toEqual(
    expect.arrayContaining([expect.any(iex.Quote)])
  );
});
test("logo", async () => {
  expect(await iex.logoURL("AAPL")).toBeInstanceOf(iex.Logo);
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
    expect.any(iex.OHLC)
  );
});
// test("peers", async () => {
//   expect(await iex.peers("AAPL")).toEqual(
//     expect.arrayContaining([expect.any(String)])
//   );
// });
test("previousDay", async () => {
  expect(await iex.previousDay("AAPL")).toBeInstanceOf(iex.PreviousDay);
});
test("price", async () => {
  expect(await iex.price("AAPL")).toEqual(expect.any(Number));
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
test("socialSentiment daily", async () => {
  expect(await iex.socialSentiment("AAPL", "daily", "20190213")).toBeInstanceOf(iex.SocialSentiment);
});
test("socialSentiment minute", async () => {
  expect(await iex.socialSentiment("AAPL", "daily", "20190213")).toBeInstanceOf(iex.SocialSentiment);
});
test("splits", async () => {
  expect(await iex.splits("CNC")).toEqual(
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
