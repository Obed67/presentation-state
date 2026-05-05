"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { Slide } from "@/components/Slide";

const SAMPLE = `const { data, error, isPending } = useQuery({
  queryKey: ['items', filters],
  queryFn: () => api.listItems(filters),
})

const m = useMutation({
  mutationFn: api.createItem,
  onSuccess: () => qc.invalidateQueries({ queryKey: ['items'] }),
})`;

export default function Slide04TanStackUsage() {
  return (
    <Slide topic="TanStack Query" title="Montage typique" contentClassName="max-w-none text-left">
      <p className="mb-4">Provider en haut, puis hooks dans les vues.</p>
      <CodeBlock code={SAMPLE} />
    </Slide>
  );
}
