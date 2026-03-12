'use client';
import PlanetsList from "@/components/PlanetsList";
import { usePlanetsStore } from "@/store/planets-store";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";


export default function PlanetsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const PAGE_SIZE = 10;
  const { page } = use(searchParams);
  const currentPage = page ? parseInt(page, 10) : 1;
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
    <div>
      <div>
        <h1>Planety</h1>
        <PlanetsList planets={paginatedPlanets} currentPage={currentPage} totalPages={totalPages} />
      </div>
      <div>
        <button onClick={() =>handleReload() }>Reload </button>
      </div>
    </div>
  );
}
