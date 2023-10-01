"use client";

import { useSession } from "next-auth/react";

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  if (status === "unauthenticated" || status === "loading") return null;
  return <>{children}</>;
};

export default ClientOnly;
