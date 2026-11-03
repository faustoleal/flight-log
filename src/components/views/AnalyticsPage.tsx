import Header from "../ui/Header";

const AnalyticsPage = () => {
  const years = [38, 52, 31, 68, 84, 96];
  return (
    <section className="content-view">
      <Header
        span="DATOS DE VUELO"
        title="Analítica"
        subtitle="Conoce tu forma de volar."
      />
      <div className="analytics-grid">
        <div className="panel chart-panel">
          <div className="panel-title">
            <div>
              <span className="eyebrow">HORAS POR AÑO</span>
              <h2>Tu evolución</h2>
            </div>
            <span className="chart-total">
              248h <small>total</small>
            </span>
          </div>
          <div className="bar-chart">
            {years.map((height, index) => (
              <div className="bar-col" key={index}>
                <div className="bar" style={{ height: `${height}%` }}>
                  <span>{[12, 28, 44, 67, 82, 98][index]}h</span>
                </div>
                <small>{2019 + index}</small>
              </div>
            ))}
          </div>
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
