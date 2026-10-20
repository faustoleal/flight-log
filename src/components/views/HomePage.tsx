import { Sparkles, Plus, PlaneTakeoff } from "lucide-react";

const HomePage = () => {
  return (
    <section className="min-h-[calc(100vh - 73px)] bg-[#e9e5dc] relative overflow-hidden px-[9%] pb-[38px] pt-[clamp(50px,9vw,105px)] after:absolute after:right-[5%] after:top-[32%] after:rotate-90 after:content-['FLIGHT_RECORD_/_005'] after:font-['Courier_New',monospace] after:text-[10px] after:tracking-[0.22em] after:text-[#c9c4b8]">
      <div className="max-w-[440px] relative z-1">
        <span className="eyebrow">
          <Sparkles size={14} /> TU BITÁCORA DIGITAL
        </span>
        <h1 className="font-['Georgia',serif] font-normal leading-[0.9] text-[clamp(52px,7vw,88px)] text-[#203548] tracking-[-0.07em] my-[27px] mx-0">
          El cielo es
          <br />
          <em className="text-[#b98239] font-italic">tu cuaderno.</em>
        </h1>
        <p className="max-w-[340px] text-[#77807f] text-[14px] leading-[1.65]">
          Registra cada despegue, descubre tus patrones de vuelo y mantén tu
          progreso siempre a la vista.
        </p>
        <button className="border-0 bg-[#b9853d] text-[#fffaf1] py-3 px-[17px] inline-flex items-center gap-2 text-xs rounded-[3px] shadow-[0_4px_12px_#b9853d26] mt-5 hover:bg-[#a97430]">
          <Plus size={17} /> Registrar nuevo vuelo
        </button>
      </div>
      <div className="absolute right-[7%] top-[15%] w-[min(43vw - 480px)]">
        <div className="radar">
          <div className="radar-cross" />
          <div className="radar-sweep" />
          <span className="radar-point point-a" />
          <span className="radar-point point-b" />
          <div className="radar-label top">N 40°24&apos; W 003°42&apos;</div>
          <div className="radar-label bottom">ALT 35,000 FT</div>
        </div>
        <div className="flight-line">
          <PlaneTakeoff size={17} />
          <span>LEMD</span>
          <div />
          <span>LEBL</span>
        </div>
      </div>
      <div className="home-bottom">
        <div>
          <span>HORAS REGISTRADAS</span>
          <strong>
            248<span>h</span> 36<span>m</span>
          </strong>
        </div>
        <div>
          <span>VUELOS ESTE AÑO</span>
          <strong>24</strong>
        </div>
        <div>
          <span>RUTA MÁS VOLADA</span>
          <strong>
            LEMD <small>→</small> GCLP
          </strong>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
