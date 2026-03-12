"use client";
import { Planet } from "@/types/planets";
import Paginator from "./Paginator";



export default function PlanetsList({ planets, currentPage, totalPages }: { planets: Planet[]; currentPage: number; totalPages: number }) {
  return (
    <div>
      <ul>
        {planets.map((planet) => (
          <li key={planet.url} className="flex flex-col min-[900px]:flex-row min-[900px]:items-center gap-2 min-[900px]:gap-4 mb-3">
            <span className="text-2xl font-bold min-[900px]:w-40">{planet.name}</span>
            <div className="bg-gray-700/60 rounded-lg px-4 py-2 text-sm grid grid-cols-1 min-[900px]:grid-cols-2 gap-x-12 gap-y-1 w-full min-[900px]:w-[600px]">
              <span className="w-64"><span className="text-gray-400">Gravitace:</span> {planet.gravity}</span>
              <span className="w-64"><span className="text-gray-400">Terén:</span> {planet.terrain}</span>
              <span className="w-64"><span className="text-gray-400">Klima:</span> {planet.climate}</span>
              <span className="w-64"><span className="text-gray-400">Populace:</span> {planet.population}</span>
            </div>
          </li>
        ))}
      </ul>

      <Paginator currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
