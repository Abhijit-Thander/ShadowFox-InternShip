import { useState } from "react";
import { ArrowRight, Award, Heart, Users, Microscope } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const team = [
  {
    name: "Dr. Anupriya",
    role: "Founder & Chief Surgeon",
    initial: "A",
    color: "from-[#3B82C4] to-[#5BA4E0]",
    specialty: "General Dentistry",
  },
  {
    name: "Dr. Ananya Iyer",
    role: "Prosthodontist",
    initial: "A",
    color: "from-[#E07AA0] to-[#F4A3C0]",
    specialty: "Crowns & Bridges",
  },
  {
    name: "Dr. Meera Subramanian",
    role: "Endodontist",
    initial: "M",
    color: "from-[#7C3AED] to-[#A78BFA]",
    specialty: "Root Canal Therapy",
  },
  {
    name: "Dr. Arvind Kumar",
    role: "Dental Surgeon",
    initial: "A",
    color: "from-[#059669] to-[#34D399]",
    specialty: "Oral Surgery",
  },
  {
    name: "Dr. Sneha N",
    role: "Orthodontist",
    initial: "S",
    color: "from-[#D97706] to-[#FCD34D]",
    specialty: "Braces & Aligners",
  },
  {
    name: "Dr. Srinivas Rohit R.",
    role: "Implantologist",
    initial: "S",
    color: "from-[#0891B2] to-[#67E8F9]",
    specialty: "Dental Implants",
  },
  {
    name: "Dr. Balu",
    role: "Laser Surgeon",
    initial: "B",
    color: "from-[#BE185D] to-[#F9A8D4]",
    specialty: "Laser Dentistry",
  },
  {
    name: "Dr. Vikram Raj Kishore",
    role: "Aligners Partner",
    initial: "V",
    color: "from-[#1D4ED8] to-[#93C5FD]",
    specialty: "Clear Aligners",
  },
  {
    name: "Dr. Ajay Kumar",
    role: "Oral & Maxillofacial Surgeon",
    initial: "A",
    color: "from-[#B45309] to-[#FDE68A]",
    specialty: "Complex Surgeries",
  },
];

const milestones = [
  {
    year: "2000",
    label: "Graduated & began professional journey",
    side: "right",
  },
  {
    year: "2000–06",
    label: "Six impactful years at Mathura Clinic refining clinical skills",
    side: "left",
  },
  {
    year: "2004",
    label: "Founded Sakthi Dental Clinic in Hosur",
    side: "right",
  },
  {
    year: "2010+",
    label: "Appointed as Dental Consultant at Chandara Hospital PHC",
    side: "left",
  },
  {
    year: "Today",
    label: "Serving 5000+ patients with 9 specialist doctors under one roof",
    side: "right",
  },
];

const values = [
  {
    icon: <Heart size={22} />,
    title: "Patient-Centric Care",
    desc: "Every treatment decision starts with your comfort, safety, and long-term wellbeing — never just the procedure.",
  },
  {
    icon: <Microscope size={22} />,
    title: "Technology-Driven",
    desc: "LASER dentistry, digital imaging, and modern implant systems ensure precision in every treatment we offer.",
  },
  {
    icon: <Award size={22} />,
    title: "Clinical Excellence",
    desc: "Continuous learning and specialisation across 9 disciplines ensures you always receive the right expert for your needs.",
  },
  {
    icon: <Users size={22} />,
    title: "Community Impact",
    desc: "Beyond the clinic, we run outreach and awareness programmes for the community of Hosur and surrounding areas.",
  },
];

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

// ─── HERO ────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative overflow-hidden bg-linear-to-br from-[#EBF3FC] via-white to-[#FDF0F5]">
    {/* blobs */}
    <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-100 opacity-50 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-pink-100 opacity-50 blur-3xl pointer-events-none" />

    <div className="relative z-10 max-w-6xl mx-auto px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* left */}
      <div>
        <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-[#E07AA0] mb-4">
          About Sakthi Dental Clinic
        </span>
        <h1 className="font-serif text-5xl font-bold text-[#1A2744] leading-tight mb-5">
          Get to Know
          <br />
          <span className="text-[#3B82C4]">Dr. Anupriya</span>
        </h1>
        <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-md">
          Your Trusted Partner in Dental Care. Bringing over 20 years of
          expertise, Dr. Anupriya stands as a leading figure in modern dentistry
          at Hosur — combining clinical precision with genuine warmth.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="bg-linear-to-r from-[#3B82C4] to-[#5BA4E0] text-white font-semibold px-6 py-3 rounded-full shadow-md shadow-blue-200 hover:shadow-lg transition-shadow flex items-center gap-2">
            Fix an Appointment <ArrowRight size={15} />
          </button>
          <button className="bg-white border border-slate-200 text-[#1A2744] font-semibold px-6 py-3 rounded-full hover:border-[#3B82C4] transition-colors text-sm">
            Meet Our Team ↓
          </button>
        </div>
      </div>

      {/* right — Dr. photo placeholder + floating badges */}
      <div className="relative flex justify-center">
        {/* photo card */}
        <div className="relative w-72 h-80">
          <div className="w-full h-full rounded-3xl bg-linear-to-br from-[#C5DDF5] to-[#F5C6D8] flex flex-col items-center justify-center gap-3 shadow-xl">
            <span className="text-7xl opacity-60">👩‍⚕️</span>
            <p className="text-sm text-slate-500 italic">Dr. Anupriya photo</p>
            <p className="text-xs text-slate-400">(Replace with Drive image)</p>
          </div>

          {/* badge — experience */}
          <div className="absolute -left-10 top-10 bg-white rounded-2xl px-4 py-3 shadow-lg border border-slate-100 flex items-center gap-3">
            <div className="w-9 h-9 bg-[#EBF3FC] rounded-xl flex items-center justify-center text-base">
              🏅
            </div>
            <div className="leading-tight">
              <strong className="block text-sm text-[#1A2744]">
                20+ Years
              </strong>
              <span className="text-xs text-slate-400">Experience</span>
            </div>
          </div>

          {/* badge — patients */}
          <div className="absolute -right-10 bottom-14 bg-white rounded-2xl px-4 py-3 shadow-lg border border-slate-100 flex items-center gap-3">
            <div className="w-9 h-9 bg-[#FDF0F5] rounded-xl flex items-center justify-center text-base">
              ❤️
            </div>
            <div className="leading-tight">
              <strong className="block text-sm text-[#1A2744]">5000+</strong>
              <span className="text-xs text-slate-400">Happy Patients</span>
            </div>
          </div>

          {/* badge — est */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-linear-to-r from-[#3B82C4] to-[#5BA4E0] text-white rounded-full px-5 py-2 shadow-lg text-xs font-semibold whitespace-nowrap">
            ✦ Established 2004 — Hosur
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── DR BIO ──────────────────────────────────────────────────────────────────

const DrBio = () => (
  <section className="max-w-6xl mx-auto px-12 py-20 grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
    {/* timeline — col 2 */}
    <div className="lg:col-span-2">
      <span className="text-xs font-semibold tracking-[2.5px] uppercase text-[#E07AA0] block mb-3">
        Her Journey
      </span>
      <h2 className="font-serif text-3xl font-bold text-[#1A2744] mb-10 leading-tight">
        Two Decades of
        <br />
        Dedicated Care
      </h2>

      {/* vertical timeline */}
      <div className="relative">
        {/* centre line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-linear-to-b from-[#3B82C4] via-[#E07AA0] to-[#3B82C4] opacity-30" />

        <div className="flex flex-col gap-8">
          {milestones.map(({ year, label }, i) => (
            <div key={i} className="flex gap-5 items-start">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#3B82C4] to-[#E07AA0] flex items-center justify-center z-10 shadow-md">
                  <div className="w-2.5 h-2.5 bg-white rounded-full" />
                </div>
              </div>
              <div className="pt-0.5">
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#3B82C4] block mb-0.5">
                  {year}
                </span>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* bio text — col 3 */}
    <div className="lg:col-span-3 pt-2">
      <span className="text-xs font-semibold tracking-[2.5px] uppercase text-[#E07AA0] block mb-3">
        About the Founder
      </span>
      <h2 className="font-serif text-3xl font-bold text-[#1A2744] mb-6 leading-tight">
        Dr. Anupriya
        <span className="block text-lg font-medium text-[#3B82C4] mt-1 font-sans">
          Founder & Chief Dental Surgeon
        </span>
      </h2>

      <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
        <p>
          Bringing over 20 years of expertise, Dr. Anupriya stands as a leading
          figure in modern dentistry at Hosur. She began her professional
          journey after graduating in 2000, and her passion for exceptional
          dental care was nurtured during six impactful years at Mathura Clinic
          — where she refined her clinical skills and deepened her commitment to
          patient wellbeing.
        </p>
        <p>
          In 2004, Dr. Anupriya established Sakthi Dental Clinic with a clear
          vision: to make high-quality dental care accessible to all. Her
          dedication extends beyond private practice — she has served as a
          trusted dental consultant at Chandara Hospital's Primary Health Center
          for over a decade.
        </p>
        <p>
          At Sakthi Dental Clinic, she has built a team where every smile isn't
          just treated — it's celebrated. From routine check-ups to complex
          procedures, Dr. Anupriya ensures personalized care tailored to each
          patient's unique dental needs.
        </p>
      </div>

      {/* credential badges */}
      <div className="flex flex-wrap gap-2.5 mt-8">
        {[
          { label: "20+ Years Experience", bg: "bg-[#EBF3FC] text-[#3B82C4]" },
          { label: "Founded 2004", bg: "bg-[#FDF0F5] text-[#E07AA0]" },
          { label: "PHC Consultant", bg: "bg-[#EBF3FC] text-[#3B82C4]" },
          {
            label: "Women & Child Specialist",
            bg: "bg-[#FDF0F5] text-[#E07AA0]",
          },
          { label: "LASER Certified", bg: "bg-[#EBF3FC] text-[#3B82C4]" },
        ].map(({ label, bg }) => (
          <span
            key={label}
            className={`text-xs font-semibold px-4 py-1.5 rounded-full ${bg}`}
          >
            {label}
          </span>
        ))}
      </div>

      {/* stats row */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {[
          { n: "20+", label: "Years in Practice" },
          { n: "5000+", label: "Patients Treated" },
          { n: "9", label: "Specialist Doctors" },
        ].map(({ n, label }) => (
          <div
            key={label}
            className="bg-[#F8FAFF] border border-slate-100 rounded-2xl p-4 text-center"
          >
            <strong className="block font-serif text-2xl text-[#1A2744]">
              {n}
            </strong>
            <span className="text-xs text-slate-400 mt-1 block">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── VISION & MISSION ────────────────────────────────────────────────────────

const VisionMission = () => (
  <section className="bg-[#F8FAFF] px-12 py-20">
    <div className="max-w-6xl mx-auto">
      {/* header */}
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-[2.5px] uppercase text-[#E07AA0] block mb-3">
          Our Purpose
        </span>
        <h2 className="font-serif text-4xl font-bold text-[#1A2744] leading-tight">
          Vision & Mission
        </h2>
      </div>

      {/* two cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* mission */}
        <div className="bg-white border border-slate-200 rounded-3xl p-10 relative overflow-hidden group hover:shadow-xl hover:shadow-blue-100 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#3B82C4] to-[#5BA4E0] rounded-t-3xl" />
          <div className="w-12 h-12 bg-[#EBF3FC] rounded-2xl flex items-center justify-center text-2xl mb-6">
            🎯
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#1A2744] mb-4">
            Our Mission
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            To redefine oral healthcare by delivering personalized,
            compassionate, and advanced dental services. We are committed to
            creating a welcoming environment where patients feel comfortable and
            confident, integrating state-of-the-art technology with
            patient-centric care to enhance not only your smile but your overall
            well-being.
          </p>
        </div>

        {/* vision */}
        <div className="bg-white border border-slate-200 rounded-3xl p-10 relative overflow-hidden group hover:shadow-xl hover:shadow-pink-100 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#E07AA0] to-[#F4A3C0] rounded-t-3xl" />
          <div className="w-12 h-12 bg-[#FDF0F5] rounded-2xl flex items-center justify-center text-2xl mb-6">
            🔭
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#1A2744] mb-4">
            Our Vision
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            To be a leading force in modern dentistry, known for setting new
            standards in patient care, innovation, and community engagement. We
            aspire to contribute positively to the community through awareness
            initiatives and outreach programmes — ensuring every smile we treat
            reflects confidence, health, and happiness.
          </p>
        </div>
      </div>

      {/* values grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {values.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#3B82C4] hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group"
          >
            <div className="w-11 h-11 bg-[#EBF3FC] rounded-xl flex items-center justify-center text-[#3B82C4] mb-4 group-hover:bg-[#3B82C4] group-hover:text-white transition-all duration-300">
              {icon}
            </div>
            <h4 className="font-semibold text-[#1A2744] text-sm mb-2">
              {title}
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── TEAM ────────────────────────────────────────────────────────────────────

const TeamSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-12 py-20">
      {/* header */}
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-[2.5px] uppercase text-[#E07AA0] block mb-3">
          Our Doctors
        </span>
        <h2 className="font-serif text-4xl font-bold text-[#1A2744] mb-4">
          Meet the Expert Team
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
          A multidisciplinary team of nine specialists dedicated to covering
          every aspect of your oral health under one roof.
        </p>
      </div>

      {/* founder spotlight */}
      <div className="bg-linear-to-br from-[#EBF3FC] to-[#FDF0F5] border border-slate-200 rounded-3xl p-8 mb-8 flex flex-col sm:flex-row items-center gap-8">
        <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-[#3B82C4] to-[#5BA4E0] flex items-center justify-center text-white text-3xl font-bold font-serif shrink-0 shadow-lg shadow-blue-200">
          A
        </div>
        <div className="text-center sm:text-left">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#E07AA0] block mb-1">
            Founder
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#1A2744]">
            Dr. Anupriya
          </h3>
          <p className="text-[#3B82C4] text-sm font-medium mt-0.5">
            Chief Dental Surgeon
          </p>
          <p className="text-slate-500 text-xs mt-2 max-w-sm leading-relaxed">
            Over 20 years of clinical expertise. Founder of Sakthi Dental Clinic
            and a trusted PHC consultant — the heart of everything we do here.
          </p>
        </div>
        <div className="ml-auto hidden sm:flex gap-2 flex-wrap justify-end max-w-xs">
          {[
            "General Dentistry",
            "Laser Care",
            "Women & Child",
            "PHC Consultant",
          ].map((tag) => (
            <span
              key={tag}
              className="text-[11px] bg-white border border-slate-200 text-slate-500 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* rest of team grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {team.slice(1).map((doctor, i) => (
          <div
            key={doctor.name}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="bg-white border border-slate-200 rounded-2xl p-5 text-center
                       hover:border-[#3B82C4] hover:shadow-lg hover:shadow-blue-50
                       transition-all duration-300 cursor-default group"
          >
            {/* avatar */}
            <div
              className={`w-16 h-16 rounded-2xl bg-linear-to-br ${doctor.color} flex items-center justify-center text-white text-xl font-bold font-serif mx-auto mb-4 shadow-md group-hover:scale-105 transition-transform duration-300`}
            >
              {doctor.initial}
            </div>

            <h4 className="font-semibold text-[#1A2744] text-sm leading-tight mb-0.5">
              {doctor.name}
            </h4>
            <p className="text-[#3B82C4] text-xs font-medium mb-2">
              {doctor.role}
            </p>

            {/* specialty pill — shows on hover */}
            <span
              className={`inline-block text-[10px] bg-[#F8FAFF] border border-slate-100 text-slate-400 px-3 py-1 rounded-full transition-all duration-200 ${hovered === i ? "opacity-100" : "opacity-60"}`}
            >
              {doctor.specialty}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── TRUST STRIP ─────────────────────────────────────────────────────────────

const TrustStrip = () => (
  <section className="bg-linear-to-r from-[#1A2744] to-[#2563A8] px-12 py-16 text-center text-white">
    <div className="max-w-2xl mx-auto">
      <span className="text-blue-300 text-xs font-semibold tracking-[2.5px] uppercase block mb-4">
        Because your smile matters
      </span>
      <h2 className="font-serif text-3xl font-bold mb-4">
        A healthy smile is a gateway to
        <br />
        confidence and wellbeing.
      </h2>
      <p className="text-blue-200 text-sm leading-relaxed mb-8 max-w-md mx-auto">
        Whether you're looking for preventive care, cosmetic enhancements, or
        restorative solutions — Dr. Anupriya and her team are committed to
        delivering excellence at every step.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button className="bg-white text-[#3B82C4] font-semibold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors text-sm flex items-center gap-2 justify-center">
          Fix an Appointment <ArrowRight size={14} />
        </button>
        <button className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm">
          View Treatments →
        </button>
      </div>
    </div>
  </section>
);

// ─── PAGE ────────────────────────────────────────────────────────────────────

const AboutPage = () => (
  <div className="min-h-screen bg-white font-sans">
    <Hero />
    <DrBio />
    <VisionMission />
    <TeamSection />
    <TrustStrip />
   
  </div>
);

export default AboutPage;
