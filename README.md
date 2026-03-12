# Planets App

A Next.js application for exploring planets from the Star Wars universe.

## Tech Stack

- **Next.js 16** – App Router
- **TypeScript**
- **Tailwind CSS**
- **Zustand** – global state management
- **SWAPI** – [swapi.info/api/planets](https://swapi.info/api/planets)

## Features

- Planet list with pagination
- Stats for each planet (gravity, terrain, climate, population)
- Loading spinner
- Error state handling
- Reload button
- Responsive design (mobile / desktop)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── planets/          # Planets list page
│   ├── layout.tsx
│   └── page.tsx          # Home page
├── components/
│   ├── PlanetsList.tsx
│   └── Paginator.tsx
├── store/
│   └── planets-store.ts  # Zustand store
└── types/
    └── planets.ts
```
