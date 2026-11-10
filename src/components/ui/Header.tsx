import React from "react";

interface HeaderProps {
  span: string;
  title: string;
  subtitle: string;
  button?: React.ReactNode;
}

const Header = ({ span, title, subtitle, button }: HeaderProps) => {
  return (
    <header className="flex justify-between items-end gap-5 mb-[34px]">
      <div>
        <span className="flex items-center gap-[7px] text-[#ba8235] text-[10px] font-[Courier_New,monospace] tracking-[0.14em]">
          {span}
        </span>
        <h1 className="text-[42px] font-normal font-serif mt-3 mx-0 my-[5px] tracking-[-0.04em]">
          {title}
        </h1>
        <p className="text-[#7e8789] text-[13px] m-0">{subtitle}</p>
      </div>
      {/*  Renderizado condicional del botón*/}
      {button && <>{button}</>}
    </header>
  );
};

export default Header;

<header className="section-header">
  <div>
    <span className="eyebrow">REGISTRO DE VUELOS</span>
    <h1>Mis vuelos</h1>
    <p>Todos tus vuelos, en un solo lugar.</p>
  </div>
  <button className="primary-btn">
    <span>+</span> Añadir vuelo
  </button>
</header>;
