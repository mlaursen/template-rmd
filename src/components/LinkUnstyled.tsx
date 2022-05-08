import type { ReactElement, AnchorHTMLAttributes } from "react";
import type { LinkProps } from "next/link";
import Link from "next/link";

export interface LinkUnstyledProps
  extends Omit<
      LinkProps,
      "children" | "passHref" | "onError" | "onClick" | "onMouseEnter"
    >,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onError" | "href"> {}

export function LinkUnstyled({
  as,
  href,
  scroll,
  shallow,
  replace,
  children,
  ...props
}: LinkUnstyledProps): ReactElement {
  if (typeof href === "string" && href.startsWith("http")) {
    // external links
    return (
      <a {...props} href={href} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link
      shallow={shallow}
      scroll={scroll}
      replace={replace}
      href={href}
      as={as}
    >
      <a {...props}>{children}</a>
    </Link>
  );
}
