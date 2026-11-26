import React from "react";

interface TableProps {
  children: React.ReactNode;
}

interface TableHeadProps {
  rowSpan?: number;
  colSpan?: number;
  children: string;
  className?: string;
}

interface TextElementProps {
  children: string | number;
  className?: string;
}

const TH = ({ rowSpan, colSpan, children, className = "" }: TableHeadProps) => {
  return (
    <th
      className={`py-[15px] px-[19px] text-[#9b9f9d] text-[9px] font-[Courier_New,monospace] tracking-[0.1em] border border-[var(--border)] ${className}`}
      rowSpan={rowSpan}
      colSpan={colSpan}
    >
      {children}
    </th>
  );
};

const TD = ({ children, className = "" }: TextElementProps) => {
  return (
    <th
      className={`py-[17px] px-[19px] text-[#647078] border border-[#eeece7] ${className}`}
    >
      {children}
    </th>
  );
};

const Table = ({ children }: TableProps) => {
  return (
    <table className="w-full min-w-[700px] text-xs border-collapse">
      {children}
    </table>
  );
};

Table.TH = TH;
Table.TD = TD;

export { Table, TH, TD };
