import {
  CalendarDays,
  Clock3,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  ChevronRight,
} from "lucide-react";

const TotalesPage = () => {
  return (
    <section className="max-w-[1190px] py-[54px] px-[6%] m-auto">
      <header className="flex justify-between items-end gap-5 mb-[34px]">
        <div>
          <span className="flex gap-[7px] items-center text-[#ba8235] text-[10px] font-[Courier_New,monospace] tracking-[0.14em]">
            RESUMEN DE ACTIVIDAD
          </span>
          <h1>Tus totales</h1>
          <p>Una vista general de tu experiencia de vuelo.</p>
        </div>
        <button className="filter-btn">
          <CalendarDays size={16} /> Todo el tiempo <ChevronRight size={15} />
        </button>
      </header>
      <div className="stats-grid"></div>
      <div className="totals-lower">
        <div className="panel progress-panel">
          <div className="panel-title">
            <div>
              <span className="eyebrow">PROGRESO</span>
              <h2>Tu experiencia</h2>
            </div>
            <span className="trend">+12.4%</span>
          </div>
          <div className="progress-row">
            <div>
              <span>Vuelo solo</span>
              <b>162h 18m</b>
            </div>
            <div className="progress-track">
              <i style={{ width: "65%" }} />
            </div>
          </div>
          <div className="progress-row">
            <div>
              <span>Con instructor</span>
              <b>86h 18m</b>
            </div>
            <div className="progress-track">
              <i style={{ width: "35%" }} />
            </div>
          </div>
          <div className="milestone">
            <Sparkles size={17} />
            <span>
              <b>¡Estás a 1h 24m de tu próximo hito!</b>
              <small>250 horas de vuelo registradas</small>
            </span>
          </div>
        </div>
        <div className="panel highlight-panel">
          <span className="eyebrow">RÉCORD PERSONAL</span>
          <h2>Tu vuelo más largo</h2>
          <strong>4h 12m</strong>
          <span>
            LEMD <small>→</small> LIRF
          </span>
          <div className="mini-route">
            <div />
            <div />
            <div />
          </div>
          <small>14 de agosto, 2023 · Airbus A320</small>
        </div>
      </div>
    </section>
  );
};

export default TotalesPage;
