"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { Slide } from "@/components/Slide";

const SAMPLE = `import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
}))

// useStore((s) => s.count)`;

export default function Slide16ZustandUsage() {
  return (
    <Slide topic="Zustand" title="Snippet" contentClassName="max-w-none text-left">
      <CodeBlock code={SAMPLE} />
      <p className="mt-4 text-neutral-600">Sélecteurs fins = moins de rerenders.</p>
    </Slide>
  );
}
