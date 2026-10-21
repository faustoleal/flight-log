import { Sparkles, Plus } from "lucide-react";

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
        <div className="w-[min(38vw,390px)] aspect-square mx-auto rounded-full border border-[#c9bda6] relative opacity-90 bg-[repeating-radial-gradient(circle,transparent_0_27%,#d7cfbf_27.3%_27.6%),linear-gradient(90deg,transparent_49.7%,#d7cfbf_50%,transparent_50.3%),linear-gradient(0deg,transparent_49.7%,#d7cfbf_50%,transparent_50.3%)]">
          <div className="absolute inset-[13%] border rounded-full border-dashed border-[#cabd9e]" />
          <div className="absolute w-50 h-[1px] left-1/2 top-1/2 bg-[#af7c3b] origin-left animate-[sweep_5s_linear_infinite]" />
          <span className="absolute w-[8px] h-[8px] rounded-full bg-[#b98239] shadow-[0_0_0_5px_#b9823920] left-[27%] top-[38%]" />
          <span className="absolute w-[8px] h-[8px] rounded-full bg-[#b98239] shadow-[0_0_0_5px_#b9823920] right-[22%] top-[63%]" />
          <div className="absolute text-[#b4a88f] text-[9px] font-[Courier_New,monospace] top-[9%] left-[32%]">
            N 40°24&apos; W 003°42&apos;
          </div>
          <div className="absolute text-[#b4a88f] text-[9px] font-[Courier_New,monospace] bottom-[9%] left-[28%]">
            ALT 35,000 FT
          </div>
        </div>
      </div>
      <div className="absolute bottom-[30px] left-[9%] right-[9%] flex gap-[60px] border-t border-[#d3cec3] pt-[19px]">
        <div>
          <span className="block text-[#526467] text-[9px] font-[Courier_New,monospace] tracking-[0.1em]">
            HORAS REGISTRADAS
          </span>
          <strong className="block text-[#526467] text-[17px] font-[Georgia,serif] font-normal mt-2">
            248
            <span className="inline text-[#a97d42] text-xs font-[Arial]">
              h
            </span>{" "}
            36
            <span className="inline text-[#a97d42] text-xs font-[Arial]">
              m
            </span>
          </strong>
        </div>
        <div>
          <span className="block text-[#526467] text-[9px] font-[Courier_New,monospace] tracking-[0.1em]">
            VUELOS ESTE AÑO
          </span>
          <strong className="block text-[#526467] text-[17px] font-[Georgia,serif] font-normal mt-2">
            24
          </strong>
        </div>
        <div>
          <span className="block text-[#526467] text-[9px] font-[Courier_New,monospace] tracking-[0.1em]">
            RUTA MÁS VOLADA
          </span>
          <strong className="block text-[#526467] text-[17px] font-[Georgia,serif] font-normal mt-2">
            LEMD <small className="text-[#b98239] text-[15px]">→</small> GCLP
          </strong>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
