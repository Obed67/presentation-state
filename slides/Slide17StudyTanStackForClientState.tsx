"use client";

import { Slide } from "@/components/Slide";

export default function Slide17StudyTanStackForClientState() {
  return (
    <Slide
      top
      topic="Étude comparative"
      title={
        <>
          Partie 2 : tout l&apos;état <strong className="text-accent">client UI</strong> dans TanStack Query
        </>
      }
      contentClassName="max-w-none p-6 text-left sm:p-7 md:p-8"
    >
      <p className="mb-4 max-w-[70ch] text-[0.95rem] leading-snug text-neutral-700">
        Scénario inverse : tu refuses Zustand (ou équivalent léger) et tu traites chaque bout d&apos;interface comme une &quot;requête&quot; dans le cache Query.&nbsp;Le moteur est async et pensé pour des données distantes ; voici où ça coince pour du pur client.
      </p>

      <div className="overflow-x-auto rounded-lg border border-neutral-900/12 bg-neutral-50/80">
        <table className="w-full min-w-lg border-collapse text-left text-[0.82rem] leading-snug sm:text-[0.88rem]">
          <thead>
            <tr className="border-b border-neutral-900/12 bg-neutral-100/90">
              <th className="w-[30%] px-3 py-2.5 font-semibold text-neutral-900 sm:w-[28%]">
                Zone à risque
              </th>
              <th className="px-3 py-2.5 font-semibold text-neutral-900">Ce qui se passe avec Query comme store UI</th>
            </tr>
          </thead>
          <tbody className="bg-white text-neutral-750 [&_td]:align-top">
            <tr className="border-b border-neutral-900/10">
              <td className="px-3 py-2.5 font-medium text-neutral-900">Nature synchrone</td>
              <td className="px-3 py-2.5 text-neutral-700">
                TanStack Query attend une Promise.&nbsp;Pour un booléen menu ouvert ou un curseur de slider, tu te retrouves soit avec une{" "}
                <code className="font-mono text-[0.86em]">queryFn</code>
                {" "}factice qui résout tout de suite (bruit inutile), soit avec des contorsions pour échapper au modèle async alors que l&apos;UI demandait un simple{" "}
                <code className="rounded bg-neutral-900/90 px-1 py-0.5 font-mono text-[0.85em] text-neutral-50">set</code>
                {" "}instantané.
              </td>
            </tr>
            <tr className="border-b border-neutral-900/10">
              <td className="px-3 py-2.5 font-medium text-neutral-900">Changement d&apos;état UI</td>
              <td className="px-3 py-2.5 text-neutral-700">
                Le flux naturel est mutation puis invalidation ou refetch.&nbsp;Pour ouvrir un panneau ou incrémenter un compteur local, ce pipeline est lent et verbeux : tu ajoutes du réseau fictif ou du cache là où Zustand ferait une mise à jour directe sans cycle serveur.
              </td>
            </tr>
            <tr className="border-b border-neutral-900/10">
              <td className="px-3 py-2.5 font-medium text-neutral-900">Durée de vie du cache</td>
              <td className="px-3 py-2.5 text-neutral-700">
                Si plus aucun composant ne souscrit à une entrée, le cache peut être récupéré par le garbage collector après la fenêtre configurée.&nbsp;Des filtres ou préférences purement UI peuvent disparaître alors que l&apos;utilisateur est encore dans l&apos;app et croit son état persistant comme dans un store dédié.
              </td>
            </tr>
            <tr className="border-b border-neutral-900/10">
              <td className="px-3 py-2.5 font-medium text-neutral-900">Spinners et erreurs</td>
              <td className="px-3 py-2.5 text-neutral-700">
                Tu importes les états{" "}
                <code className="font-mono text-[0.86em]">isLoading</code>
                ,{" "}
                <code className="font-mono text-[0.86em]">isError</code>
                {" "}qui ont du sens pour une API, mais qui polluent l&apos;UX pour une valeur qui ne quitte jamais le navigateur.
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2.5 font-medium text-neutral-900">Charge cognitive</td>
              <td className="px-3 py-2.5 text-neutral-700">
                Tu décrives des clés, des fetchers et des invalidations pour ce qui resterait une petite structure locale.&nbsp;Tu complexifies la lecture du code pour éviter un deuxième outil, alors que la combinaison Query + petit store client reste souvent la voie la plus claire.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4 max-w-[70ch] border-l-[3px] border-accent pl-3 text-[0.92rem] text-neutral-800">
        <strong className="text-neutral-950">Synthèse partie 2</strong> : TanStack Query excelle sur le{" "}
        <strong>cycle async serveur</strong>
        &nbsp;(cache, staleness, refetch, erreurs).&nbsp;Quand tu lui fais porter tout le client, tu utilises une petite cuillère pour un problème qui demandait un toggle synchrone : faisable, mais douloureux et fragile.
      </p>
    </Slide>
  );
}
