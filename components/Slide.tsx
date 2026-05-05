"use client";

import { motion } from "framer-motion";
import { Literata } from "next/font/google";
import type { ReactNode } from "react";

const literata = Literata({
  subsets: ["latin"],
  weight: ["600", "700"],
});

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
};

export function Slide({
  topic,
  title,
  children,
  className,
  contentClassName,
  bare,
}: SlideProps) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative flex h-screen w-full flex-col items-stretch overflow-hidden pb-24 pt-14 sm:pb-[5.25rem] sm:pt-16 ${className ?? ""}`}
    >
      <div aria-hidden className="absolute inset-0 bg-background" />

      {/* repère accent : ligne verticale (couleur utilisateur conservée) */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[5.75rem] left-0 top-24 w-[3px] bg-accent sm:left-6 lg:left-10"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[46rem] flex-1 flex-col justify-center px-8 sm:max-w-[50rem] sm:pl-[min(12vw,4.75rem)] sm:pr-10 lg:pr-14">
        {topic !== undefined && topic !== null && topic !== false ? (
          <p className="mb-6 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-neutral-500">
            {topic}
          </p>
        ) : null}

        <h1
          className={`${literata.className} max-w-[22ch] text-pretty tracking-[-0.02em] text-neutral-950 ${
            bare
              ? "text-[clamp(2.15rem,5.5vw,3.85rem)] font-semibold leading-[1.06]"
              : "text-[clamp(1.75rem,4.25vw,2.85rem)] font-semibold leading-[1.1]"
          }`}
        >
          {title}
        </h1>

        {bare && children ? (
          <div className={`mt-9 max-w-md space-y-0 font-sans text-[1rem] leading-[1.6] text-neutral-600 md:text-[1.1rem]`}>
            {children}
          </div>
        ) : null}

        {!bare && children ? (
          <div
            className={`mt-9 w-full border border-neutral-900/10 bg-[var(--surface)] p-8 font-sans text-[1.02rem] leading-[1.55] text-neutral-700 md:p-10 md:text-[1.08rem] md:leading-[1.5] ${contentClassName ?? ""}`}
          >
            {children}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
