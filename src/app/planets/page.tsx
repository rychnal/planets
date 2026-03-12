'use client';
import PlanetsList from "@/components/PlanetsList";
import { usePlanetsStore } from "@/store/planets-store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";


export default function PlanetsPage() {
  const PAGE_SIZE = 5;
  const searchParams = useSearchParams();
  const currentPage = searchParams.get('page') ? parseInt(searchParams.get('page')!, 10) : 1;
  const router = useRouter();
  const { planets, loading, error, fetchPlanets } = usePlanetsStore();

  const totalPages = Math.ceil(planets.length / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const paginatedPlanets = planets.slice(start, start + PAGE_SIZE);

  useEffect(() => {
    fetchPlanets();
  }, []);


  const handleReload = () => { 
    router.push("/planets");
    fetchPlanets();
  }
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-8">
      <div className="bg-gray-500/80 p-4 min-[900px]:p-8 rounded-lg w-full min-[900px]:w-[900px] min-[900px]:min-h-[700px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-6xl font-bold">Planety</h1>
          <button onClick={() => handleReload()} className="text-sm px-3 py-1 bg-gray-700/60 hover:bg-gray-600/60 rounded-lg cursor-pointer">Reload</button>
        </div>
        {(loading || planets.length === 0) && !error && (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
        {error && <p className="text-center py-4 text-red-400">Chyba: {error}</p>}
        {!loading && !error && planets.length > 0 && <PlanetsList planets={paginatedPlanets} currentPage={currentPage} totalPages={totalPages} />}
      </div>
     
    </div>

  );
}
