import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  code: string;
  /** Ex: "ts", "tsx", "js". */
  language?: string;
  /** Libellé d’onglet. */
  filename?: string;
  /** Occupe la hauteur disponible (slides « code seul » avec scroll interne si besoin). */
  fill?: boolean;
};

export function CodeBlock({
  code,
  language = "ts",
  filename = "exemple.ts",
  fill = false,
}: Props) {
  const trimmed = code.trimEnd();

  return (
    <div
      className={`border border-neutral-900/12 bg-(--surface) ${fill ? "flex min-h-0 flex-1 flex-col" : ""}`}
    >
      <div className="flex items-center justify-between border-b border-neutral-900/10 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-900/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-900/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-900/15" />
        </div>
        <div className="font-mono text-[0.7rem] text-neutral-500">
          {filename}
        </div>
        <div className="font-mono text-[0.7rem] uppercase tracking-wide text-neutral-400">
          {language}
        </div>
      </div>

      <div className={fill ? "min-h-0 flex-1 overflow-auto" : "max-h-[min(340px,42vh)] overflow-auto"}>
        <SyntaxHighlighter
          language={language}
          style={oneLight}
          showLineNumbers
          wrapLongLines={false}
          customStyle={{
            margin: 0,
            background: "transparent",
            padding: "16px 18px",
            fontSize: "0.86rem",
            lineHeight: "1.55",
          }}
          lineNumberStyle={{
            minWidth: "2.5em",
            paddingRight: "1.25em",
            color: "rgba(23,23,23,.35)",
            userSelect: "none",
          }}
          codeTagProps={{
            style: { fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" },
          }}
        >
          {trimmed}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
