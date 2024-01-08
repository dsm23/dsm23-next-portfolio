import type { AnchorHTMLAttributes, FunctionComponent } from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";
import cx from "clsx";
import { twMerge } from "tailwind-merge";
import { GoBack } from "@/components/svgs";

import styles from "./styles.module.css";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;

export const StyledGoBack: FunctionComponent<Props> = ({
  className,
  ...props
}) => (
  <Link {...props} className={cx(twMerge(styles.anchor, "w-min", className))}>
    <GoBack className={cx(styles.svg, "h-8 w-8")} aria-label="Go Back" />
  </Link>
);

export default StyledGoBack;
