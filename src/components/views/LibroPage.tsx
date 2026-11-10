"use client";

import { useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, Search } from "lucide-react";
import Header from "../ui/Header";

const flights = [
  ["26 Jun 2024", "LEMD", "GCTS", "Airbus A320", "3h 42m", "Día"],
  ["18 Jun 2024", "GCTS", "GCLP", "Cessna 172", "1h 26m", "Día"],
  ["04 Jun 2024", "GCLP", "GCFV", "Cessna 172", "2h 08m", "Día"],
  ["28 May 2024", "GCFV", "LEMD", "Boeing 737", "2h 54m", "Noche"],
  ["12 May 2024", "LEMD", "LPPT", "Airbus A320", "1h 18m", "Día"],
  ["06 May 2024", "LPPT", "LEMD", "Airbus A320", "1h 24m", "Día"],
  ["23 Apr 2024", "LEMD", "LFPG", "Boeing 737", "2h 16m", "Noche"],
  ["11 Apr 2024", "LFPG", "LEMD", "Boeing 737", "2h 08m", "Día"],
  ["26 Mar 2024", "LEMD", "GCLP", "Cessna 172", "2h 04m", "Día"],
];

export function LibroPage() {
  const [page, setPage] = useState(1);

  return (
    <section className="max-w-[1190px] m-auto px-[6%] py-[54px]">
      <Header
        span="REGISTRO DE VUELOS"
        title="Mis vuelos"
        subtitle="Todos tus vuelos, en un solo lugar"
        button={
          <button className="primary-btn">
            <span>+</span> Añadir vuelo
          </button>
        }
      />
      <div className="toolbar">
        <div className="search-box">
          <Search size={16} />
          <input placeholder="Buscar aeropuerto, avión..." />
        </div>
        <button className="filter-btn">
          <CalendarDays size={16} /> 2024 <ChevronRight size={15} />
        </button>
      </div>
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>FECHA</th>
              <th>RUTA</th>
              <th>AERONAVE</th>
              <th>DURACIÓN</th>
              <th>TIPO</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr key={index}>
                <td>{flight[0]}</td>
                <td>
                  <b>{flight[1]}</b>
                  <span className="route-arrow">→</span>
                  <b>{flight[2]}</b>
                </td>
                <td>{flight[3]}</td>
                <td className="duration">{flight[4]}</td>
                <td>
                  <span
                    className={`flight-badge ${flight[5] === "Noche" ? "night" : ""}`}
                  >
                    {flight[5]}
                  </span>
                </td>
                <td>
                  <button className="dots">···</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <span>Mostrando 15 de 24 vuelos</span>
          <div>
            <button disabled={page === 1} onClick={() => setPage(1)}>
              <ChevronLeft size={15} />
            </button>
            <button className="page-active">1</button>
            <button onClick={() => setPage(2)}>2</button>
            <button onClick={() => setPage(3)}>3</button>
            <button onClick={() => setPage(2)}>
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LibroPage;
