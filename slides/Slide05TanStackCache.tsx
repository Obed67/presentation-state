"use client";

import { Slide } from "@/components/Slide";

export default function Slide05TanStackCache() {
  return (
    <Slide topic="TanStack Query" title="Cache après une mutation">
      <ul className="list-none space-y-4 text-left text-neutral-800">
        <li>
          <strong className="text-accent">setQueryData</strong>
          {" "}écrit ou fusionne la valeur cache sous une{" "}
          <code className="font-mono text-[0.9em]">queryKey</code>
          {" "}sans déclencher à coup sûr une nouvelle requête&nbsp;: mise à jour immédiate, optimistic ou données déjà connues (réponse mutation).
        </li>
        <li>
          <strong className="text-accent">invalidateQueries</strong>
          {" "}marque les entrées touchées comme{" "}
          <em>stale</em>
          {" "}pour pouvoir{" "}
          <strong>refetch</strong>
          {" "}et retrouver la vérité serveur à jour selon tes réglages.
        </li>
      </ul>
      <p className="mt-6 text-left text-neutral-600">
        Exemple dans le code&nbsp;: slide suivante.
      </p>
    </Slide>
  );
}
