"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@/context/UserContext";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <UserProvider>{children}</UserProvider>
    </SessionProvider>
  );
};

export default Providers;
