"use client";

import { Slide } from "@/components/Slide";

export default function Slide01Title() {
  return (
    <Slide
      bare
      title={
        <>
          TanStack&nbsp;Query{" "}
          <span className="text-accent">·</span> Redux{" "}
          <span className="text-accent">·</span> Zustand
        </>
      }
    >
      <p>Bases, usage, bonnes pratiques. Front, back, impact concret.</p>
    </Slide>
  );
}
