import { renderWithEverything } from "utils/testUtils";
import { ResultField } from "./ResultField";
import { Field } from "types";
import { screen } from "@testing-library/react";

const setup = (props: { field: Field }) => {
  renderWithEverything(<ResultField {...props} />, {
    preloadedState: {
      person: {
        data: {
          firstName: "john",
          reason: "reason1\nreason2",
        },
      },
    },
  });
};

describe("ResultField", () => {
  test("return correct text data", () => {
    setup({
      field: {
        id: "firstName",
        type: "text",
      },
    });
    expect(screen.getByText(/FirstName/)).toBeInTheDocument();
    expect(screen.getByText(/john/)).toBeInTheDocument();
  });

  test("return correct text area data", () => {
    setup({
      field: {
        id: "reason",
        type: "textarea",
      },
    });
    expect(screen.getByText(/Reason/)).toBeInTheDocument();
    expect(screen.getByText(/reason1/)).toBeInTheDocument();
    expect(screen.getByText(/reason2/)).toBeInTheDocument();
  });

  test("return N/A when the data is empty", () => {
    setup({
      field: {
        id: "lastName",
        type: "text",
      },
    });
    expect(screen.getByText(/LastName/)).toBeInTheDocument();
    expect(screen.getByText(/N\/A/)).toBeInTheDocument();
  });
});
