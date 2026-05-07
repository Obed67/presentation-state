"use client";

import { Slide } from "@/components/Slide";

export default function Slide17CompareZustandForAPI() {
  return (
    <Slide
      topic="Zustand et TanStack Query"
      title="Zustand peut remplacer TanStack Query ?"
      contentClassName="max-w-none text-left"
    >
      <p className="mb-5 text-left text-neutral-800">
        Piège classique : oui techniquement, mais tu réinventes des milliers de lignes que Query apporte déjà (cache, lifecycle, erreurs, dédup).
      </p>

      <ul className="mb-6 list-none space-y-4 text-left text-neutral-700">
        <li>
          <strong className="text-neutral-900">Cache</strong> : Query sait si la donnée est fraîche ou périmée, réutilise la lecture entre écrans.&nbsp;Avec Zustand seul, tu codes quand garder, quand invalider, comment ne pas saturer la mémoire.
        </li>
        <li>
          <strong className="text-neutral-900">Refetch automatique</strong> : reconnexion, retour d&apos;onglet, fenêtre au premier plan… Query peut rafraîchir en arrière-plan.&nbsp;Dans un store nu, la donnée reste figée jusqu&apos;à un F5 ou un dispatch manuel.
        </li>
        <li>
          <strong className="text-neutral-900">Chargement et erreurs</strong> :{" "}
          <code className="rounded bg-neutral-900/90 px-1 py-0.5 font-mono text-[0.78em] text-neutral-50">isLoading</code>
          ,{" "}
          <code className="rounded bg-neutral-900/90 px-1 py-0.5 font-mono text-[0.78em] text-neutral-50">isError</code>
          ,{" "}
          <code className="rounded bg-neutral-900/90 px-1 py-0.5 font-mono text-[0.78em] text-neutral-50">isFetching</code>
          &nbsp;sont standard.&nbsp;À la main : multiplication des flags{" "}
          <code className="font-mono text-[0.85em]">loading_*</code> /{" "}
          <code className="font-mono text-[0.85em]">error_*</code> pour chaque endpoint.
        </li>
        <li>
          <strong className="text-neutral-900">Dédoublonnage</strong> : plusieurs composants qui demandent la même ressource : un seul réseau avec Query.&nbsp;Avec Zustand brut : trois mounts peuvent lancer trois fois la même requête sans garde-fous.
        </li>
      </ul>

      <div className="mb-5 overflow-x-auto rounded-md border border-neutral-900/10 text-[0.88rem]">
        <table className="w-full min-w-lg border-collapse text-left">
          <thead>
            <tr className="border-b border-neutral-900/10 bg-neutral-50">
              <th className="px-3 py-2 font-semibold text-neutral-900">Besoin</th>
              <th className="px-3 py-2 font-semibold text-neutral-900">Zustand (&quot;à la main&quot;)</th>
              <th className="px-3 py-2 font-semibold text-accent">TanStack Query</th>
            </tr>
          </thead>
          <tbody className="text-neutral-700">
            <tr className="border-b border-neutral-900/10">
              <td className="px-3 py-2">Retry réseau</td>
              <td className="px-3 py-2">à coder</td>
              <td className="px-3 py-2">intégré (politique configurable)</td>
            </tr>
            <tr className="border-b border-neutral-900/10">
              <td className="px-3 py-2">Invalider / resync</td>
              <td className="px-3 py-2">manuel</td>
              <td className="px-3 py-2">
                <code className="font-mono text-[0.82em]">invalidateQueries</code>
                , refetch
              </td>
            </tr>
            <tr className="border-b border-neutral-900/10">
              <td className="px-3 py-2">Pagination / infini</td>
              <td className="px-3 py-2">lourd</td>
              <td className="px-3 py-2">
                <code className="font-mono text-[0.82em]">useInfiniteQuery</code>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2">Optimistic update</td>
              <td className="px-3 py-2">fragile</td>
              <td className="px-3 py-2">patterns prévus</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-left text-neutral-800">
        <strong className="text-accent">Pour ton étude</strong> : Zustand pour tout ce qui ne vient pas directement d&apos;une API distante (panier en cours, sidebar, thème, filtres comme intention).&nbsp;TanStack Query pour lecture / écriture distante (SELECT, INSERT, UPDATE, DELETE) et tout ce qui profite du cache serveur.
      </p>
    </Slide>
  );
}
