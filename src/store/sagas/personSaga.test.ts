import { SET_PERSON } from "store/types";
import { setPerson } from "./personSaga";
import { Person } from "types";
import { setPersonAction } from "store/reducers/personReducer";
import { put } from "redux-saga/effects";

describe("personSaga", () => {
  test("setPerson", () => {
    const mockPerson: Person = {
      firstName: "john",
    };

    const gen = setPerson({
      type: SET_PERSON,
      payload: mockPerson,
    });

    expect(gen.next().value).toStrictEqual(put(setPersonAction(mockPerson)));
  });
});
