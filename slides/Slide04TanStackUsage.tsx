"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { Slide } from "@/components/Slide";

const SAMPLE = `const qc = useQueryClient()

const { data } = useQuery({
  queryKey: ['items', filters],
  queryFn: () => api.listItems(filters),
})

// Mutation puis synchro cache :
// - invalidateQueries → demander un refetch aligné serveur
// - ou setQueryData → pousser toi-même la nouvelle valeur dans le cache
const m = useMutation({
  mutationFn: api.createItem,
  onSuccess: async () => {
    await qc.invalidateQueries({ queryKey: ['items'] })
  },
})`;

export default function Slide04TanStackUsage() {
  return (
    <Slide codeFocus topic="TanStack Query" title="Exemple — montage typique">
      <CodeBlock fill code={SAMPLE} language="tsx" filename="hooks/use-items.ts" />
    </Slide>
  );
}
