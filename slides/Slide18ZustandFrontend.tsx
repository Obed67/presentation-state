"use client";

import { Slide } from "@/components/Slide";

export default function Slide18ZustandFrontend() {
  return (
    <Slide topic="Zustand" title="Front">
      <p className="text-left">Risque : plein de petits <code className="font-mono text-[0.9em]">set</code> sans fil conducteur.</p>
      <p className="text-left text-neutral-600">Next : attention store singleton vs SSR / hydratation.</p>
    </Slide>
  );
}
