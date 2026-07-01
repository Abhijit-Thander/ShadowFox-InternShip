import { useState } from "react";
import { ArrowRight, ChevronRight, Stethoscope } from "lucide-react";

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
    tag: "Most Popular",
    tagColor: "bg-blue-100 text-blue-600",
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
    tag: "Common",
    tagColor: "bg-purple-100 text-purple-600",
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
    tag: "Pain-Free",
    tagColor: "bg-green-100 text-green-600",
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
    tag: "Full Smile",
    tagColor: "bg-pink-100 text-pink-600",
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
    tag: "Permanent",
    tagColor: "bg-indigo-100 text-indigo-600",
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
    tag: "Advanced",
    tagColor: "bg-yellow-100 text-yellow-700",
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
    tag: "Tooth Saving",
    tagColor: "bg-teal-100 text-teal-600",
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
    tag: "Gentle Care",
    tagColor: "bg-orange-100 text-orange-600",
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
    tag: "Secure Fit",
    tagColor: "bg-cyan-100 text-cyan-600",
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
    tag: "Brighten Smile",
    tagColor: "bg-amber-100 text-amber-700",
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
    tag: "Smile Makeover",
    tagColor: "bg-rose-100 text-rose-600",
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
    tag: "Child Friendly",
    tagColor: "bg-lime-100 text-lime-700",
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
    tag: "Advanced Gum",
    tagColor: "bg-violet-100 text-violet-600",
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
    tag: "Align Teeth",
    tagColor: "bg-blue-100 text-blue-600",
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
    tag: "Discreet",
    tagColor: "bg-sky-100 text-sky-600",
    short: "Transparent, removable trays for invisible alignment.",
    description:
      "For a discreet alternative to traditional braces, we offer clear aligners. These transparent, removable trays gradually shift your teeth into perfect alignment, providing comfort and flexibility throughout your orthodontic journey. Eat what you want, remove for photos — orthodontics on your terms.",
    duration: "6–18 months",
    sessions: "Monthly visits",
  },
];

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

// ─── HERO ────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="bg-linear-to-br from-[#EBF3FC] via-white to-[#FDF0F5] px-12 py-20 text-center relative overflow-hidden">
    {/* decorative blobs */}
    <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-100 opacity-40 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-pink-100 opacity-40 blur-3xl pointer-events-none" />

    <div className="relative z-10 max-w-2xl mx-auto">
      <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-[#E07AA0] mb-4">
        Our Services
      </span>
      <h1 className="font-serif text-5xl font-bold text-[#1A2744] leading-tight mb-5">
        Complete Dental
        <br />
        <span className="text-[#3B82C4]">Treatments</span>
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

const TreatmentCard = ({ treatment, onClick }) => {
  const { icon, title, tag, tagColor, short, category, duration, sessions } =
    treatment;

  return (
    <div
      onClick={() => onClick(treatment)}
      className="group bg-white border border-slate-200 rounded-2xl p-6 cursor-pointer
                 hover:border-[#3B82C4] hover:shadow-xl hover:shadow-blue-100
                 transition-all duration-300 flex flex-col gap-4"
    >
      {/* top row */}
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#EBF3FC] to-[#F0EAFC] flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <span
          className={`text-[11px] font-semibold px-3 py-1 rounded-full ${tagColor}`}
        >
          {tag}
        </span>
      </div>

      {/* text */}
      <div>
        <h3 className="font-semibold text-[#1A2744] text-base mb-1.5 group-hover:text-[#3B82C4] transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {short}
        </p>
      </div>

      {/* meta */}
      <div className="flex items-center gap-3 pt-1">
        <span className="text-xs text-slate-400 bg-slate-50 border border-slate-100 rounded-full px-3 py-1">
          ⏱ {duration}
        </span>
        <span className="text-xs text-slate-400 bg-slate-50 border border-slate-100 rounded-full px-3 py-1">
          📅 {sessions}
        </span>
      </div>

      {/* footer */}
      <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-medium text-[#E07AA0]">{category}</span>
        <span className="text-xs text-[#3B82C4] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn more <ChevronRight size={13} />
        </span>
      </div>
    </div>
  );
};

// ─── MODAL ───────────────────────────────────────────────────────────────────

const Modal = ({ treatment, onClose }) => {
  if (!treatment) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 text-sm transition-colors"
        >
          ✕
        </button>

        {/* icon + tag */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#EBF3FC] to-[#F0EAFC] flex items-center justify-center text-3xl shadow-sm">
            {treatment.icon}
          </div>
          <div>
            <span
              className={`text-[11px] font-semibold px-3 py-1 rounded-full ${treatment.tagColor}`}
            >
              {treatment.tag}
            </span>
            <h2 className="font-serif text-xl font-bold text-[#1A2744] mt-1.5">
              {treatment.title}
            </h2>
          </div>
        </div>

        {/* description */}
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          {treatment.description}
        </p>

        {/* meta grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: "Category", value: treatment.category },
            { label: "Duration", value: treatment.duration },
            { label: "Sessions", value: treatment.sessions },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="bg-[#F8FAFF] border border-slate-100 rounded-xl p-3 text-center"
            >
              <span className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                {label}
              </span>
              <span className="text-xs font-semibold text-[#1A2744]">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="w-full bg-linear-to-r from-[#3B82C4] to-[#5BA4E0] text-white font-semibold py-3.5 rounded-2xl hover:shadow-lg hover:shadow-blue-200 transition-shadow flex items-center justify-center gap-2">
          Book this Treatment
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

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
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const filtered =
    activeCategory === "All"
      ? treatments
      : treatments.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8FAFF] font-sans">
      <Hero />

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-12 py-14">
        {/* count */}
        <p className="text-sm text-slate-400 mb-6">
          Showing{" "}
          <span className="font-semibold text-[#1A2744]">
            {filtered.length}
          </span>{" "}
          treatment{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" && (
            <span>
              {" "}
              in{" "}
              <span className="text-[#3B82C4] font-medium">
                {activeCategory}
              </span>
            </span>
          )}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <TreatmentCard
              key={t.id}
              treatment={t}
              onClick={setSelectedTreatment}
            />
          ))}
        </div>
      </main>

      <CTABanner />
      {/* <Footer /> */}

      {/* Modal */}
      <Modal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
      />
    </div>
  );
};

export default TreatmentsPage;
