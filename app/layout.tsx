import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TanStack Query, Redux & Zustand",
  description:
    "Points clés TanStack Query, Redux et Zustand (usage, pratiques, impact produit)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="h-full overflow-hidden bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
