import { HousesMock } from "../mock";
import { convertDateFormat } from "../stringFunctions";

describe("convertDateFormat", () => {
  it("should convert date format from 'YYYY-MM-DD HH:mm:ss' to 'Month Day, Year'", () => {
    const dateFormat = convertDateFormat(HousesMock[0].DateListed);

    expect(dateFormat).toBe("Mar 3, 2023");
  });
});
