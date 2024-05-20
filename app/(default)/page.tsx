export const metadata = {
  title: "Home - PT. Satyadhika Bakti Finance",
  description:
    "PT Satyadhika Bakti Finance (SB Finance) adalah perusahaan pembiayaan terpercaya di Surabaya yang menyediakan beragam solusi layanan keuangan terbaik dan komprehensif untuk perusahaan anda.",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import About from "@/components/about";
import Milestone from "@/components/milestone";
import Vision from "@/components/vision";
import Heros from "@/components/heros";
import Blocks from "@/components/blocks";
import Test from "@/components/test";

export default function Home() {
  return (
    <>
      <Heros />
      <Features />
      <About />
      <Milestone />
      <Vision />
    </>
  );
}
