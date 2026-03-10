import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { PresentationEmbed } from "@/components/PresentationEmbed";
import { VideoSection } from "@/components/VideoSection";
import { PDFDownload } from "@/components/PDFDownload";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExecutiveSummary />
        <VideoSection />
        <PresentationEmbed />
        <PDFDownload />
      </main>
      <Footer />
    </>
  );
}
