import { useState } from "react";
import { ArrowRight, ChevronRight, Stethoscope } from "lucide-react";
import TreatmentCard from "../components/ui/TreatmentCard";
import teethCleaning from "../assets/treatments/Teeth-Cleaning.png";
import toothFilling from "../assets/treatments/Tooth-Filling.jpg";
import toothExct from "../assets/treatments/toothExct.png";
import acd from "../assets/treatments/acd.png";
import dentalImp from "../assets/treatments/Impants.png";
import laserDen from "../assets/treatments/Laser-Surgery.png";
import rootCanel from "../assets/treatments/RootCanel.png";
import wishDom from "../assets/treatments/wishDom.png";
import fpd from "../assets/treatments/fpd.png";
import tWhitening from "../assets/treatments/Bleaching.png";
import veneer from "../assets/treatments/Veneer.jpg";
import pd from "../assets/treatments/Pediatric-dentistry.png";
import flap from "../assets/treatments/Flap-surgery.png";
import orthodontic from "../assets/treatments/Orthodonic.png";
import aligners from "../assets/treatments/Aligner.png";

// ─── DATA ────────────────────────────────────────────────────────────────────

const categories = [
  "All",
  "Preventive",
  "Restorative",
  "Cosmetic",
  "Surgical",
  "Orthodontic",
  "Pediatric",
];

const treatments = [
  {
    id: 1,
    icon: "🧹",
    title: "Teeth Cleaning & Scaling",
    category: "Preventive",
    img: teethCleaning,
    short: "Non-surgical gum care with modern LASER technology.",
    description:
      "Advanced, non-surgical gum care using modern LASER technology for precise and effective treatment. Whether you're dealing with early signs of gum disease or a more advanced condition, our skilled professionals ensure thorough cleaning to restore gum health. Scaling is advised for moderate cases to remove plaque and tartar buildup, while severe cases may require root planing supported by LASER treatment.",
    duration: "45–60 min",
    sessions: "1–2 sessions",
  },
  {
    id: 2,
    icon: "🔧",
    title: "Tooth Filling",
    category: "Restorative",
    img: toothFilling,
    short: "Composite fillings for cavities and tooth restoration.",
    description:
      "We specialize in restoring smiles through expert tooth filling services. Whether tooth damage is caused by cavities, trauma, or wear from habits like teeth grinding or nail-biting, our team uses high-quality materials and the latest techniques to repair and protect your teeth. We focus on sealing gaps effectively to prevent future decay and ensure long-term oral health.",
    duration: "30–60 min",
    sessions: "1 session",
  },
  {
    id: 3,
    icon: "🦷",
    title: "Tooth Extraction",
    category: "Surgical",
    img: toothExct,
    short: "Safe and painless removal of impacted or decayed teeth.",
    description:
      "When a tooth is beyond repair, we ensure the extraction process is handled with the utmost care and comfort. Our experienced dental team evaluates every option before recommending removal, but when necessary, we perform extractions using gentle techniques to minimize discomfort. We explain each step to our patients and support you through every stage of recovery.",
    duration: "30–45 min",
    sessions: "1 session",
  },
  {
    id: 4,
    icon: "😁",
    title: "Artificial Complete Denture",
    category: "Restorative",
    img: acd,
    short: "Full mouth replacement to restore confidence and function.",
    description:
      "We craft high-quality complete dentures to restore both function and aesthetics for patients with missing teeth. Our dentures are designed with precision using durable materials, providing a natural look and a comfortable fit. Whether you're replacing several teeth or a full arch, our customized solutions help you regain confidence and improve daily functionality.",
    duration: "2–3 visits",
    sessions: "Multiple sessions",
  },
  {
    id: 5,
    icon: "🔩",
    title: "Dental Implants",
    category: "Surgical",
    img: dentalImp,
    short: "Biocompatible titanium implants for permanent tooth replacement.",
    description:
      "Dental implants offer a modern and reliable solution for replacing missing teeth. Using biocompatible materials like titanium, we securely place artificial roots into the jawbone, creating a stable foundation for prosthetic teeth. Our advanced implant procedures restore both the appearance and strength of your smile, ensuring a natural feel and long-lasting results.",
    duration: "60–90 min",
    sessions: "2–3 sessions",
  },
  {
    id: 6,
    icon: "⚡",
    title: "Laser Dentistry",
    category: "Surgical",
    img: laserDen,
    short: "Minimally invasive laser procedures for precise treatments.",
    description:
      "We utilize advanced laser technology to perform precise, minimally invasive dental treatments. From soft tissue surgeries to gum care, laser procedures offer faster healing, reduced discomfort, and enhanced accuracy. Whether you're undergoing gum reshaping or other corrective treatments, our state-of-the-art laser equipment ensures efficient, safe, and comfortable care.",
    duration: "30–60 min",
    sessions: "1–2 sessions",
  },
  {
    id: 7,
    icon: "🩺",
    title: "Root Canal Therapy",
    category: "Restorative",
    img: rootCanel,
    short: "Relieves pain and preserves your natural tooth structure.",
    description:
      "When tooth infections reach deep into the pulp, root canal treatment becomes essential. We carefully remove infected tissue, clean the area thoroughly, and seal the tooth to prevent future issues. Our focus is on relieving pain, eliminating infection, and preserving your natural tooth structure for long-term dental health.",
    duration: "60–90 min",
    sessions: "1–2 sessions",
  },
  {
    id: 8,
    icon: "😬",
    title: "Wisdom Tooth Extraction",
    category: "Surgical",
    img: wishDom,
    short: "Expert removal with comprehensive post-operative care.",
    description:
      "If impacted or problematic, wisdom teeth can cause discomfort and oral health risks. We specialize in gentle and effective wisdom tooth removal, using modern techniques and anesthesia options to ensure a smooth, pain-free experience. We also provide comprehensive post-operative care to support quick recovery and lasting comfort.",
    duration: "45–90 min",
    sessions: "1 session",
  },
  {
    id: 9,
    icon: "🌉",
    title: "Fixed Partial Denture (Bridge)",
    category: "Restorative",
    img: fpd,
    short: "Custom bridges anchored to adjacent teeth or implants.",
    description:
      "Our expertly crafted fixed partial dentures offer a secure solution for replacing missing teeth by anchoring prosthetic teeth to adjacent natural teeth or implants. We focus on custom-made dental bridges that restore your smile's appearance while improving chewing function and maintaining oral stability.",
    duration: "2 visits",
    sessions: "2 sessions",
  },
  {
    id: 10,
    icon: "💎",
    title: "Teeth Whitening (Bleaching)",
    category: "Cosmetic",
    img: tWhitening,
    short: "Professional whitening for a radiant, confident smile.",
    description:
      "Brighten your smile with professional teeth whitening services. We treat both external and internal stains, using safe bleaching agents to lighten your teeth by several shades. Whether addressing discoloration from food, beverages, or age, our whitening treatments restore your smile's natural radiance and boost your confidence.",
    duration: "60–90 min",
    sessions: "1–2 sessions",
  },
  {
    id: 11,
    icon: "✨",
    title: "Veneers",
    category: "Cosmetic",
    img: pd,
    short: "Custom shells to cover chips, gaps, or discolouration.",
    description:
      "Transform your smile with dental veneers — thin, custom-made shells designed to cover imperfections such as chips, gaps, or discoloration. We offer high-quality veneers that enhance your teeth's appearance, giving you a flawless and natural-looking smile tailored precisely to you.",
    duration: "2 visits",
    sessions: "2 sessions",
  },
  {
    id: 12,
    icon: "👶",
    title: "Pediatric Dentistry",
    category: "Pediatric",
    img: veneer,
    short: "Gentle dental care designed especially for children.",
    description:
      "We provide gentle and comprehensive dental care for children. Our friendly team creates a welcoming environment, ensuring young patients feel safe and comfortable during their visits. From routine check-ups to preventive treatments, we focus on building healthy dental habits for a lifetime of bright smiles.",
    duration: "30–45 min",
    sessions: "Ongoing",
  },
  {
    id: 13,
    icon: "🔬",
    title: "Flap Surgery",
    category: "Surgical",
    img: flap,
    short: "Deep-cleaning surgery for advanced gum disease.",
    description:
      "For advanced gum disease, flap surgery may be necessary. Our skilled team performs this procedure by lifting the gum tissue to remove deep-seated plaque and bacteria, then repositioning it for optimal healing. This treatment helps prevent further periodontal issues and supports long-term gum health.",
    duration: "60–120 min",
    sessions: "1–2 sessions",
  },
  {
    id: 14,
    icon: "🔄",
    title: "Orthodontic Braces",
    category: "Orthodontic",
    img: orthodontic,
    short: "Metal, ceramic, or lingual braces for a confident smile.",
    description:
      "Correct misaligned teeth with customized orthodontic treatments. We offer a variety of braces — metal, ceramic, or lingual — to suit your preferences. Our goal is to achieve improved alignment, better bite function, and a confident, harmonious smile that you'll be proud to show off.",
    duration: "12–24 months",
    sessions: "Monthly visits",
  },
  {
    id: 15,
    icon: "🫧",
    title: "Clear Aligners",
    category: "Orthodontic",
    img: aligners,
    short: "Transparent, removable trays for invisible alignment.",
    description:
      "For a discreet alternative to traditional braces, we offer clear aligners. These transparent, removable trays gradually shift your teeth into perfect alignment, providing comfort and flexibility throughout your orthodontic journey. Eat what you want, remove for photos — orthodontics on your terms.",
    duration: "6–18 months",
    sessions: "Monthly visits",
  },
];

// ─── HERO ────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="bg-linear-to-br from-[#EBF3FC] via-white to-[#FDF0F5] px-12 py-20 text-center relative overflow-hidden">
    {/* decorative blobs */}
    <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-100 opacity-40 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-pink-100 opacity-40 blur-3xl pointer-events-none" />

    <div className="relative z-10 max-w-2xl mx-auto">
      <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-[#C0161B] mb-4">
        Our Services
      </span>
      <h1 className="font-serif text-5xl font-bold text-[#1A2744] leading-tight mb-5">
        Complete Dental
        <br />
        <span className="text-[#1B4FBE]">Treatments</span>
      </h1>
      <p className="text-slate-500 text-base leading-relaxed mb-8">
        From routine cleanings to advanced implants — 15 specialised dental
        services designed to care for every member of your family.
      </p>

      {/* stat pills */}
      <div className="flex flex-wrap justify-center gap-3">
        {[
          { n: "15+", label: "Treatments" },
          { n: "20+", label: "Years Experience" },
          { n: "9", label: "Specialist Doctors" },
        ].map(({ n, label }) => (
          <div
            key={label}
            className="bg-white border border-slate-200 rounded-full px-5 py-2 flex items-center gap-2 shadow-sm"
          >
            <span className="text-[#3B82C4] font-bold text-sm">{n}</span>
            <span className="text-slate-500 text-xs">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── TREATMENT CARD ──────────────────────────────────────────────────────────

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {treatments.map((treatment) => (
    <TreatmentCard key={treatment.id} treatment={treatment} />
  ))}
</div>;

// ─── CTA BANNER ──────────────────────────────────────────────────────────────

const CTABanner = () => (
  <section className="bg-linear-to-r from-[#1A2744] to-[#2563A8] px-12 py-16 text-center text-white">
    <div className="max-w-xl mx-auto">
      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5">
        <Stethoscope size={26} className="text-blue-200" />
      </div>
      <h2 className="font-serif text-3xl font-bold mb-3">
        Not sure which treatment you need?
      </h2>
      <p className="text-blue-200 text-sm leading-relaxed mb-8">
        Book a free consultation with our specialists. We'll assess your dental
        health and recommend the right treatment plan for you.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button className="bg-white text-[#3B82C4] font-semibold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors">
          Fix an Appointment
        </button>
        <button className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors">
          📞 Call Us Now
        </button>
      </div>
    </div>
  </section>
);

// ─── PAGE ────────────────────────────────────────────────────────────────────

const TreatmentsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? treatments
      : treatments.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8FAFF] font-sans">
      <Hero />

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <TreatmentCard key={t.id} treatment={t} />
          ))}
        </div>
      </main>
      <CTABanner />
    </div>
  );
};

export default TreatmentsPage;
