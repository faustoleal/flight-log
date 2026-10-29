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
          <div className="mt-[25px]">
            <div className="flex justify-between text-[#657078] text-xs">
              <span>Vuelo solo</span>
              <b className="text-[#324653] text-[11px] font-[Courier_New,monospace] font-normal">
                162h 18m
              </b>
            </div>
            <div className="h-[6px] mt-[10px] bg-[#e9e8e2]">
              <i className="h-[100%] w-[65%] block bg-[#bb8a43]" />
            </div>
          </div>
          <div className="mt-[25px]">
            <div className="flex justify-between text-[#657078] text-xs">
              <span>Con instructor</span>
              <b className="text-[#324653] text-[11px] font-[Courier_New,monospace] font-normal">
                86h 18m
              </b>
            </div>
            <div className="h-[6px] mt-[10px] bg-[#e9e8e2]">
              <i className="h-[100%] w-[35%] block bg-[#718d91]" />
            </div>
          </div>
          <div className="mt-[25px] bg-[#f2eee5] text-[#ad7937] p-3 flex items-center gap-[10px]">
            <Sparkles size={17} />
            <span>
              <b className="block text-[#80633e] text-xs">
                ¡Estás a 1h 24m de tu próximo hito!
              </b>
              <small className="block text-[#9b9890] text-[10px] mt-1">
                250 horas de vuelo registradas
              </small>
            </span>
          </div>
        </div>
        <div className="p-6 bg-[#e9e3d6] border border-[#e1d9c8]">
          <span className="flex items-center gap-[7px] text-[#ba8235] text-[10px] font-[Courier_New,monospace] tracking-[0.14em]">
            RÉCORD PERSONAL
          </span>
          <h2 className="mt-[9px] text-[22px] font-400 font-serif">
            Tu vuelo más largo
          </h2>
          <strong className="block text-[#263a49] text-[48px] font-serif mt-[24px] mb-[5px] font-normal">
            4h 12m
          </strong>
          <span className="text-xs font-[Courier_New,monospace] text-[#718080]">
            LEMD <small className="text-[#a77b3d]">→</small> LIRF
          </span>
          <div className="h-[37px] flex items-center gap-2 mt-[28px] mb-[6px] ">
            <div className="flex-1 h-[1px] bg-[#c2ad8d] relative" />
            <div className="flex-1 h-[1px] bg-transparent border-t border-dashed border-[#b18550] relative" />
            <div className="flex-1 h-[1px] bg-[#c2ad8d] relative" />
          </div>
          <small className="text-[10px] text-[#98958b]">
            14 de agosto, 2023 · Airbus A320
          </small>
        </div>
      </div>
    </section>
  );
};

export default TotalesPage;
