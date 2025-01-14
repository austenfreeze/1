// app/components/DraftModeProvider.tsx
import { draftMode } from "next/headers";
import { ReactNode } from "react";

type DraftModeProviderProps = {
  children: ReactNode;
};

export async function DraftModeProvider({ children }: DraftModeProviderProps) {
  const { isEnabled } = await draftMode();
  return <>{children}</>;
}
