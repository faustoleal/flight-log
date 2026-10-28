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
          <h1 className="font-serif font-normal text-[42px] tracking-[-0.04em] mt-3 mb-1 mx-0">
            Tus totales
          </h1>
          <p className="text-[#7e8789] text-[13px] m-0">
            Una vista general de tu experiencia de vuelo.
          </p>
        </div>
        <button className="border border-[var(--border)] bg-[var(--card)] text-[#657076] text-[11px] py-0 px-[13px] flex items-center gap-2">
          <CalendarDays size={16} /> Todo el tiempo <ChevronRight size={15} />
        </button>
      </header>
      <div className="grid grid-cols-4 gap-[13px]"></div>
      <div className="grid grid-cols-[1.3fr_1fr] gap-[13px] mt-[13px]">
        <div className="p-[24px] border border-[var(--border)] bg-[var(--card)]">
          <div className="flex justify-between items-start">
            <div>
              <span className="flex items-center gap-[7px] text-[#ba8235] text-[10px] font-[Courier_New,monospace] tracking-[0.14em]">
                PROGRESO
              </span>
              <h2 className="font-serif font-normal text-[22px] mt-[9px]">
                Tu experiencia
              </h2>
            </div>
            <span className="text-xs text-[#679477] font-[Courier_New,monospace]">
              +12.4%
            </span>
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
