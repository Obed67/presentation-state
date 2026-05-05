"use client";

import { Slide } from "@/components/Slide";

export default function Slide13ReduxBackend() {
  return (
    <Slide topic="Redux (+ Toolkit)" title="Back">
      <p className="text-left">Redux ne parle pas à ta base : il affiche une copie à resynchroniser (prix, droits…).</p>
      <p className="text-left text-neutral-600">RTK Query = mêmes attentes qu’une couche TanStack : contrat HTTP propre.</p>
    </Slide>
  );
}
