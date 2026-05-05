"use client";

import { Slide } from "@/components/Slide";

export default function Slide06TanStackFrontend() {
  return (
    <Slide topic="TanStack Query" title="Côté front">
      <p className="text-left">Skeleton, erreurs, retry, double clic : c’est toi qui rends ça lisible.</p>
      <p className="text-left text-neutral-600">
        Moins de{" "}
        <code className="rounded bg-neutral-900/90 px-1.5 py-0.5 font-mono text-[0.85em] text-neutral-100">
          {`useEffect(() => { fetch(/* ... */) })`}
        </code>
        , plus de cache partagé utile.
      </p>
    </Slide>
  );
}
