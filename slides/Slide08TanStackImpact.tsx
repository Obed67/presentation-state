"use client";

import { Slide } from "@/components/Slide";

export default function Slide08TanStackImpact() {
  return (
    <Slide topic="TanStack Query" title="Impact">
      <p className="text-left">Un seul endroit pour le cache async au lieu de quatre versions maison.</p>
      <p className="text-left text-neutral-600">Si l’API bouge tout le temps, le problème remonte dans tes clés.</p>
    </Slide>
  );
}
