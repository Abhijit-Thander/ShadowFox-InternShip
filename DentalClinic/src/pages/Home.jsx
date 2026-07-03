import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router";
import iconDoctor from "../assets/AmenitiesIcon/icon-doctors.png";
import wheelChair from "../assets/AmenitiesIcon/icon-wheel-chair.png";
import parking from "../assets/AmenitiesIcon/icon-parking.png";
import pickup from "../assets/AmenitiesIcon/icon-pickup.png";
import cityCenter from "../assets/AmenitiesIcon/icon-city-center.png";
import heroImage from "../assets/Banner1.jpg";

// ─── DATA ────────────────────────────────────────────────────────────────────

const treatments = [
  {
    icon: "🧹",
    title: "Teeth Cleaning & Scaling",
    desc: "LASER-assisted deep clean to remove plaque and protect your gums.",
  },
  {
    icon: "🔧",
    title: "Tooth Filling",
    desc: "Composite fillings for cavities — natural look, lasting protection.",
  },
  {
    icon: "🦷",
    title: "Tooth Extraction",
    desc: "Safe and painless removal with complete post-care support.",
  },
  {
    icon: "🔩",
    title: "Dental Implants",
    desc: "Titanium implants for permanent, natural-feeling tooth replacement.",
  },
  {
    icon: "💎",
    title: "Teeth Whitening",
    desc: "Professional bleaching to restore your smile's natural radiance.",
  },
  {
    icon: "🔄",
    title: "Orthodontic Braces",
    desc: "Metal, ceramic, or lingual braces for a confident, aligned smile.",
  },
];

const testimonials = [
  {
    name: "Manisha M.",
    avatar: "M",
    color: "from-[#3B82C4] to-[#5BA4E0]",
    role: "Orthodontic Patient",
    rating: 5,
    text: "The doctors are extremely kind and attentive. My braces treatment is progressing really well. I feel genuinely cared for at every visit. Highly recommend Sakthi Dental Clinic to everyone.",
  },
  {
    name: "Mr. Arun Kumar",
    avatar: "A",
    color: "from-[#E07AA0] to-[#F4A3C0]",
    role: "Whitening Patient",
    rating: 5,
    text: "I got my teeth cleaned and whitened here, and the results were amazing. The staff is so humble and professional. I've recommended Sakthi Dental Clinic to my entire family — they all love it.",
  },
  {
    name: "Mrs. Revathi S.",
    avatar: "R",
    color: "from-[#7C3AED] to-[#A78BFA]",
    role: "Pediatric Patient's Parent",
    rating: 5,
    text: "Their attention to detail is outstanding. My daughter needed braces and the entire process from consultation to regular follow-ups has been so smooth. Really grateful for their care.",
  },
];

const amenities = [
  {
    icon: <img src={cityCenter} className="h-10 " />,
    label: "Convenient Central Location",
    desc: "Easily accessible from across Hosur",
  },
  {
    icon: <img src={parking} className="h-10 " />,
    label: "Hassle-Free Parking",
    desc: "Dedicated parking space for all patients",
  },
  {
    icon: <img src={iconDoctor} className="h-10 " />,
    label: "Daily 9 AM – 9 PM",
    desc: "Doctors available 7 days a week",
  },
  {
    icon: <img src={pickup} className="h-10 " />,
    label: "Pickup & Drop-Off",
    desc: "Transport support for patients in need",
  },
  {
    icon: <img src={wheelChair} className="h-10 " />,
    label: "Wheelchair Access",
    desc: "Fully accessible clinic for all patients",
  },
];

const whyUs = [
  {
    icon: "🏠",
    title: "All-in-One Care",
    desc: "From general dentistry to specialized treatments — everything under one roof with 9 specialists.",
  },
  {
    icon: "👨‍⚕️",
    title: "Experienced Doctors",
    desc: "Professionally trained dentists with 20+ years of combined expertise and ongoing education.",
  },
  {
    icon: "💙",
    title: "Patient-Centric",
    desc: "We prioritize your comfort, safety, and transparency at every step of every treatment.",
  },
  {
    icon: "⚡",
    title: "Technology-Driven",
    desc: "LASER technology, digital imaging, and modern implant systems for precision care.",
  },
];

// ─── HERO ────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative overflow-hidden bg-linear-to-br from-[#EBF3FC] via-[#F8FAFF] to-[#FDF0F5]">
    {/* Ambient blobs */}
    <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-blue-100 opacity-40 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-24 right-0 w-96 h-96 rounded-full bg-pink-100 opacity-40 blur-3xl pointer-events-none" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left — content */}
      <div className="flex flex-col gap-6">
        {/* pill badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-[#C5DDF5] rounded-full px-4 py-2 w-fit shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#E07AA0] animate-pulse" />
          <span className="text-xs font-semibold text-[#3B82C4]">
            Specialized for Women & Children
          </span>
        </div>

        {/* headline */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-[52px] font-bold text-[#1A2744] leading-[1.12]">
          Specialized Dental Care for{" "}
          <span className="text-[#3B82C4]">Women,</span>{" "}
          <span className="text-[#E07AA0]">Children</span> &amp; Families
        </h1>

        <p className="text-slate-500 text-base leading-relaxed max-w-md">
          Experience compassionate, expert-led dental services tailored to your
          needs — all in a modern and welcoming environment in the heart of
          Hosur.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <button className="bg-linear-to-r from-[#3B82C4] to-[#5BA4E0] text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-blue-200 hover:shadow-xl transition-shadow flex items-center gap-2 text-sm">
            🗓 Fix an Appointment <ArrowRight size={15} />
          </button>
          <button className="bg-white border border-slate-200 text-[#1A2744] font-semibold px-7 py-3.5 rounded-full hover:border-[#3B82C4] transition-colors text-sm">
            🚨 Emergency Support
          </button>
        </div>
      </div>

      {/* Right — image card + floating info cards */}
      <div className="relative flex justify-center items-center">
        {/* Main image placeholder */}
        <div className="relative w-full max-w-sm">
          <div className="w-full aspect-4/5 rounded-4xl  flex flex-col items-center justify-center gap-3 shadow-2xl shadow-blue-100">
            <img
              src={heroImage}
              alt="Hero"
              className=" w-full h-full object-bottom-right rounded-2xl "
            />
          </div>

          {/* Floating card — open hours */}
          {/* <div className="absolute -left-10 top-10 bg-white rounded-2xl px-4 py-3.5 shadow-xl border border-slate-100 flex items-center gap-3 min-w-max">
            <div className="w-10 h-10 bg-[#EBF3FC] rounded-xl flex items-center justify-center text-lg">
              🕐
            </div>
            <div className="leading-tight">
              <strong className="block text-sm text-[#1A2744]">
                Open Daily
              </strong>
              <span className="text-xs text-slate-400">9 AM – 9 PM</span>
            </div>
          </div> */}

          {/* Floating card — rating */}
          {/* <div className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white rounded-2xl px-4 py-3.5 shadow-xl border border-slate-100 flex items-center gap-3 min-w-max">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-lg">
              ⭐
            </div>
            <div className="leading-tight">
              <strong className="block text-sm text-[#1A2744]">4.9 / 5</strong>
              <span className="text-xs text-slate-400">Google Rating</span>
            </div>
          </div> */}

          {/* Floating card — experience */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-linear-to-r from-[#3B82C4] to-[#5BA4E0] text-white rounded-full px-6 py-2.5 shadow-lg text-xs font-semibold whitespace-nowrap flex items-center gap-2">
            <span>🏅</span> 20+ Years of Trusted Care
          </div>
        </div>
      </div>
    </div>

    {/* Bottom stat bar */}
    <div className="relative z-10 border-t border-[#D9E9F7] bg-white/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { n: "20+", label: "Years Experience" },
          { n: "5000+", label: "Happy Patients" },
          { n: "15+", label: "Treatments" },
          { n: "9", label: "Specialist Doctors" },
        ].map(({ n, label }) => (
          <div key={label} className="text-center">
            <strong className="block font-serif text-2xl text-[#1A2744]">
              {n}
            </strong>
            <span className="text-xs text-slate-400">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── TRUST BANNER ────────────────────────────────────────────────────────────

const TrustBanner = () => (
  <section className="bg-linear-to-r from-[#3B82C4] to-[#2563A8] text-white">
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h2 className="font-serif text-2xl font-bold">
          You are always in safe hands.
        </h2>
        <p className="text-blue-100 text-sm mt-1">
          We are ready to help, anytime — from routine care to dental
          emergencies.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 shrink-0">
        {[
          "🏥 Modern Equipment",
          "👩‍⚕️ Expert Doctors",
          "💙 Patient-First Care",
        ].map((t) => (
          <span
            key={t}
            className="bg-white/15 border border-white/20 rounded-full px-4 py-2 text-xs font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </section>
);

// ─── WHY CHOOSE US ───────────────────────────────────────────────────────────

const WhyChooseUs = () => (
  <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left text */}
      <div>
        <span className="text-xs font-semibold tracking-[2.5px] uppercase text-[#E07AA0] block mb-3">
          Why Choose Us
        </span>
        <h2 className="font-serif text-4xl font-bold text-[#1A2744] leading-tight mb-5">
          What Makes Sakthi Dental Stand Apart
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-md">
          We bring together experienced specialists, modern technology, and
          genuine compassion under one roof — so every visit feels reassuring,
          not just routine.
        </p>
        <a
          href="/about"
          className="inline-flex items-center gap-2 text-[#3B82C4] text-sm font-semibold hover:gap-3 transition-all"
        >
          Meet our doctors <ArrowRight size={15} />
        </a>
      </div>

      {/* Right — 4 cards in 2x2 */}
      <div className="grid grid-cols-2 gap-4">
        {whyUs.map(({ icon, title, desc }, i) => (
          <div
            key={title}
            className={`rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg group
              ${
                i === 0
                  ? "bg-linear-to-br from-[#3B82C4] to-[#5BA4E0] border-transparent text-white"
                  : "bg-[#F8FAFF] border-slate-200 hover:border-[#3B82C4]"
              }`}
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4
              ${i === 0 ? "bg-white/20" : "bg-[#EBF3FC] group-hover:bg-[#3B82C4] group-hover:text-white transition-colors"}`}
            >
              {icon}
            </div>
            <h3
              className={`font-semibold text-sm mb-1.5 ${i === 0 ? "text-white" : "text-[#1A2744]"}`}
            >
              {title}
            </h3>
            <p
              className={`text-xs leading-relaxed ${i === 0 ? "text-blue-100" : "text-slate-400"}`}
            >
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── TREATMENTS PREVIEW ──────────────────────────────────────────────────────

const TreatmentsPreview = () => (
  <section className="bg-[#F8FAFF] py-10">
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      {/* header */}
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-[2.5px] uppercase text-[#E07AA0] block mb-3">
          Core Treatments
        </span>
        <h2 className="font-serif text-4xl font-bold text-[#1A2744] mb-4">
          Explore Our Services
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
          From preventive care to advanced procedures — comprehensive dental
          solutions for the whole family.
        </p>
      </div>

      {/* 3 col grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {treatments.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-white border flex border-slate-200 rounded-2xl p-6 hover:border-[#3B82C4] hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center gap-4 justify-between mb-5">
              <div className="w-16 h-10 bg-linear-to-br from-[#EBF3FC] to-[#F0EAFC] rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {icon}
              </div>
              <div>
                <h3 className="font-semibold text-[#1A2744] text-sm mb-2 group-hover:text-[#3B82C4] transition-colors">
                  {title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* view all CTA */}
      <div className="text-center">
        <Link to="/treatments">
          <button className="bg-linear-to-r from-[#3B82C4] to-[#5BA4E0] text-white font-semibold px-8 py-3.5 rounded-full shadow-md shadow-blue-200 hover:shadow-lg transition-shadow text-sm flex items-center gap-2 mx-auto">
            View Full List of Treatments <ArrowRight size={15} />
          </button>
        </Link>
      </div>
    </div>
  </section>
);

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
      {/* header */}
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-[2.5px] uppercase text-[#E07AA0] block mb-3">
          Testimonials
        </span>
        <h2 className="font-serif text-4xl font-bold text-[#1A2744]">
          What Our Patients Say
        </h2>
      </div>

      {/* desktop — 3 cards */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {testimonials.map(({ name, avatar, color, role, rating, text }, i) => (
          <div
            key={name}
            className={`rounded-2xl p-7 border transition-all duration-300 relative
              ${
                i === 1
                  ? "bg-linear-to-br from-[#3B82C4] to-[#2563A8] border-transparent text-white shadow-xl shadow-blue-200 scale-105"
                  : "bg-white border-slate-200 hover:border-[#3B82C4] hover:shadow-md"
              }`}
          >
            {/* quote mark */}
            <span
              className={`absolute top-5 right-6 font-serif text-5xl leading-none select-none
              ${i === 1 ? "text-white/20" : "text-slate-100"}`}
            >
              ❝
            </span>

            {/* stars */}
            <div className="flex gap-0.5 mb-4">
              {[...Array(rating)].map((_, si) => (
                <Star
                  key={si}
                  size={13}
                  className={
                    i === 1
                      ? "fill-amber-300 text-amber-300"
                      : "fill-amber-400 text-amber-400"
                  }
                />
              ))}
            </div>

            <p
              className={`text-sm leading-relaxed mb-6 ${i === 1 ? "text-blue-50" : "text-slate-500"}`}
            >
              "{text}"
            </p>

            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full bg-linear-to-br ${color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
              >
                {avatar}
              </div>
              <div>
                <strong
                  className={`block text-sm ${i === 1 ? "text-white" : "text-[#1A2744]"}`}
                >
                  {name}
                </strong>
                <span
                  className={`text-xs ${i === 1 ? "text-blue-200" : "text-slate-400"}`}
                >
                  {role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* mobile — carousel */}
      <div className="md:hidden">
        <div className="bg-white border border-slate-200 rounded-2xl p-7 relative">
          <span className="absolute top-5 right-6 font-serif text-5xl leading-none text-slate-100 select-none">
            ❝
          </span>
          <div className="flex gap-0.5 mb-4">
            {[...Array(testimonials[active].rating)].map((_, i) => (
              <Star
                key={i}
                size={13}
                className="fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <p className="text-sm text-slate-500 leading-relaxed mb-6">
            "{testimonials[active].text}"
          </p>
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full bg-linear-to-br ${testimonials[active].color} flex items-center justify-center text-white font-bold text-sm`}
            >
              {testimonials[active].avatar}
            </div>
            <div>
              <strong className="block text-sm text-[#1A2744]">
                {testimonials[active].name}
              </strong>
              <span className="text-xs text-slate-400">
                {testimonials[active].role}
              </span>
            </div>
          </div>
        </div>
        {/* arrows */}
        <div className="flex justify-center gap-3 mt-5">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:border-[#3B82C4] hover:text-[#3B82C4] transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${i === active ? "bg-[#3B82C4] w-6" : "bg-slate-200"}`}
            />
          ))}
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:border-[#3B82C4] hover:text-[#3B82C4] transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── AMENITIES ───────────────────────────────────────────────────────────────

const Amenities = () => (
  <section className="bg-linear-to-br from-[#1A2744] to-[#2563A8] py-20">
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      {/* header */}
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-[2.5px] uppercase text-blue-300 block mb-3">
          Clinic Facilities
        </span>
        <h2 className="font-serif text-4xl font-bold text-white mb-3">
          Everything for Your Comfort
        </h2>
        <p className="text-blue-200 text-sm max-w-sm mx-auto">
          We've designed every detail of the clinic experience around you.
        </p>
      </div>

      {/* 5 amenity tiles */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {amenities.map(({ icon, label, desc }) => (
          <div
            key={label}
            className="bg-white/10 border border-white/15 flex flex-col items-center justify-center  rounded-2xl p-6 text-center
                       hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="text-3xl items-center  mb-4 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <h4 className="text-white font-semibold text-sm mb-2 leading-tight">
              {label}
            </h4>
            <p className="text-blue-200 text-xs leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── CTA STRIP ───────────────────────────────────────────────────────────────

const CTAStrip = () => (
  <section className="bg-white border-t border-slate-100">
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="text-center md:text-left">
        <span className="text-xs font-semibold tracking-[2.5px] uppercase text-[#E07AA0] block mb-2">
          Book Today
        </span>
        <h2 className="font-serif text-3xl font-bold text-[#1A2744] mb-2">
          Ready for a healthier smile?
        </h2>
        <p className="text-slate-400 text-sm">
          Same-day slots available · 9 AM – 9 PM · Hosur, Tamil Nadu
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 shrink-0">
        <button className="bg-linear-to-r from-[#3B82C4] to-[#5BA4E0] text-white font-semibold px-8 py-3.5 rounded-full shadow-md shadow-blue-200 hover:shadow-lg transition-shadow text-sm flex items-center gap-2 justify-center">
          🗓 Fix an Appointment <ArrowRight size={14} />
        </button>
        <button className="border border-slate-200 text-[#1A2744] font-semibold px-8 py-3.5 rounded-full hover:border-[#3B82C4] transition-colors text-sm">
          📞 +91 98628 90897
        </button>
      </div>
    </div>
  </section>
);

// ─── PAGE ────────────────────────────────────────────────────────────────────

const HomePage = () => (
  <div className="min-h-screen bg-[#F8FAFF] font-sans">
    <Hero />
    <TrustBanner />
    <WhyChooseUs />
    <TreatmentsPreview />
    <Testimonials />
    <Amenities />
    <CTAStrip />
  </div>
);

export default HomePage;
