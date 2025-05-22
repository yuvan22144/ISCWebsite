import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // utility for combining classes (if needed)
import Navbar from "./Navbar"; // We'll add this next
import Footer from "./Footer"; // Footer component, we'll build later

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
