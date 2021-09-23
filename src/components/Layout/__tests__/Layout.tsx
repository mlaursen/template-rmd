import React from "react";
import { render } from "../../../test-utils";
import { Layout } from "../Layout";

jest.mock("next/router", () => {
  const router = jest.requireActual("next/router");
  return {
    ...router,
    useRouter() {
      return { pathname: "/" };
    },
  };
});

describe("Layout", () => {
  // honestly doesn't test anything
  it("should render without crashing", () => {
    expect(() =>
      render(
        <Layout>
          <h1>Hello, world!</h1>
        </Layout>
      )
    ).not.toThrow();
  });
});
