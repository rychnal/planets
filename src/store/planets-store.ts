'use client';

import type { Planet } from '@/types/planets';
import { create } from 'zustand';

type PlanetsState = {
  planets: Planet[];
  loading: boolean;
  error: string | null;
  fetchPlanets: () => Promise<void>;
};


export const usePlanetsStore = create<PlanetsState>((set) => ({
  planets: [],
  loading: false,
  error: null,
  fetchPlanets: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("https://swapi.info/api/planets");
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      const data = await res.json();
      set({ planets: data, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  }
}));