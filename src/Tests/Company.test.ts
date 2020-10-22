/**
 * @jest-environment node
 */

import * as service from "../Services/Company.service";

test("company", async () => {
  expect(await service.company("AAPL")).toBeInstanceOf(service.Company);
});
