import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  styleButton?: string;
  tag?: any;
  [x: string]: any;
}

export default function Button({
  children,
  styleButton,
  tag,
  ...props
}: ButtonProps) {
  const Tag = tag || "a";
  let style =
    "border border-[#4FC3F7] inline-block text-white hover:scale-95 transition-transform duration-300";
  if (styleButton) {
    style += ` ${styleButton}`;
  }
  return (
    <Tag {...props} className={style}>
      {children}
    </Tag>
  );
}
