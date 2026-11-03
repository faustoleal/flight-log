import BarChart from "../ui/BarChart";
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
        <div className="panel donut-panel">
          <div className="panel-title">
            <div>
              <span className="eyebrow">POR AERONAVE</span>
              <h2>Flota</h2>
            </div>
          </div>
          <div className="donut-wrap">
            <div className="donut">
              <div>
                <b>248h</b>
                <small>total</small>
              </div>
            </div>
            <ul>
              <li>
                <i className="legend one" />
                Airbus A320 <b>42%</b>
              </li>
              <li>
                <i className="legend two" />
                Cessna 172 <b>35%</b>
              </li>
              <li>
                <i className="legend three" />
                Boeing 737 <b>23%</b>
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
