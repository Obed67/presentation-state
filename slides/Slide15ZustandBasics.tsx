"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { Slide } from "@/components/Slide";

const SAMPLE = `import { create } from "zustand";

type FilterStore = {
  search: string;
  userIdFilter: number | null;

  setSearch: (value: string) => void;
  setUserIdFilter: (userId: number | null) => void;
  resetFilters: () => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  // ----------------
  // STATE
  // ----------------
  search: "",
  userIdFilter: null,

  // ----------------
  // ACTIONS
  // ----------------
  setSearch: (value) => set({ search: value }),

  setUserIdFilter: (userId) => set({ userIdFilter: userId }),

  resetFilters: () =>
    set({
      search: "",
      userIdFilter: null,
    }),
}));

// SearchBar.tsx
// const search = useFilterStore((s) => s.search)
// const setSearch = useFilterStore((s) => s.setSearch)

// UserIdFilter.tsx
// const userId = useFilterStore((s) => s.userIdFilter)
// const setUserId = useFilterStore((s) => s.setUserIdFilter)

// ResetButton.tsx
// const reset = useFilterStore((s) => s.resetFilters)`;

export default function Slide15ZustandBasics() {
  return (
    <Slide
      codeFocus
      topic="Zustand"
      title="Exemple — store partagé (filtres)"
    >
      <CodeBlock fill code={SAMPLE} language="ts" filename="stores/useFilterStore.ts" />
    </Slide>
  );
}
