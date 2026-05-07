"use client";

import { Slide } from "@/components/Slide";

export default function Slide03TanStackBasics() {
  return (
    <Slide topic="TanStack Query" title="En deux mots">
      <p className="text-left">
        <code className="rounded bg-neutral-900/95 px-1.5 py-0.5 font-mono text-[0.88em] text-neutral-50">QueryClient</code> +{" "}
        <code className="rounded bg-neutral-900/95 px-1.5 py-0.5 font-mono text-[0.88em] text-accent">queryKey</code> + fonction fetch.
      </p>
      <p className="text-left text-neutral-700">
        Loading / error / success, cache partagé, dedup.&nbsp;Clés stables sinon le cache te mord.
      </p>
      <p className="text-left text-neutral-700">
        Montage habituel&nbsp;:{" "}
        <code className="rounded bg-neutral-900/95 px-1.5 py-0.5 font-mono text-[0.88em] text-neutral-50">Provider</code>
        ,{" "}
        <code className="rounded bg-neutral-900/95 px-1.5 py-0.5 font-mono text-[0.88em] text-neutral-50">useQuery</code>
        {" / "}
        <code className="rounded bg-neutral-900/95 px-1.5 py-0.5 font-mono text-[0.88em] text-neutral-50">useMutation</code>
        . Après une mutation&nbsp;:{" "}
        <strong className="text-accent">invalidateQueries</strong> ou{" "}
        <strong className="text-accent">setQueryData</strong>
        , détaillés sur les slides suivantes.
      </p>
    </Slide>
  );
}
