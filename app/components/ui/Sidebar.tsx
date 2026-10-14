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
    <aside className={`sidebar`}>
      <div className="brand-row">
        <div className="brand-mark">
          <Plane size={19} />
        </div>
        <div>
          <b>AERLOG</b>
          <span>FLIGHT LOGBOOK</span>
        </div>
        <button
          className="mobile-close"
          //onClick={() => setOpen(false)}
          aria-label="Cerrar menú"
        >
          <X size={18} />
        </button>
      </div>
      <div className="pilot-mini">
        <div className="avatar">AM</div>
        <div>
          <b>Alex Martínez</b>
          <span>Piloto privado</span>
        </div>
        <span className="online-dot" />
      </div>
      <nav aria-label="Navegación principal">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button key={id} className={"nav-item"}>
            <Icon size={18} />
            <span>{label}</span>
            {id === "flights" && <i>24</i>}
          </button>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <button className="nav-item">
          <Settings2 size={18} />
          <span>Configuración</span>
        </button>
        <button className="nav-item">
          <CircleHelp size={18} />
          <span>Ayuda</span>
        </button>
        <div className="sidebar-footer">
          <span>Última sincronización</span>
          <b>Hoy, 09:42</b>
          <ShieldCheck size={15} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
