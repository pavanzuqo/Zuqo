import Image from "next/image";
import { Inter } from "next/font/google";
import InstagramClone from "./../components/InstagramClone.tsx";
import InstagramAppShell from "./../components/InstagramAppShell.tsx";
import { ScrollArea } from "@/components/ui/scroll-area";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <InstagramAppShell />;
}
