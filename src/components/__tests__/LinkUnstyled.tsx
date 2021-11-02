import { render } from "../../test-utils";
import { LinkUnstyled } from "../LinkUnstyled";

describe("LinkUnstyled", () => {
  it("should prevent external links from doing bad things", () => {
    const { getByRole } = render(
      <LinkUnstyled href="https://example.com">Example</LinkUnstyled>
    );

    const link = getByRole("link");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should render internal links with the next link", () => {
    const { getByRole } = render(
      <LinkUnstyled href="/some-page">Example</LinkUnstyled>
    );

    const link = getByRole("link");
    expect(link).not.toHaveAttribute("rel", "noopener noreferrer");
  });
});
