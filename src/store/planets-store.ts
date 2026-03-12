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
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/planets`);
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      const data = await res.json();
      set({ planets: data, loading: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      set({ error: message, loading: false });
    }

  }
}));