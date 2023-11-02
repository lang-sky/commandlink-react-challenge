import { renderWithEverything } from "utils/testUtils";
import { ThankYou } from ".";
import { screen } from "@testing-library/react";
import { DynamicLayoutProps } from "components/DynamicLayout";
import { FIELD_SET } from "constants/field-set";
import { ResultField } from "./components/ResultField";
import { NavigateProps } from "react-router-dom";
import { routes } from "constants/routes";

const mockDynamicLayout = jest.fn();
const mockNavigate = jest.fn();

jest.mock("components/DynamicLayout", () => ({
  ...jest.requireActual("components/DynamicLayout"),
  DynamicLayout: (props: DynamicLayoutProps) => {
    mockDynamicLayout(props);
    return null;
  },
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: (props: NavigateProps) => {
    mockNavigate(props);
    return null;
  },
}));

describe("ThankYou", () => {
  test("navigate to index page when person data is invalid", () => {
    renderWithEverything(<ThankYou />);
    expect(mockNavigate).toHaveBeenCalledWith({
      to: routes.index,
    });
  });

  test("should render correct elements when person data is valid", () => {
    renderWithEverything(<ThankYou />, {
      preloadedState: {
        person: {
          data: {
            firstName: "john",
          },
        },
      },
    });

    expect(screen.getByText("Thank you")).toBeInTheDocument();
    expect(mockDynamicLayout).toHaveBeenCalled();
    expect(mockDynamicLayout).toHaveBeenCalledWith({
      fieldSet: FIELD_SET,
      FieldComponent: ResultField,
    });
  });
});
