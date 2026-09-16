import { ArrowLeft, Download, Mail } from "lucide-react";
import { Header } from "@/components/header";

export default function CvPage() {
  return (
    <main>
      <Header />
      <section className="cv-hero">
        <a href="/" className="back-link"><ArrowLeft size={16} /> Home</a>
        <div><p className="eyebrow">Curriculum Vitae · 2026</p><h1>Ali Kansoh</h1><p>M.Arch / B.Arch Graduate</p></div>
        <div className="cv-actions">
          <a href="/documents/Ali-Kansoh-CV-2026.pdf" download className="primary-button">Download CV <Download size={17} /></a>
          <a href="mailto:alikanso725@hotmail.com" className="secondary-button">Email Ali <Mail size={17} /></a>
        </div>
      </section>
      <section className="cv-content">
        <div className="cv-summary">
          <div className="cv-quick-facts">
            <div><span>Based in</span><strong>Madrid, Spain</strong></div>
            <div><span>Languages</span><strong>English C1 · Arabic native · Spanish B2</strong></div>
          </div>
        </div>
        <div className="cv-preview"><img src="/assets/cv/cv-1.jpg" alt="Ali Kansoh curriculum vitae" /></div>
      </section>
    </main>
  );
}
