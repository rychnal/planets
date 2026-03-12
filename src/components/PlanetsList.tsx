"use client";
import { Planet } from "@/types/planets";
import Paginator from "./Paginator";



export default function PlanetsList({ planets, currentPage, totalPages }: { planets: Planet[]; currentPage: number; totalPages: number }) {
  return (
    <div>
      <ul>
        {planets.map((planet) => (
          <li key={planet.url}>{planet.name}</li>
        ))}
      </ul>

      <Paginator currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
