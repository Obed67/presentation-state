"use client";

import { Slide } from "@/components/Slide";

export default function Slide17StudyTanStackForClientState() {
  return (
    <Slide
      top
      topic="Étude comparative"
      title={
        <>
          Partie 2 : état <strong className="text-accent">client UI</strong>{" "}
          dans TanStack Query
        </>
      }
      contentClassName="max-w-none text-left"
    >
      <p className="mb-3 text-[0.92rem] text-neutral-600">
        Sans petit store client : tu pilotes l&apos;UI avec un moteur fait pour
        l&apos;async distant.
      </p>

      <div className="overflow-x-auto rounded-lg border border-neutral-900/12">
        <table className="w-full min-w-lg border-collapse text-left text-[0.84rem] leading-snug">
          <thead>
            <tr className="border-b border-neutral-900/12 bg-neutral-100/80">
              <th className="w-[32%] px-3 py-2 font-semibold text-neutral-900">
                Sujet
              </th>
              <th className="px-3 py-2 font-semibold text-neutral-900">
                Conséquence
              </th>
            </tr>
          </thead>
          <tbody className="text-neutral-700 [&_td]:align-top [&_td]:py-2 [&_td]:px-3">
            <tr className="border-b border-neutral-900/10">
              <td className="font-medium text-neutral-900">Synchrone</td>
              <td>
                Query veut une Promise ; pour un toggle ou un slider tu bricoles
                une <code className="font-mono text-[0.9em]">queryFn</code> vide
                ou tu te bats contre le modèle.
              </td>
            </tr>
            <tr className="border-b border-neutral-900/10">
              <td className="font-medium text-neutral-900">Changement UI</td>
              <td>
                Mutation → invalidate/refetch : trop lourd là où un{" "}
                <code className="font-mono text-[0.9em]">set</code> suffit.
              </td>
            </tr>
            <tr className="border-b border-neutral-900/10">
              <td className="font-medium text-neutral-900">Mémoire cache</td>
              <td>
                Sans abonnés, entrées évincées : filtres UI peuvent sauter alors
                que l&apos;utilisateur est encore dans l&apos;app.
              </td>
            </tr>
            <tr>
              <td className="font-medium text-neutral-900">Spinners</td>
              <td>
                <code className="font-mono text-[0.9em]">isLoading</code> /{" "}
                <code className="font-mono text-[0.9em]">isError</code> pour du
                local : bruit inutile.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Slide>
  );
}
