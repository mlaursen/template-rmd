/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable import/export */
import type { RenderOptions, RenderResult } from "@testing-library/react";
import { render as baseRender } from "@testing-library/react";
import type { ReactElement } from "react";
import { Fragment } from "react";
import {
  DEFAULT_DESKTOP_LARGE_MIN_WIDTH,
  DEFAULT_DESKTOP_MIN_WIDTH,
  DEFAULT_PHONE_MAX_WIDTH,
  DEFAULT_TABLET_MAX_WIDTH,
} from "react-md";

import { Providers } from "./components/Providers";

export * from "@testing-library/react";
export * from "@testing-library/user-event";

/**
 * An updated render function that wraps the tests in the required providers.
 */
export function render(
  ui: ReactElement,
  { wrapper: ProvidedWrapper = Fragment, ...options }: RenderOptions = {}
): RenderResult {
  return baseRender(ui, {
    ...options,
    wrapper: function TestWrapper({ children }) {
      return (
        <Providers>
          <ProvidedWrapper>{children}</ProvidedWrapper>
        </Providers>
      );
    },
  });
}

/**
 * A util to mock the window.matchMedia to a specific app size.
 *
 * @example
 * Simple Example
 * ```tsx
 * it("should render correctly on mobile", () => {
 *   const media = mockMedia("phone"):
 *   const { container } = render(<MyComponent />);
 *   expect(container).toMatchSnapshot();
 *
 *   media.mockRestore();
 * });
 * ```
 *
 * @param size - The app size to enforce
 * @returns the matchMedia mock that **must** have `.mockRestore()` called at
 * the end of the test
 */
export function mockMedia(
  size: "phone" | "tablet" | "desktop"
): jest.SpyInstance<MediaQueryList, [query: string]> {
  let regexp: RegExp;
  switch (size) {
    case "phone":
      regexp = new RegExp(`max-width: ${DEFAULT_PHONE_MAX_WIDTH}`);
      break;
    case "tablet":
      regexp = new RegExp(`max-width: ${DEFAULT_TABLET_MAX_WIDTH}`);
      break;
    case "desktop":
      regexp = new RegExp(
        `min-width: (${DEFAULT_DESKTOP_MIN_WIDTH}|${DEFAULT_DESKTOP_LARGE_MIN_WIDTH})`
      );
      break;
  }

  return jest.spyOn(window, "matchMedia").mockImplementation((query) => ({
    media: query,
    matches: regexp.test(query),
    onchange: () => {},
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }));
}
