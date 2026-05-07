"use client";

import { Slide } from "@/components/Slide";

export default function Slide16StudyZustandForServerState() {
  return (
    <Slide
      top
      topic="Étude comparative"
      title={
        <>
          Partie 1 : état <strong className="text-accent">serveur</strong> dans
          Zustand
        </>
      }
      contentClassName="max-w-none text-left"
    >
      <p className="mb-3 text-[0.92rem] text-neutral-600">
        Sans TanStack Query : tu refais cache distant + cycle async à la main.
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
              <td className="font-medium text-neutral-900">Cache</td>
              <td>
                Pas de <em>stale/fresh</em> standard : garder, invalider,
                limiter la mémoire, tout est maison.
              </td>
            </tr>
            <tr className="border-b border-neutral-900/10">
              <td className="font-medium text-neutral-900">À jour</td>
              <td>
                Données figées jusqu&apos;à ton code ou F5 ; pas de refetch auto
                (onglet, réseau).
              </td>
            </tr>
            <tr className="border-b border-neutral-900/10">
              <td className="font-medium text-neutral-900">loading / error</td>
              <td>
                Flags multipliés par ressource ; même try/catch répété dans
                chaque thunk.
              </td>
            </tr>
            <tr className="border-b border-neutral-900/10">
              <td className="font-medium text-neutral-900">Réseau</td>
              <td>
                Dédoublonnage, retry, annulation : à coder. Query le fait par
                défaut.
              </td>
            </tr>
            <tr>
              <td className="font-medium text-neutral-900">
                Pagination / optimistic
              </td>
              <td>
                Lourd à maintenir ; Query livre patterns et hooks déjà pensés
                pour ça.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Slide>
  );
}
