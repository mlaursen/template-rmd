import type { ReactNode } from "react";
import type { LayoutNavigationTree, LayoutNavigationItem } from "react-md";
import { HomeSVGIcon } from "react-md";

/**
 * Note: The `parentId` **must** be defaulted to `null` for the navigation tree
 * to render correctly since this uses the \@react-md/tree package behind the
 * scenes. Each item that has a `parentId` set to `null` will appear at the root
 * level of your navigation tree.
 */
function createRoute(
  pathname: string,
  children: string,
  leftAddon?: ReactNode,
  parentId: string | null = null
): LayoutNavigationItem {
  return {
    itemId: pathname,
    parentId,
    href: pathname,
    children,
    leftAddon,
  };
}

export const navItems = [
  createRoute("/", "Home", <HomeSVGIcon />),
  // createRoute("/route-1", "Route 1", <SomeSVGIcon />),
].reduce<LayoutNavigationTree>((tree, route) => {
  tree[route.itemId] = route;
  return tree;
}, {});
