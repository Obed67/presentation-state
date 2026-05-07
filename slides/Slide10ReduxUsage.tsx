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
    <Slide codeFocus topic="Redux (+ Toolkit)" title="Exemple : configureStore et slices">
      <CodeBlock fill code={SAMPLE} />
    </Slide>
  );
}
