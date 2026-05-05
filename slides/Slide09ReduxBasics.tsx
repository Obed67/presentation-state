"use client";

import { Slide } from "@/components/Slide";

export default function Slide09ReduxBasics() {
  return (
    <Slide topic="Redux (+ Toolkit)" title="Idée centrale">
      <p className="text-left">Actions → reducers purs → un seul store prévisible.</p>
      <p className="text-left text-neutral-600">HTTP souvent via RTK Query ou TanStack à côté, selon l’équipe.</p>
    </Slide>
  );
}
