"use client";

import { Slide } from "@/components/Slide";

export default function Slide11ReduxBP() {
  return (
    <Slide topic="Redux (+ Toolkit)" title="À éviter">
      <ul className="space-y-3 text-left">
        <li className="flex gap-3">
          <span className="text-accent">•</span>
          <span>State local déguisé en &quot;global&quot;.</span>
        </li>
        <li className="flex gap-3">
          <span className="text-accent">•</span>
          <span>Gros selectors non mémoïsés.</span>
        </li>
        <li className="flex gap-3">
          <span className="text-accent">•</span>
          <span>Copier tout le JSON API dans Redux &quot;par défaut&quot;.</span>
        </li>
      </ul>
    </Slide>
  );
}
