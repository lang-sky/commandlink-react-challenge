import { Person } from "types";
import { PersonState, personReducer, setPersonAction } from "../personSlice";

describe("personSlice", () => {
  test("setPersonAction", () => {
    const testData: Person = {
      firstName: "john",
    };

    const expected: PersonState = {
      data: {
        firstName: "john",
      },
    };

    expect(personReducer({ data: {} }, setPersonAction(testData))).toEqual(expected);
  });
});
