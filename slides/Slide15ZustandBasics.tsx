"use client";

import { Slide } from "@/components/Slide";

export default function Slide15ZustandBasics() {
  return (
    <Slide topic="Zustand" title="Idée">
      <p className="text-left">
        <code className="font-mono text-[0.95em]">create</code> + hook : petit store, peu de fichiers.
      </p>
      <p className="text-left text-neutral-600">Persist / immer / devtools quand ça grossit.</p>
    </Slide>
  );
}
