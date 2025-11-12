import React from "react";

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  [x: string]: any;
}

export default function Section({
  title,
  subtitle,
  children,
  ...props
}: SectionProps) {
  return (
    <section {...props}>
      <div className="text-center max-w-[400px] mx-auto">
        <h2 className="text-white font-extrabold text-[40px]">{title}</h2>
        <span className="bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent font-semibold text-sm">
          {subtitle}
        </span>
      </div>
      {children}
    </section>
  );
}
