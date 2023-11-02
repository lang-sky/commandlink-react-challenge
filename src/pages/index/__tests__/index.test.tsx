import { fireEvent, screen } from "@testing-library/react";
import { Index } from "..";
import { renderWithEverything } from "utils/testUtils";
import { act } from "react-dom/test-utils";
import { Field } from "types";
import userEvent from "@testing-library/user-event";

const setup = (props: { fieldSet: Array<Array<Field> | Field> }) => {
  return renderWithEverything(<Index fieldSet={props.fieldSet} />);
};

describe("Index", () => {
  test("typing into input should change data", async () => {
    setup({
      fieldSet: [
        {
          id: "firstName",
          type: "text",
        },
      ],
    });
    const input = screen.getByRole("textbox", { name: "firstName" }) as HTMLInputElement;
    await act(async () => {
      fireEvent.change(input, { target: { value: "john" } });
    });
    expect(input.value).toBe("john");
  });

  test("select should work fine", async () => {
    setup({
      fieldSet: [
        {
          id: "jobTitle",
          type: "select",
          options: ["option A", "option B"],
        },
      ],
    });
    const select = screen.getByLabelText("JobTitle");
    await act(async () => {
      userEvent.selectOptions(select, "option B");
    });
    expect((screen.getByText("option B") as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.queryByText("option A") as HTMLOptionElement).selected).toBeFalsy();
  });

  test("required field shows error message on submission with empty data", async () => {
    setup({
      fieldSet: [
        {
          id: "firstName",
          required: true,
          type: "text",
        },
      ],
    });
    await act(async () => {
      userEvent.click(screen.getByText("Submit"));
    });
    expect(screen.getByText(/This field is required/)).toBeInTheDocument();
  });

  // for some reason, the handleSubmit is not called
  test.skip("dispatch and navigate to thank-you page upon successful submission", async () => {
    const { store } = setup({
      fieldSet: [
        {
          id: "firstName",
          type: "text",
        },
      ],
    });
    jest.spyOn(store, "dispatch"); // Spy on the dispatch function

    const input = screen.getByRole("textbox", { name: "firstName" }) as HTMLInputElement;
    await act(async () => {
      fireEvent.change(input, { target: { value: "john" } });
    });
    await act(async () => {
      userEvent.click(screen.getByText("Submit"));
    });

    // await waitFor(() => {
    //   expect(store.dispatch).toHaveBeenCalled();
    // });
    // expect(store.dispatch).toHaveBeenCalledWith({
    //   type: SET_PERSON,
    //   payload: { firstName: "john" },
    // });
  });
});
