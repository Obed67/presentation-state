"use client";

import { Slide } from "@/components/Slide";

export default function Slide05TanStackBP() {
  return (
    <Slide topic="TanStack Query" title="Bon réflexes">
      <ul className="flex flex-col gap-4 text-left font-sans">
        <li className="flex gap-3">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
          <span>Clés centralisées (factory), pas de magie dispersée.</span>
        </li>
        <li className="flex gap-3">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
          <span>Erreurs HTTP utiles en UI (401, 422…).</span>
        </li>
        <li className="flex gap-3">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
          <span>Mutation → invalide ou patch ciblé, pas refetch aveugle.</span>
        </li>
      </ul>
    </Slide>
  );
}
