"use client";

import { useState } from "react";
import type { FunctionComponent, ReactNode } from "react";
import Link from "next/link";
import cx from "clsx";
import Nav from "@/components/nav";

import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((open) => !open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const items = [
    "home",
    "experience",
    "education",
    "skills",
    "projects",
    "interests",
    "download",
  ];

  return (
    <div className="flex w-full flex-col font-sans lg:flex-row">
      <header className="contents">
        <Nav open={open} onToggle={handleToggle} onClose={handleClose}>
          <div className="block w-full text-gray-400 md:ml-auto md:flex md:w-auto md:items-start lg:block lg:h-auto lg:items-center">
            {items.map((label) => (
              <Link
                href={`/#${label}`}
                key={`sidebar-${label}`}
                className={cx(
                  styles.navLink,
                  "group flex w-full items-center justify-start rounded py-2 uppercase hover:bg-gray-900 hover:text-white focus:outline-none lg:justify-center",
                )}
                onClick={handleClose}
              >
                <span
                  className={cx(
                    styles.navSpan,
                    "px-px py-px text-gray-400 group-focus:bg-yellow-500 group-focus:text-gray-900 lg:px-0.5",
                  )}
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </Nav>
      </header>
      <div className="w-full">{children}</div>
    </div>
  );
};
export default Layout;
