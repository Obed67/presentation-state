"use client";

import { Slide } from "@/components/Slide";

export default function Slide12ReduxFrontend() {
  return (
    <Slide topic="Redux (+ Toolkit)" title="Front">
      <p className="text-left">Tu sais qui dispatch quoi et où vit l’état partagé.</p>
      <p className="text-left text-neutral-600">Sans conventions, plusieurs features se marchent sur les mêmes slices.</p>
    </Slide>
  );
}
