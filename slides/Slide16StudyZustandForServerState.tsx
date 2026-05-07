"use client";

import { Slide } from "@/components/Slide";

export default function Slide16StudyZustandForServerState() {
  return (
    <Slide
      top
      topic="Étude comparative"
      title={
        <>
          Partie 1 : tout l&apos;état <strong className="text-accent">serveur</strong> dans Zustand
        </>
      }
      contentClassName="max-w-none p-6 text-left sm:p-7 md:p-8"
    >
      <p className="mb-4 max-w-[70ch] text-[0.95rem] leading-snug text-neutral-700">
        Scénario : tu refuses TanStack Query (ou équivalent) et tu stocks dans Zustand tout ce qui vient de l&apos;API.&nbsp;Voici ce que ça implique concrètement : tu dois reconstruire toi‑même ce qu&apos;un cache distant automatise déjà.
      </p>

      <div className="overflow-x-auto rounded-lg border border-neutral-900/12 bg-neutral-50/80">
        <table className="w-full min-w-lg border-collapse text-left text-[0.82rem] leading-snug sm:text-[0.88rem]">
          <thead>
            <tr className="border-b border-neutral-900/12 bg-neutral-100/90">
              <th className="w-[30%] px-3 py-2.5 font-semibold text-neutral-900 sm:w-[28%]">
                Zone à risque
              </th>
              <th className="px-3 py-2.5 font-semibold text-neutral-900">Ce qui se passe dans ton store</th>
            </tr>
          </thead>
          <tbody className="bg-white text-neutral-750 [&_td]:align-top">
            <tr className="border-b border-neutral-900/10">
              <td className="px-3 py-2.5 font-medium text-neutral-900">Cache entre écrans</td>
              <td className="px-3 py-2.5 text-neutral-700">
                Tu inventes la politique : quand garder une liste en mémoire, quand la jeter pour éviter la saturation, comment distinguer donnée &quot;encore bonne&quot; et périmée.&nbsp;Pas de notion&nbsp;
                <em>stale / fresh</em>
                {" "}standard comme avec TanStack Query.
              </td>
            </tr>
            <tr className="border-b border-neutral-900/10">
              <td className="px-3 py-2.5 font-medium text-neutral-900">Données à jour sur le serveur</td>
              <td className="px-3 py-2.5 text-neutral-700">
                Une fois les données dans le slice, elles restent jusqu&apos;à ce que tu redispatch quelque chose ou que l&apos;utilisateur recharge.&nbsp;Le retour d&apos;onglet ou une reconnexion réseau ne déclenche rien tout seul : tu dois coder les hooks métier pour rouvrir le même problème que Query résoudrait par défaut.
              </td>
            </tr>
            <tr className="border-b border-neutral-900/10">
              <td className="px-3 py-2.5 font-medium text-neutral-900">
                <code className="font-mono text-[0.86em]">loading</code>
                {" "}/"}
                <code className="font-mono text-[0.86em]">error</code>
              </td>
              <td className="px-3 py-2.5 text-neutral-700">
                À chaque ressource tu rajoutes des champs dans le même objet global.&nbsp;À grande échelle : proliferation des{" "}
                <code className="rounded bg-neutral-900/90 px-1 py-0.5 font-mono text-[0.85em] text-neutral-50">
                  loading_users
                </code>
                ,{" "}
                <code className="rounded bg-neutral-900/90 px-1 py-0.5 font-mono text-[0.85em] text-neutral-50">
                  error_products
                </code>
                , etc., avec duplication de la même structure try/finally dans chaque thunk.
              </td>
            </tr>
            <tr className="border-b border-neutral-900/10">
              <td className="px-3 py-2.5 font-medium text-neutral-900">Appels doublons</td>
              <td className="px-3 py-2.5 text-neutral-700">
                Trois composants qui montent ensemble peuvent lancer trois fois la même URL si tu n&apos;as pas une couche centrale de dédoublonnage.&nbsp;TanStack Query regroupe les souscriptions identiques en une seule requête réseau ; avec du Zustand brut tu dois empiler cette logique à la main.
              </td>
            </tr>
            <tr className="border-b border-neutral-900/10">
              <td className="px-3 py-2.5 font-medium text-neutral-900">Résilience réseau</td>
              <td className="px-3 py-2.5 text-neutral-700">
                Retry exponentiel, limite de tentatives, annulation : tout est à écrire.&nbsp;Avec Query ce sont des politiques configurables, pas des boucles à réinventer pour chaque endpoint.
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2.5 font-medium text-neutral-900">Pagination / infini / optimistic</td>
              <td className="px-3 py-2.5 text-neutral-700">
                Patterns comme{" "}
                <code className="font-mono text-[0.86em]">useInfiniteQuery</code>
                {" "}ou une mise à jour optimiste réversible demandent une orchestration lourde.&nbsp;Tu réécris des milliers de lignes que la librairie livre déjà prêtes pour le cycle serveur.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4 max-w-[70ch] border-l-[3px] border-accent pl-3 text-[0.92rem] text-neutral-800">
        <strong className="text-neutral-950">Synthèse partie 1</strong> : Zustand excelle sur l&apos;
        <strong>intention locale synchrone</strong>
        .&nbsp;Quand tu lui fais porter tout le serveur, tu paies en complexité sur cache, cohérence et flux async : tu refais le métier de TanStack Query à la main.
      </p>
    </Slide>
  );
}
