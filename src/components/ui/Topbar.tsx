import { ChevronRight, LogOut } from "lucide-react";

const Topbar = () => {
  return (
    <header className="h-[73px] w-full flex items-center justify-between px-[42px] border-b border-[#dedbd4] bg-[rgba(255, 254, 250, 0.7)]">
      {/* <button
            className="menu-trigger"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={20} />
          </button> */}
      <div className="flex gap-3 items-center text-[#a2a4a0] font-['Courier_New' ,monospace] text-[10px] tracking-[0.08em] font-[Courier_New,monospace]">
        <span>AERLOG</span>
        <span>/</span>
        <b className="text-[#344555] font-normal">Mis Vuelos</b>
      </div>
      <div className="flex items-center gap-[18px]">
        <span className="text-[10px] text-[#7a9382] first-letter:text-[#72a17f] font-[Courier_New,monospace]">
          ● Sincronizado
        </span>
        <button className="border-0 bg-transparent flex items-center gap-2 text-xs text-[#334454]">
          <div className="w-[34px] h-[34px] grid place-items-center rounded-full bg-[#c49a5a] text-[#fffaf1] text-[11px] font-[Courier_New,monospace]">
            AM
          </div>
          <span>Alex Martínez</span>
          <ChevronRight size={15} />
        </button>
        <button
          className="text-[#8b9293] border-l border-[#dedbd4] pl-[18px]"
          aria-label="Cerrar sesión"
        >
          <LogOut size={17} />
        </button>
      </div>
    </header>
  );
};

export default Topbar;
