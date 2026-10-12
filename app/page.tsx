import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl leading-12 font-bold text-center">
          Riyan Amanda Nasution
        </h1>
        <div className="flex items-center gap-3">
          <Badge variant="default">New Design</Badge>
          <Badge variant="secondary">Portfolio</Badge>
        </div>
      </main>
    </div>
  );
}
