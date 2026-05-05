type Props = { code: string };

export function CodeBlock({ code }: Props) {
  return (
    <pre
      className="overflow-x-auto border border-neutral-900/14 border-l-[3px] border-l-accent bg-[var(--surface)] px-5 py-4 font-mono text-[0.8rem] leading-[1.55] tracking-normal text-neutral-800 md:text-[0.875rem]"
      tabIndex={0}
    >
      <code>{code.trimEnd()}</code>
    </pre>
  );
}
