"use client";

import { Slide } from "@/components/Slide";

export default function Slide17ZustandBP() {
  return (
    <Slide topic="Zustand" title="Bon réflexes">
      <ul className="space-y-3 text-left">
        <li className="flex gap-3">
          <span className="text-accent">•</span>
          <span>Plusieurs petits stores plutôt qu’un monstre.</span>
        </li>
        <li className="flex gap-3">
          <span className="text-accent">•</span>
          <span>Gros async → TanStack, pas tout dans Zustand.</span>
        </li>
        <li className="flex gap-3">
          <span className="text-accent">•</span>
          <span>Règle d’équipe : quand passer à Redux.</span>
        </li>
      </ul>
    </Slide>
  );
}
