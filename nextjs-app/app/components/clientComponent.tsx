// app/components/ClientComponent.tsx (Client Component)
"use client";  // Make sure it's a client component

import { useEffect, useState } from "react";

export default function ClientComponent() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function fetchToken() {
      const res = await fetch("/api/token");
      const data = await res.json();
      setToken(data.token);
    }

    fetchToken();
  }, []);

  return <div>{token ? `Token: ${token}` : "Loading..."}</div>;
}
