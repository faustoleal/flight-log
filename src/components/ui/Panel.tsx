import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

interface PanelProps {
  children: React.ReactNode;
  className?: string;
}

interface TextElementProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <div className="flex justify-between items-start">{children}</div>;
};

const Eyebrow = ({ children }: TextElementProps) => {
  return (
    <span className="flex items-center gap-[7px] text-[#ba8235] text-[10px] font-[Courier_New,monospace] tracking-[0.14em]">
      {children}
    </span>
  );
};

const H2 = ({ children }: TextElementProps) => {
  return (
    <h2 className="text-[22px] font-serif font-normal mt-[9px] mx-0 mb-0">
      {children}
    </h2>
  );
};

const Panel = ({ children, className = "" }: PanelProps) => {
  return (
    <section
      className={`bg-[var(--card)] border border-[var(--border)] p-6 ${className}`}
    >
      {children}
    </section>
  );
};

Panel.Title = Title;
Panel.Eyebrow = Eyebrow;
Panel.H2 = H2;

export { Panel, Eyebrow, H2, Title };
