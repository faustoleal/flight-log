import BarChart from "../ui/BarChart";
import DoghnutChart from "../ui/DoghnutChart";
import Header from "../ui/Header";
import HorizontalBarChart from "../ui/HorizontalBarChart";
import { Panel } from "../ui/Panel";

const AnalyticsPage = () => {
  return (
    <section className="content-view">
      <Header
        span="DATOS DE VUELO"
        title="Analítica"
        subtitle="Conoce tu forma de volar."
      />
      <div className="grid grid-cols-[1.35fr_0.8fr] gap-[13px]">
        <Panel className="min-h-[340px]">
          <Panel.Title>
            <div>
              <Panel.Eyebrow>HORAS POR AÑO</Panel.Eyebrow>
              <Panel.H2>Tu evolución</Panel.H2>
            </div>
            <span className="text-lg font-serif text-[#263a49]">
              369h <small>total</small>
            </span>
          </Panel.Title>
          <BarChart />
        </Panel>
        <Panel className="min-h-[340px]">
          <Panel.Title>
            <div>
              <Panel.Eyebrow>POR AERONAVE</Panel.Eyebrow>
              <Panel.H2>Flota</Panel.H2>
            </div>
          </Panel.Title>
          <div className="flex items-center gap-[25px] mt-[34px]">
            <DoghnutChart />
            <ul className="list-none p-0 m-0 flex-1">
              <li className="flex items-center gap-[7px] text-[#707b7e] text-[10px] py-[9px] border-b border-[#eceae5]">
                <i className="w-[7px] h-[7px] rounded-full bg-[#c19250]" />
                LV-ABC{" "}
                <b className="ml-auto text-[10px] font-['Courier_New'] text-[#364e5a]">
                  28%
                </b>
              </li>
              <li className="flex items-center gap-[7px] text-[#707b7e] text-[10px] py-[9px] border-b border-[#eceae5]">
                <i className="w-[7px] h-[7px] rounded-full bg-[#627e84]" />
                LV-DEF{" "}
                <b className="ml-auto text-[10px] font-['Courier_New'] text-[#364e5a]">
                  57%
                </b>
              </li>
              <li className="flex items-center gap-[7px] text-[#707b7e] text-[10px] py-[9px] border-b border-[#eceae5]">
                <i className="w-[7px] h-[7px] rounded-full bg-[#aeb6ad]" />
                LV-GHI{" "}
                <b className="ml-auto text-[10px] font-['Courier_New'] text-[#364e5a]">
                  14%
                </b>
              </li>
            </ul>
          </div>
        </Panel>
        <Panel>
          <Panel.Title>
            <div>
              <Panel.Eyebrow>DESTINOS</Panel.Eyebrow>
              <Panel.H2>Lugares más visitados</Panel.H2>
            </div>
          </Panel.Title>
          <HorizontalBarChart />
        </Panel>
      </div>
    </section>
  );
};

export default AnalyticsPage;
