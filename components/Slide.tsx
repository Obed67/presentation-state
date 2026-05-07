"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

type SlideProps = {
  topic?: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  bare?: boolean;
  /** Place le titre plus haut (utile pour gros blocs code). */
  top?: boolean;
  /** Bloc code seul : zone maximale, sans carte décorative ni texte au-dessus du code. */
  codeFocus?: boolean;
};

export function Slide({
  topic,
  title,
  children,
  className,
  contentClassName,
  bare,
  top,
  codeFocus,
}: SlideProps) {
  const anchorTop = top || codeFocus;

  const titleClass =
    bare
      ? "max-w-[22ch] font-sans text-pretty tracking-[-0.02em] text-neutral-950 text-[clamp(2.15rem,5.5vw,3.85rem)] font-semibold leading-[1.06]"
      : codeFocus
        ? "max-w-none shrink-0 font-sans text-pretty tracking-[-0.02em] text-neutral-950 text-[clamp(1.35rem,3.5vw,2.25rem)] font-semibold leading-snug"
        : "max-w-[22ch] font-sans text-pretty tracking-[-0.02em] text-neutral-950 text-[clamp(1.75rem,4.25vw,2.85rem)] font-semibold leading-[1.1]";

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative flex min-h-0 h-screen w-full flex-col items-stretch overflow-hidden pb-24 pt-14 sm:pb-21 sm:pt-16 ${className ?? ""}`}
    >
      <div aria-hidden className="absolute inset-0 bg-background" />

      {/* repère accent : ligne verticale (couleur utilisateur conservée) */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-23 left-0 top-24 w-[3px] bg-accent sm:left-6 lg:left-10"
      />

      <div
        className={`relative z-10 mx-auto flex min-h-0 w-full max-w-184 flex-1 flex-col px-8 sm:max-w-200 sm:pl-[min(12vw,4.75rem)] sm:pr-10 lg:pr-14 ${
          anchorTop ? "justify-start pt-2" : "justify-center"
        }`}
      >
        {topic !== undefined && topic !== null && topic !== false ? (
          <p
            className={`font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-neutral-500 ${
              codeFocus ? "mb-2" : "mb-6"
            }`}
          >
            {topic}
          </p>
        ) : null}

        <h1 className={titleClass}>{title}</h1>

        {bare && children ? (
          <div className={`mt-9 max-w-md space-y-0 font-sans text-[1rem] leading-[1.6] text-neutral-600 md:text-[1.1rem]`}>
            {children}
          </div>
        ) : null}

        {!bare && children ? (
          <div
            className={
              codeFocus
                ? `mt-3 flex min-h-0 w-full flex-1 flex-col font-sans text-neutral-700 ${contentClassName ?? ""}`
                : `mt-7 w-full border border-neutral-900/10 bg-(--surface) p-8 font-sans text-[1.02rem] leading-[1.55] text-neutral-700 md:p-10 md:text-[1.08rem] md:leading-normal ${contentClassName ?? ""}`
            }
          >
            {children}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
