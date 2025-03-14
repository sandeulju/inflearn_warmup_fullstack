import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Tutorial",
  description: "Next.js 튜토리얼 배우기",
};

export default function Home() {
  return (
    <main>
      HHHHHHOME
      <Link href="/dashboard">Go to Dashboard</Link>
    </main>
  );
}
