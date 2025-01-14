"use client";

import { useEffect, useState } from "react";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const DynamicContent = () => {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    setDate(new Date().toLocaleString());
  }, []);

  if (!date) {
    return <div>Loading...</div>;
  }

  return <div>{date}</div>;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next.js Layout</title>
      </head>
      <body>
        <header>
          <h1>Welcome to My Next.js App</h1>
        </header>
        <main>
          <DynamicContent />
          {children}
        </main>
        <footer>
          <p>© 2025 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}
