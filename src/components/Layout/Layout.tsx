import { useRouter } from "next/router";
import type { ReactElement, ReactNode } from "react";
import { Layout as RMDLayout, useLayoutNavigation } from "react-md";

import { LinkUnstyled } from "../LinkUnstyled";
import { navItems } from "./navItems";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps): ReactElement {
  const { pathname } = useRouter();

  return (
    <RMDLayout
      tabletLayout="temporary"
      landscapeTabletLayout="temporary"
      desktopLayout="temporary"
      largeDesktopLayout="temporary"
      treeProps={useLayoutNavigation(navItems, pathname, LinkUnstyled)}
    >
      {children}
    </RMDLayout>
  );
}
