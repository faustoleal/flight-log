import {
  Plane,
  X,
  Settings2,
  CircleHelp,
  ShieldCheck,
  Compass,
  Table2,
  Clock3,
  BarChart3,
} from "lucide-react";

export const navItems = [
  { id: "home", label: "Inicio", icon: Compass },
  { id: "flights", label: "Mis vuelos", icon: Table2 },
  { id: "totals", label: "Totales", icon: Clock3 },
  { id: "analytics", label: "Analítica", icon: BarChart3 },
];

const Sidebar = () => {
  return (
    <aside className="w-[246px] bg-[#172737] text-[#edf1ef] flex flex-col px-[18px] pt-[27px] pb-[18px]">
      <div className="flex items-center gap-3 px-3 pb-8">
        <div className="grid place-items-center w-[35px] h-[35px] border border-[#c19352] text-[#d4a35d] rotate-[-12deg]">
          <Plane size={19} />
        </div>
        <div>
          <b className="block text-base tracking-[0.2em]">AERLOG</b>
          <span className="block text-[#91a0a8] text-[9px] font-[Courier_New] tracking-[0.16em] mt-1">
            FLIGHT LOGBOOK
          </span>
        </div>
        <button
          className="border-0 bg-transparent text-[#152333]"
          //onClick={() => setOpen(false)}
          aria-label="Cerrar menú"
        >
          <X size={18} />
        </button>
      </div>
      <div className="border-t border-b border-[#30404c] px-2 py-4 flex items-center gap-2 relative">
        <div className="w-[34px] h-[34px] grid place-items-center rounded-full bg-[#c49a5a] text-[#fffaf1] text-[11px] font-[Courier_New,monospace]">
          AM
        </div>
        <div>
          <b className="text-sm block">Alex Martínez</b>
          <span className="text-[#9ba7ad] text-[11px] block mt-1">
            Piloto privado
          </span>
        </div>
        <span className="ml-auto w-[7px] h-[7px] rounded-full bg-[#79ae91]" />
      </div>
      <nav
        className="pt-6 flex flex-col gap-2"
        aria-label="Navegación principal"
      >
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={
              "border-0 bg-transparent text-[#a9b4b9] flex gap-3 items-center py-[11px] px-3 rounded-[4px] text-left w-full hover:bg-[#243849] hover:text-[#fffaf1]"
            }
          >
            <Icon size={18} />
            <span className="text-xs">{label}</span>
            {id === "flights" && (
              <i className="ml-auto not-italic text-[10px] font-[Courier_New, monospace] text-[#c19352]">
                24
              </i>
            )}
          </button>
        ))}
      </nav>
      <div className="mt-auto flex flex-col gap-[6px]">
        <button className="border-0 bg-transparent text-[#a9b4b9] flex gap-3 items-center py-[11px] px-3 rounded-[4px] text-left w-full hover:bg-[#243849] hover:text-[#fffaf1]">
          <Settings2 size={18} />
          <span className="text-xs">Configuración</span>
        </button>
        <button className="border-0 bg-transparent text-[#a9b4b9] flex gap-3 items-center py-[11px] px-3 rounded-[4px] text-left w-full hover:bg-[#243849] hover:text-[#fffaf1]">
          <CircleHelp size={18} />
          <span className="text-xs">Ayuda</span>
        </button>
        <div className="border-t border-[#30404c] mt-[15px] pt-4 px-3 font-[Courier_New,monospace] text-[#7f9199] relative">
          <span className="text-[9px]">Última sincronización</span>
          <b className="text-[9px] block text-[#cad2d1] mt-[5px] font-normal">
            Hoy, 09:42
          </b>
          <ShieldCheck
            className="absolute right-[12px] top-[17px] text-[#78a88c]"
            size={15}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
