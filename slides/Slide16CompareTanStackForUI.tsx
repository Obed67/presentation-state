"use client";

import { Slide } from "@/components/Slide";

export default function Slide16CompareTanStackForUI() {
  return (
    <Slide
      topic="Zustand et TanStack Query"
      title="TanStack Query peut remplacer Zustand ?"
      contentClassName="max-w-none text-left"
    >
      <p className="mb-5 text-left text-neutral-800">
        Réponse courte : oui techniquement, mais tu vas te battre avec l&apos;outil.&nbsp;Forcer Query à jouer le rôle de Zustand, c&apos;est comme vider une piscine à la petite cuillère : possible, mais pas fait pour ça.
      </p>

      <ol className="mb-5 list-decimal space-y-4 pl-5 text-left text-neutral-700 marker:text-accent marker:font-semibold">
        <li>
          <strong className="text-neutral-900">Donnée synchrone ou distante</strong>
          <br />
          TanStack Query est pensé pour l&apos;asynchrone : une fonction qui renvoie une Promise.&nbsp;Pour un booléen &quot;menu ouvert&quot;, tu te retrouves avec une fausse couche fetch.&nbsp;Zustand est synchrone :{" "}
          <code className="rounded bg-neutral-900/90 px-1 py-0.5 font-mono text-[0.8em] text-neutral-50">set</code>
          {" "}et l&apos;UI suit tout de suite (slider, champ local).
        </li>
        <li>
          <strong className="text-neutral-900">Comment ça met à jour</strong>
          <br />
          Query : souvent mutation puis invalidation ou refetch vers le serveur : trop lourd pour un état d&apos;interface.&nbsp;Zustand : mutation directe dans le store, sans spinner ni réseau.
        </li>
        <li>
          <strong className="text-neutral-900">Durée de vie</strong>
          <br />
          Le cache Query peut être évincé quand plus personne ne s&apos;abonne (garbage collection du cache).&nbsp;Les filtres ou préférences UI peuvent disparaître alors que l&apos;utilisateur croit encore les avoir.&nbsp;Avec Zustand, tant que l&apos;onglet vit, l&apos;état reste ; avec{" "}
          <code className="rounded bg-neutral-900/90 px-1 py-0.5 font-mono text-[0.8em] text-neutral-50">persist</code>
          , tu peux aller jusqu&apos;au localStorage.
        </li>
      </ol>

      <p className="mb-3 rounded-md border border-neutral-900/12 bg-neutral-50 px-4 py-3 text-left text-neutral-900">
        <strong className="text-accent">Règle d&apos;or</strong> : Zustand pilote l&apos;intention locale ; TanStack Query exécute les allers-retours serveur.
      </p>

      <div className="space-y-3 text-left text-neutral-700">
        <p>
          <strong>Étape 1</strong> : filtres, page courante, id sélectionné… vivent dans Zustand.
        </p>
        <p>
          <strong>Étape 2</strong> : ces valeurs entrent dans la{" "}
          <code className="rounded bg-neutral-900/90 px-1 py-0.5 font-mono text-[0.78em] text-neutral-50">queryKey</code>
          .&nbsp;Quand Zustand bouge, la clé change et Query refetch proprement.
        </p>
      </div>

      <p className="mt-5 text-left text-sm text-neutral-600">
        Chacun seul ? Zustand seul si quasi pas d&apos;API.&nbsp;Query seul si peu d&apos;état UI global.&nbsp;Les deux : robuste et lisible.
      </p>
    </Slide>
  );
}
