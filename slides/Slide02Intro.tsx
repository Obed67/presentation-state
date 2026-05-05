"use client";

import { Slide } from "@/components/Slide";

export default function Slide02Intro() {
  return (
    <Slide title="Trois rôles">
      <ul className="mx-auto max-w-xl space-y-4 text-left text-[1.05rem] md:text-[1.15rem]">
        <li>
          <strong className="text-accent">TanStack</strong> : données réseau, cache, erreurs.
        </li>
        <li>
          <strong className="text-accent">Redux</strong> : état partagé lourd, traçable (Toolkit).
        </li>
        <li>
          <strong className="text-accent">Zustand</strong> : petit état UI sans tout le socle Redux.
        </li>
      </ul>
    </Slide>
  );
}
