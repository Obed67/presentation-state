"use client";

import { Slide } from "@/components/Slide";

export default function Slide21Synth() {
  return (
    <Slide title="Rappel" contentClassName="max-w-xl space-y-5 text-left">
      <p>
        <strong className="text-accent">TanStack</strong> : réseau + cache.
      </p>
      <p>
        <strong className="text-accent">Redux</strong> : état partagé lourd, traçable.
      </p>
      <p>
        <strong className="text-accent">Zustand</strong> : colle UI légère, avec conventions.
      </p>
      <p className="text-center text-neutral-600">Choisir selon où vit la vérité métier, pas la mode.</p>
    </Slide>
  );
}
