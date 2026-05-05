"use client";

import { Slide } from "@/components/Slide";

export default function Slide14ReduxImpact() {
  return (
    <Slide topic="Redux (+ Toolkit)" title="Impact">
      <p className="text-left">Coût d’entrée plus haut, bugs d’état plus lisibles sur grosse app.</p>
      <p className="text-left text-neutral-600">Si Redux ne sert qu’à stocker des fetchs, tu n’as pas résolu la couche réseau.</p>
    </Slide>
  );
}
