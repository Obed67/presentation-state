"use client";

import { slides } from "@/slides";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export default function PresentationPage() {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => Math.min(Math.max(0, i + delta), total - 1));
    },
    [total]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [go]);

  const Current = slides[index];

  const progress = total > 1 ? index / (total - 1) : 1;

  return (
    <div className="relative mx-auto flex h-screen w-full max-w-[100vw] flex-col bg-background">
      <AnimatePresence mode="wait">
        <Current key={index} />
      </AnimatePresence>

      <footer className="pointer-events-none absolute inset-x-0 bottom-0 z-20 border-t border-neutral-900/10 bg-background">
        <div className="h-0.5 w-full bg-neutral-900/[0.08]">
          <motion.div
            className="h-full bg-accent"
            initial={false}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </div>

        <div className="flex items-baseline justify-between gap-8 px-5 py-3.5 sm:px-8 md:px-12">
          <div className="pointer-events-none font-mono text-[0.7rem] tabular-nums tracking-tight text-neutral-500 md:text-[0.75rem]">
            <span className="text-accent">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <span className="mx-1.5 opacity-70">/</span>
            <span>{total.toString().padStart(2, "0")}</span>
          </div>
          <div className="pointer-events-auto hidden items-center gap-2 font-mono text-[0.65rem] text-neutral-500 sm:flex md:text-[0.7rem]">
            <kbd className="rounded border border-neutral-900/20 bg-transparent px-1.5 py-0.5 text-neutral-800">
              ←
            </kbd>
            <kbd className="rounded border border-neutral-900/20 bg-transparent px-1.5 py-0.5 text-neutral-800">
              →
            </kbd>
            <span className="opacity-80">navigation</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
