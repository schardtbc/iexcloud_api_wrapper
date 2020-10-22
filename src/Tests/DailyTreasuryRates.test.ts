/**
 * @jest-environment node
 */

import * as service from "../Services/DailyTreasuryRates.service";

test("dailyTreasuryRates", async () => {
  expect(await service.dailyTreasuryRates("DGS10")).toEqual(
    expect.arrayContaining([expect.any(service.DailyTreasuryRate)])
  );
});
