"use client";

import dynamic from "next/dynamic";

const RootPage = dynamic(() => import("@/components/RootPage"), {
  ssr: false,
});

export default function Home() {
  return <RootPage />;
}
