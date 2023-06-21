"use client";
import React from "react";
import Link from "next/link";

export default function Button({
  children,
  variant = "internalLink",
  href = "/",
  ...props
}: {
  children: React.ReactNode;
  variant?: "samePageLink" | "internalLink" | "externalLink";
  href?: string;
  [x: string]: any;
}) {
  const buttonClasses =
    "bg-purple-800 dark:bg-transparent dark:border-2 dark:border-purple-400 hover:bg-purple-800 hover:scale-105 transition ease-in-out delay-100 rounded-md px-4 py-2 text-white font-bold";

  const componentPickList = {
    samePageLink: "button",
    internalLink: Link,
    externalLink: "a",
  };

  const propsPickList = {
    samePageLink: {
      onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const target = document.querySelector(href!);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      },
    },
    internalLink: {},
    externalLink: { target: "_blank", rel: "noreferrer" },
  };

  return React.createElement(
    componentPickList[variant],
    {
      className: buttonClasses,
      href,
      ...propsPickList[variant],
    } as any,
    children
  );
}
