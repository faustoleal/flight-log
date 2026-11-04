import BarChart from "../ui/BarChart";
import DoghnutChart from "../ui/DoghnutChart";
import Header from "../ui/Header";

const AnalyticsPage = () => {
  return (
    <section className="content-view">
      <Header
        span="DATOS DE VUELO"
        title="Analítica"
        subtitle="Conoce tu forma de volar."
      />
      <div className="grid grid-cols-[1.35fr_0.8fr] gap-[13px]">
        <div className="p-6 min-h-[340px] border border-[var(--border)] bg-[var(--card)]">
          <div className="flex justify-between items-start">
            <div>
              <span className="flex items-center gap-[7px] text-[#ba8235] text-[10px] font-[Courier_New,monospace] tracking-[0.14em]">
                HORAS POR AÑO
              </span>
              <h2 className="text-[22px] font-serif font-normal mt-[9px] mx-0 mb-0">
                Tu evolución
              </h2>
            </div>
            <span className="text-lg font-serif text-[#263a49]">
              248h <small>total</small>
            </span>
          </div>
          <BarChart />
        </div>
        <div className="p-6 min-h-[340pxs] border border-[var(--border)] bg-[var(--card)]">
          <div className="flex justify-between items-start">
            <div>
              <span className="flex items-center gap-[7px] text-[#ba8235] text-[10px] font-[Courier_New,monospace] tracking-[0.14em]">
                POR AERONAVE
              </span>
              <h2 className="text-[22px] font-serif font-normal mt-[9px] mx-0 mb-0">
                Flota
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-[25px] mt-[34px]">
            <DoghnutChart />
            <ul className="list-none p-0 m-0 flex-1">
              <li className="flex items-center gap-[7px] text-[#707b7e] text-[10px] py-[9px] border-b border-[#eceae5]">
                <i className="w-[7px] h-[7px] rounded-full bg-[#c19250]" />
                LV-WHU{" "}
                <b className="ml-auto text-[10px] font-['Courier_New'] text-[#364e5a]">
                  28%
                </b>
              </li>
              <li className="flex items-center gap-[7px] text-[#707b7e] text-[10px] py-[9px] border-b border-[#eceae5]">
                <i className="w-[7px] h-[7px] rounded-full bg-[#627e84]" />
                LV-CMC{" "}
                <b className="ml-auto text-[10px] font-['Courier_New'] text-[#364e5a]">
                  57%
                </b>
              </li>
              <li className="flex items-center gap-[7px] text-[#707b7e] text-[10px] py-[9px] border-b border-[#eceae5]">
                <i className="w-[7px] h-[7px] rounded-full bg-[#aeb6ad]" />
                LV-NUF{" "}
                <b className="ml-auto text-[10px] font-['Courier_New'] text-[#364e5a]">
                  14%
                </b>
              </li>
            </ul>
          </div>
        </div>
        <div className="panel visits-panel">
          <div className="panel-title">
            <div>
              <span className="eyebrow">DESTINOS</span>
              <h2>Lugares más visitados</h2>
            </div>
          </div>
          {[
            ["GCLP", "Gran Canaria", "18"],
            ["LEMD", "Madrid", "14"],
            ["GCTS", "Tenerife Sur", "9"],
          ].map(([code, name, count]) => (
            <div className="destination" key={code}>
              <b>{code}</b>
              <span>{name}</span>
              <strong>
                {count} <small>vuelos</small>
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsPage;
