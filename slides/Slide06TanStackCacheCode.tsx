"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { Slide } from "@/components/Slide";

const SAMPLE = `import { useQueryClient } from "@tanstack/react-query";

function ExampleAfterMutation() {
  const qc = useQueryClient();

  // 1) setQueryData — tu modifies DIRECTEMENT le cache pour cette queryKey.
  //    L’UI se met à jour tout de suite, sans attendre un refetch réseau.
  qc.setQueryData<number>(["counter"], (previous) => (previous ?? 0) + 1);

  qc.setQueryData<Item[]>(["items"], (prev) =>
    prev ? [...prev, newItemFromServer] : [newItemFromServer],
  );

  // 2) invalidateQueries — tu dis au cache : « ces données ne sont plus fiables ».
  //    TanStack Query peut alors refetch (refetchType selon options / comportement par défaut)
  //    pour resynchroniser avec le serveur.
  qc.invalidateQueries({ queryKey: ["items"] });
  qc.invalidateQueries({ queryKey: ["items"], exact: true }); // pas les descendants partiels

  return null;
}`;

export default function Slide06TanStackCacheCode() {
  return (
    <Slide codeFocus topic="TanStack Query" title="Exemple — setQueryData et invalidateQueries">
      <CodeBlock fill code={SAMPLE} language="tsx" filename="hooks/query-cache.tsx" />
    </Slide>
  );
}
