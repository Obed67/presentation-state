"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { Slide } from "@/components/Slide";

const SAMPLE = `const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
})

// <Provider store={store} />
// dispatch(uiSlice.actions.toggleTheme())`;

export default function Slide10ReduxUsage() {
  return (
    <Slide topic="Redux (+ Toolkit)" title="Montage" contentClassName="max-w-none text-left">
      <p className="mb-4">Store, Provider, selectors, dispatch.</p>
      <CodeBlock code={SAMPLE} />
    </Slide>
  );
}
