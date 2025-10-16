import { render } from "@testing-library/react";

import { CommonUi } from "./common-ui";

describe("CommonUi", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CommonUi />);
    expect(baseElement).toBeTruthy();
  });

  it.each([1, 2, 3, 4, 5])(
    "slow running test case with 3 seconds per test",
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const { queryByTestId } = render(<CommonUi />);
      const element = queryByTestId("common-ui-title")!;
      expect(element.textContent!).toEqual("Welcome to CommonUi!");
    }
  );
});
