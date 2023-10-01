"use client";

import { useSession } from "next-auth/react";

const PublicOnly = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  if (status === "authenticated") return null;
  return <>{children}</>;
};

export default PublicOnly;
