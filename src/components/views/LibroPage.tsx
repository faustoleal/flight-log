"use client";

import { useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, Search } from "lucide-react";
import Header from "../ui/Header";
import { Table } from "../ui/Table";

const flights = [
  {
    id: 62,
    dia: "2024-09-20",
    salida: "11:05:00",
    desde: "MRD",
    hasta: "BOS",
    llegada: "11:55:00",
    finalidad: "ENT",
    modelo: "C-150",
    matricula: "LV-ABC",
    potencia: "100HP",
    clase: "MONT-T",
    local_dia_p: "0",
    local_dia_c: "0",
    local_noche_p: "0",
    local_noche_c: "0",
    travesia_dia_p: "0.8",
    travesia_dia_c: "0",
    travesia_noche_p: "0",
    travesia_noche_c: "0",
    aterrizajes: 1,
    instructor: "0",
    reactor: "0",
    multi: "0",
    turbo: "0",
    aeroaplicador: "0",
    instrumentos_real_p: "0",
    instrumentos_real_c: "0",
    capota: "0",
  },
  {
    id: 63,
    dia: "2024-09-27",
    salida: "10:05:00",
    desde: "ATE",
    hasta: "ATE",
    llegada: "11:05:00",
    finalidad: "ENT",
    modelo: "C-150",
    matricula: "LV-ABC",
    potencia: "100HP",
    clase: "MONT-T",
    local_dia_p: "1",
    local_dia_c: "0",
    local_noche_p: "0",
    local_noche_c: "0",
    travesia_dia_p: "0",
    travesia_dia_c: "0",
    travesia_noche_p: "0",
    travesia_noche_c: "0",
    aterrizajes: 5,
    instructor: "0",
    reactor: "0",
    multi: "0",
    turbo: "0",
    aeroaplicador: "0",
    instrumentos_real_p: "0",
    instrumentos_real_c: "0",
    capota: "0",
  },
  {
    id: 64,
    dia: "2024-10-18",
    salida: "10:05:00",
    desde: "ATE",
    hasta: "ATE",
    llegada: "11:05:00",
    finalidad: "ENT",
    modelo: "C-152",
    matricula: "LV-DEF",
    potencia: "110HP",
    clase: "MONT-T",
    local_dia_p: "1",
    local_dia_c: "0",
    local_noche_p: "0",
    local_noche_c: "0",
    travesia_dia_p: "0",
    travesia_dia_c: "0",
    travesia_noche_p: "0",
    travesia_noche_c: "0",
    aterrizajes: 4,
    instructor: "0",
    reactor: "0",
    multi: "0",
    turbo: "0",
    aeroaplicador: "0",
    instrumentos_real_p: "0",
    instrumentos_real_c: "0",
    capota: "0",
  },
  {
    id: 65,
    dia: "2024-10-25",
    salida: "11:45:00",
    desde: "PED",
    hasta: "ATE",
    llegada: "13:15:00",
    finalidad: "ENT",
    modelo: "C-152",
    matricula: "LV-DEF",
    potencia: "110HP",
    clase: "MONT-T",
    local_dia_p: "0",
    local_dia_c: "0",
    local_noche_p: "0",
    local_noche_c: "0",
    travesia_dia_p: "1.5",
    travesia_dia_c: "0",
    travesia_noche_p: "0",
    travesia_noche_c: "0",
    aterrizajes: 1,
    instructor: "0",
    reactor: "0",
    multi: "0",
    turbo: "0",
    aeroaplicador: "0",
    instrumentos_real_p: "0",
    instrumentos_real_c: "0",
    capota: "0",
  },
  {
    id: 66,
    dia: "2024-11-01",
    salida: "10:10:00",
    desde: "ATE",
    hasta: "ATE",
    llegada: "11:10:00",
    finalidad: "ENT",
    modelo: "PA-11",
    matricula: "LV-GH!",
    potencia: "115HP",
    clase: "MONT-T",
    local_dia_p: "1",
    local_dia_c: "0",
    local_noche_p: "0",
    local_noche_c: "0",
    travesia_dia_p: "0",
    travesia_dia_c: "0",
    travesia_noche_p: "0",
    travesia_noche_c: "0",
    aterrizajes: 4,
    instructor: "0",
    reactor: "0",
    multi: "0",
    turbo: "0",
    aeroaplicador: "0",
    instrumentos_real_p: "0",
    instrumentos_real_c: "0",
    capota: "0",
  },
  {
    id: 67,
    dia: "2024-11-08",
    salida: "10:35:00",
    desde: "SDL",
    hasta: "ATE",
    llegada: "12:05:00",
    finalidad: "ENT",
    modelo: "C-150",
    matricula: "LV-ABC",
    potencia: "100HP",
    clase: "MONT-T",
    local_dia_p: "0",
    local_dia_c: "0",
    local_noche_p: "0",
    local_noche_c: "0",
    travesia_dia_p: "1.5",
    travesia_dia_c: "0",
    travesia_noche_p: "0",
    travesia_noche_c: "0",
    aterrizajes: 1,
    instructor: "0",
    reactor: "0",
    multi: "0",
    turbo: "0",
    aeroaplicador: "0",
    instrumentos_real_p: "0",
    instrumentos_real_c: "0",
    capota: "0",
  },
  {
    id: 68,
    dia: "2024-11-22",
    salida: "12:35:00",
    desde: "BOS",
    hasta: "ATE",
    llegada: "13:35:00",
    finalidad: "ENT",
    modelo: "C-152",
    matricula: "LV-DEF",
    potencia: "110HP",
    clase: "MONT-T",
    local_dia_p: "0",
    local_dia_c: "0",
    local_noche_p: "0",
    local_noche_c: "0",
    travesia_dia_p: "1",
    travesia_dia_c: "0",
    travesia_noche_p: "0",
    travesia_noche_c: "0",
    aterrizajes: 1,
    instructor: "0",
    reactor: "0",
    multi: "0",
    turbo: "0",
    aeroaplicador: "0",
    instrumentos_real_p: "0",
    instrumentos_real_c: "0",
    capota: "0",
  },
  {
    id: 69,
    dia: "2024-11-29",
    salida: "17:30:00",
    desde: "ATE",
    hasta: "ATE",
    llegada: "18:30:00",
    finalidad: "ENT",
    modelo: "PA-11",
    matricula: "LV-GHI",
    potencia: "115HP",
    clase: "MONT-T",
    local_dia_p: "1",
    local_dia_c: "0",
    local_noche_p: "0",
    local_noche_c: "0",
    travesia_dia_p: "0",
    travesia_dia_c: "0",
    travesia_noche_p: "0",
    travesia_noche_c: "0",
    aterrizajes: 4,
    instructor: "0",
    reactor: "0",
    multi: "0",
    turbo: "0",
    aeroaplicador: "0",
    instrumentos_real_p: "0",
    instrumentos_real_c: "0",
    capota: "0",
  },
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
      <div className="flex gap-[10px] mb-[13px]">
        <div className="flex-1 m-w-[330px] flex gap-[9px] items-center py-[10px] px-[13px] border border-[var(--border)] bg-[var(--card)] text-[#929795]">
          <Search size={16} />
          <input
            className="border-0 outline-none bg-transparent w-full text-xs text-[var(--foreground)]"
            placeholder="Buscar aeropuerto, avión..."
          />
        </div>
        <button className="filter-btn">
          <CalendarDays size={16} /> 2024 <ChevronRight size={15} />
        </button>
      </div>
      <div className="bg-[var(--card)] border border-[var(--border)] overflow-x-auto">
        <Table>
          <thead>
            <tr>
              <Table.TH rowSpan={4}>Fecha</Table.TH>
              <Table.TH colSpan={4}>Itinerario</Table.TH>
              <Table.TH rowSpan={4}>Finalidad</Table.TH>
              <Table.TH colSpan={4}>Aeronaves utilizadas</Table.TH>
              <Table.TH colSpan={8}>Tiempos de Vuelo</Table.TH>
              <Table.TH rowSpan={4}>Aterrizajes</Table.TH>
              <Table.TH colSpan={8}>
                Discriminacion de tiempos de Vuelos
              </Table.TH>
            </tr>
            <tr>
              <Table.TH rowSpan={3}>Hora de Salidad</Table.TH>
              <Table.TH rowSpan={3}>Desde</Table.TH>
              <Table.TH rowSpan={3}>Hasta</Table.TH>
              <Table.TH rowSpan={3}>Hora de Llegada</Table.TH>
              <Table.TH rowSpan={3}>Marca/Modelo</Table.TH>
              <Table.TH rowSpan={3}>Matricula</Table.TH>
              <Table.TH rowSpan={3}>Potencia</Table.TH>
              <Table.TH rowSpan={3}>Clase</Table.TH>
              <Table.TH colSpan={4}>Sobre aerodromo</Table.TH>
              <Table.TH colSpan={4}>Travesia</Table.TH>
              <Table.TH rowSpan={3}>Instructor</Table.TH>
              <Table.TH rowSpan={3}>Multi-motor</Table.TH>
              <Table.TH rowSpan={3}>Reactor</Table.TH>
              <Table.TH rowSpan={3}>Turbo helice</Table.TH>
              <Table.TH rowSpan={3}>Aeroaplicador</Table.TH>
              <Table.TH colSpan={3}>Vuelo por instrumentos</Table.TH>
            </tr>
            <tr>
              <Table.TH colSpan={2}>De dia</Table.TH>
              <Table.TH colSpan={2}>De noche</Table.TH>
              <Table.TH colSpan={2}>De dia</Table.TH>
              <Table.TH colSpan={2}>De noche</Table.TH>
              <Table.TH colSpan={2}>Real</Table.TH>
              <Table.TH rowSpan={2}>Capota</Table.TH>
            </tr>
            <tr>
              <Table.TH>Piloto</Table.TH>
              <Table.TH>Copiloto</Table.TH>
              <Table.TH>Piloto</Table.TH>
              <Table.TH>Copiloto</Table.TH>
              <Table.TH>Piloto</Table.TH>
              <Table.TH>Copiloto</Table.TH>
              <Table.TH>Piloto</Table.TH>
              <Table.TH>Copiloto</Table.TH>
              <Table.TH>Piloto</Table.TH>
              <Table.TH>Copiloto</Table.TH>
            </tr>
          </thead>
          <tbody>
            {flights.map((hora) => (
              <tr key={hora.id}>
                <Table.TD>{hora.dia}</Table.TD>
                <Table.TD>{hora.salida}</Table.TD>
                <Table.TD>{hora.desde}</Table.TD>
                <Table.TD>{hora.hasta}</Table.TD>
                <Table.TD>{hora.llegada}</Table.TD>
                <Table.TD>{hora.finalidad}</Table.TD>
                <Table.TD>{hora.modelo}</Table.TD>
                <Table.TD>{hora.matricula}</Table.TD>
                <Table.TD>{hora.potencia}</Table.TD>
                <Table.TD>{hora.clase}</Table.TD>
                <Table.TD>{hora.local_dia_p}</Table.TD>
                <Table.TD>{hora.local_dia_c}</Table.TD>
                <Table.TD>{hora.local_noche_p}</Table.TD>
                <Table.TD>{hora.local_noche_c}</Table.TD>
                <Table.TD>{hora.travesia_dia_p}</Table.TD>
                <Table.TD>{hora.travesia_dia_c}</Table.TD>
                <Table.TD>{hora.travesia_noche_p}</Table.TD>
                <Table.TD>{hora.travesia_noche_c}</Table.TD>
                <Table.TD>{hora.aterrizajes}</Table.TD>
                <Table.TD>{hora.instructor}</Table.TD>
                <Table.TD>{hora.multi}</Table.TD>
                <Table.TD>{hora.reactor}</Table.TD>
                <Table.TD>{hora.turbo}</Table.TD>
                <Table.TD>{hora.aeroaplicador}</Table.TD>
                <Table.TD>{hora.instrumentos_real_p}</Table.TD>
                <Table.TD>{hora.instrumentos_real_c}</Table.TD>
                <Table.TD>{hora.capota}</Table.TD>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="flex items-center justify-between py-[17px] px-[19px] text-[#9a9d9b] text-[10px] font-[Courier_New,monospace] border-top border-[var(--border)] pagination">
          <span>Mostrando 15 de 24 vuelos</span>
          <div className="flex gap-[5px]">
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
