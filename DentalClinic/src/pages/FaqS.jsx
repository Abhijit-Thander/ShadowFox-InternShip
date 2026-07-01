import { useState, useMemo } from "react";
import {
  ArrowRight,
  Search,
  ChevronDown,
  MessageCircle,
  Phone,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const categories = [
  { id: "all", label: "All Questions", icon: "🦷" },
  { id: "pain", label: "Pain & Relief", icon: "💊" },
  { id: "preventive", label: "Preventive Care", icon: "🧹" },
  { id: "procedures", label: "Procedures", icon: "🔧" },
  { id: "orthodontic", label: "Orthodontics", icon: "🔄" },
  { id: "pediatric", label: "Children", icon: "👶" },
];

const faqs = [
  {
    id: 1,
    category: "pain",
    question: "Can medication completely relieve tooth pain?",
    answer:
      "Not entirely. While medications may offer short-term relief, long-lasting relief requires identifying and treating the root cause of the pain through professional dental care. Painkillers mask the symptom — they don't resolve the underlying infection, decay, or structural problem causing the discomfort. Always visit your dentist if pain persists beyond a day or two.",
  },
  {
    id: 2,
    category: "preventive",
    question:
      "Does teeth scaling cause enamel damage, sensitivity, or gaps between teeth?",
    answer:
      "No. Scaling safely removes plaque and tartar from teeth and below the gum line. It doesn't damage enamel or create gaps. Some temporary sensitivity may occur right after the procedure, but it usually subsides within a few days as the gums heal and reattach to the teeth. Regular scaling (every 6 months) is actually one of the best things you can do to preserve your enamel long-term.",
  },
  {
    id: 3,
    category: "preventive",
    question: "Can fluorosis stains be removed through scaling?",
    answer:
      "Scaling can remove surface (extrinsic) stains caused by food, drinks, or tobacco — but not fluorosis, which is an internal (intrinsic) stain caused by excess fluoride during tooth development. Fluorosis may require cosmetic treatments like professional bleaching, dental veneers, or crowns for visible improvement, depending on the severity.",
  },
  {
    id: 4,
    category: "procedures",
    question: "Can painful teeth always be treated with fillings?",
    answer:
      "Not always. If the cavity has reached the pulp — the innermost layer of the tooth — a simple filling won't be sufficient. In such cases, root canal treatment (RCT) or tooth extraction may be necessary. Fillings are effective only when the damage is limited to the outer layers (enamel and dentin). Your dentist will take an X-ray to determine the right course of action.",
  },
  {
    id: 5,
    category: "procedures",
    question: "Is placing a crown necessary after root canal treatment?",
    answer:
      "Yes, in most cases. A crown is recommended after RCT to protect the treated tooth, which may be more brittle due to the removal of infected pulp tissue. It prevents fractures and restores full chewing function, especially for back teeth under heavy bite pressure. Skipping a crown significantly increases the risk of the tooth cracking and needing extraction.",
  },
  {
    id: 6,
    category: "pediatric",
    question: "Can milk teeth need root canal treatment?",
    answer:
      "Yes. If a milk tooth has a deep cavity and is likely to remain in the mouth for some time before its natural fall-out, an RCT (called a pulpectomy for milk teeth) can preserve it and prevent infection from spreading to the permanent tooth developing underneath. Premature loss of milk teeth can affect speech, eating, and spacing for permanent teeth.",
  },
  {
    id: 7,
    category: "preventive",
    question: "How can I maintain good oral hygiene at home?",
    answer:
      "Brush your teeth twice daily using the correct technique — small circular motions along the gum line, not aggressive horizontal scrubbing. Rinse after meals, floss at least once a day, and use a fluoride toothpaste. Avoid excessive sugary or acidic food and drinks. Schedule a professional cleaning and check-up every six months, even if you feel no pain — most dental problems are silent in their early stages.",
  },
  {
    id: 8,
    category: "orthodontic",
    question: "What is the best age to get braces?",
    answer:
      "Braces are most effective between ages 12 and 14, when the jaw and teeth are still actively developing and the bone is more responsive to repositioning. However, orthodontic treatment is not age-limited — adults can and do get braces successfully. Some conditions benefit from early intervention (age 7–9) to guide jaw growth before all permanent teeth appear. An orthodontic evaluation will determine the right timing for your situation.",
  },
  {
    id: 9,
    category: "procedures",
    question: "Do all wisdom teeth need to be removed?",
    answer:
      "No. Wisdom teeth only require removal if they are impacted (unable to fully emerge), infected, causing pain, or leading to crowding that damages adjacent teeth. If your wisdom teeth have erupted fully, are properly aligned, and can be cleaned without difficulty, they can be left in place. Regular X-rays will help your dentist monitor them over time.",
  },
  {
    id: 10,
    category: "procedures",
    question: "Is it important to replace missing teeth after extraction?",
    answer:
      "Yes. Once a tooth is extracted, the surrounding teeth gradually drift into the empty space, and the jawbone beneath begins to shrink (resorb) from lack of stimulation. This can affect your bite, chewing ability, speech, and facial appearance over time. Replacing extracted teeth — with implants, bridges, or dentures — helps maintain proper alignment and long-term oral health.",
  },
  {
    id: 11,
    category: "procedures",
    question: "What are the key benefits of dental implants over dentures?",
    answer:
      "Dental implants are anchored directly into the jawbone, so they function and feel like natural teeth — no slipping, no adhesives, and no dietary restrictions. They also preserve jawbone density by mimicking the natural root. Implants are a permanent solution that can last a lifetime with proper care. Dentures are more affordable upfront but require regular adjustments and replacement every 5–10 years.",
  },
  {
    id: 12,
    category: "preventive",
    question: "Which type of toothbrush and toothpaste should I use?",
    answer:
      "Use a soft or medium-bristled toothbrush with a small head for better reach into the back of your mouth. Hard bristles can wear down enamel and irritate gums. Choose a non-abrasive fluoride toothpaste appropriate for your needs (sensitivity, whitening, or children's formula). Replace your toothbrush or brush head every three months — or sooner if the bristles fray.",
  },
  {
    id: 13,
    category: "pain",
    question: "What causes tooth sensitivity?",
    answer:
      "Tooth sensitivity typically occurs when the protective enamel wears thin or the gum line recedes, exposing the underlying dentin — which has tiny channels that lead to the nerve. Common causes include enamel erosion from acidic food or drinks, aggressive brushing, tooth decay, hairline cracks, teeth grinding (bruxism), or recent dental procedures. Your dentist can identify the specific cause and recommend the right treatment.",
  },
  {
    id: 14,
    category: "preventive",
    question: "How often should I visit a dentist?",
    answer:
      "Visiting your dentist every six months is the standard recommendation for most adults — for a routine check-up and professional cleaning. However, some patients with gum disease, a high cavity risk, or active orthodontic treatment may need more frequent visits. Children should also be seen every six months from the time their first tooth appears. Don't wait for pain — early detection is always easier and less costly to treat.",
  },
];

const Hero = ({ searchQuery, setSearchQuery }) => (
  <section className="relative overflow-hidden bg-linear-to-br from-[#EBF3FC] via-[#F8FAFF] to-[#FDF0F5] py-8">
    {/* blobs */}
    <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-100 opacity-40 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-16 right-0 w-72 h-72 rounded-full bg-pink-100 opacity-40 blur-3xl pointer-events-none" />

    <div className="relative z-10  mx-auto px-6 text-center">
      <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-[#E07AA0] mb-4">
        Patient Support
      </span>
      <h1 className="font-serif text-5xl font-bold text-[#1A2744] leading-tight mb-5">
        Frequently Asked Questions
      </h1>
      <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-md mx-auto">
        Answers to the questions our patients ask most — from routine care to
        complex procedures.
      </p>
    </div>
  </section>
);

// ─── ACCORDION ITEM ──────────────────────────────────────────────────────────

const AccordionItem = ({ faq, isOpen, onToggle, searchQuery }) => {
  const highlight = (text) => {
    if (!searchQuery.trim()) return text;
    const regex = new RegExp(
      `(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi",
    );
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <mark
          key={i}
          className="bg-amber-100 text-amber-800 rounded px-0.5 not-italic font-medium"
        >
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300
      ${
        isOpen
          ? "border-[#3B82C4] shadow-lg shadow-blue-100"
          : "border-slate-200 hover:border-slate-300"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#F8FAFF] transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4 flex-1 min-w-0">
          {/* category tag */}
          <span
            className={`shrink-0 text-[14px] font-semibold px-2.5 rounded-full mt-0.5 `}
          >
            Q.
          </span>
          <span
            className={`text-sm font-semibold leading-snug transition-colors ${isOpen ? "text-[#3B82C4]" : "text-[#1A2744]"}`}
          >
            {highlight(faq.question)}
          </span>
        </div>

        {/* chevron */}
        <div
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300
          ${isOpen ? "bg-[#3B82C4] text-white rotate-180" : "bg-slate-100 text-slate-400"}`}
        >
          <ChevronDown size={14} />
        </div>
      </button>

      {/* answer panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="px-6 pb-6 pt-1 bg-white">
          {/* left accent line */}
          <div className="flex gap-4">
            <p className="text-slate-500 text-sm leading-relaxed">
              {highlight(faq.answer)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── MAIN FAQ BODY ───────────────────────────────────────────────────────────

const FAQBody = ({ searchQuery }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState(1);

  const filtered = useMemo(() => {
    let list = faqs;
    if (activeCategory !== "all") {
      list = list.filter((f) => f.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q) ||
          f.tag.toLowerCase().includes(q),
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* ── Accordion list ───────────────────────────────── */}
        <div className="flex-1 min-w-0">
          {/* result count + active category label */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <p className="text-sm text-slate-400">
              {filtered.length === 0 ? (
                "No results found"
              ) : (
                <>
                  Showing{" "}
                  <span className="font-semibold text-[#1A2744]">
                    {filtered.length}
                  </span>{" "}
                  question{filtered.length !== 1 ? "s" : ""}
                  {searchQuery && (
                    <span>
                      {" "}
                      for{" "}
                      <span className="text-[#3B82C4] font-medium">
                        "{searchQuery}"
                      </span>
                    </span>
                  )}
                </>
              )}
            </p>
            {activeCategory !== "all" && (
              <button
                onClick={() => setActiveCategory("all")}
                className="text-xs text-slate-400 hover:text-[#3B82C4] flex items-center gap-1 transition-colors"
              >
                ✕ Clear filter
              </button>
            )}
          </div>

          {/* empty state */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-[#F8FAFF] rounded-2xl border border-dashed border-slate-200">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-semibold text-[#1A2744] text-base mb-2">
                No matching questions
              </h3>
              <p className="text-slate-400 text-sm mb-6 max-w-xs mx-auto">
                Try different keywords, or ask us directly — we respond within
                the hour.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#3B82C4] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#2563A8] transition-colors"
              >
                Ask our team <ArrowRight size={14} />
              </a>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {filtered.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => toggle(faq.id)}
                  searchQuery={searchQuery}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ─── CTA STRIP ───────────────────────────────────────────────────────────────

const CTAStrip = () => (
  <section className="bg-linear-to-r from-[#1A2744] to-[#2563A8] py-16 text-white text-center">
    <div className="max-w-xl mx-auto px-6">
      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5">
        🦷
      </div>
      <h2 className="font-serif text-3xl font-bold mb-3">
        Didn't find your answer?
      </h2>
      <p className="text-blue-200 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
        Our dental team is available daily from 9 AM to 9 PM. Book a free
        consultation — we'll address your concerns in person.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button className="bg-white text-[#3B82C4] font-semibold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors text-sm flex items-center gap-2 justify-center">
          Fix an Appointment <ArrowRight size={14} />
        </button>
        <button className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm">
          📞 Call Us Now
        </button>
      </div>
    </div>
  </section>
);

// ─── PAGE ────────────────────────────────────────────────────────────────────

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FAQBody searchQuery={searchQuery} />
      <CTAStrip />
    </div>
  );
};

export default FAQPage;
