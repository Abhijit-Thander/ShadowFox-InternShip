import { useState } from "react";
import { ArrowRight, MapPin, Mail, Phone, Clock } from "lucide-react";

// ─── HERO ────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="bg-linear-to-br from-[#EBF3FC] via-[#F8FAFF] to-[#FDF0F5] py-16 text-center px-6">
    <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-[#C0161B] mb-3">
      Get in Touch
    </span>
    <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1A2744] leading-tight mb-4">
      Contact <span className="text-[#1B4FBE]">Us</span>
    </h1>
    <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
      Have questions or want to book an appointment? We'd love to hear from you.
      Our team is ready to help — every day of the week.
    </p>
  </section>
);

// ─── CONTACT INFO CARD ───────────────────────────────────────────────────────

const InfoCard = ({ icon, label, children, accent }) => (
  <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-2xl hover:border-[#3B82C4] hover:shadow-md hover:shadow-blue-50 transition-all duration-200 group">
    <div
      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200
        ${
          accent === "pink"
            ? "bg-[#FDF0F5] group-hover:bg-[#E07AA0]"
            : "bg-[#EBF3FC] group-hover:bg-[#3B82C4]"
        }`}
    >
      <span
        className={`transition-colors duration-200 ${accent === "pink" ? "text-[#E07AA0] group-hover:text-white" : "text-[#3B82C4] group-hover:text-white"}`}
      >
        {icon}
      </span>
    </div>
    <div>
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
        {label}
      </p>
      <div className="text-sm font-medium text-[#1A2744] leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

// ─── CONTACT FORM ────────────────────────────────────────────────────────────

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 h-full bg-white border border-slate-200 rounded-3xl">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-5">
          ✅
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#1A2744] mb-2">
          Message Sent!
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
          Thank you for reaching out. Our team will get back to you within a few
          hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", phone: "", message: "" });
          }}
          className="mt-6 text-[#1B4FBE] text-sm font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10">
      <h2 className="font-serif text-2xl font-bold text-[#1A2744] mb-1">
        We would love to hear from you
      </h2>
      <p className="text-slate-400 text-sm mb-8">
        Fill in the form below and we'll get back to you promptly.
      </p>

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-[#1A2744] mb-1.5 tracking-wide">
            Full Name <span className="text-[#E07AA0]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Priya Sharma"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1A2744] placeholder-slate-300 bg-[#F8FAFF] outline-none transition-all
              ${
                errors.name
                  ? "border-red-400 focus:border-red-400"
                  : "border-slate-200 focus:border-[#3B82C4] focus:ring-2 focus:ring-[#1B4FBE]/10"
              }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-[#1A2744] mb-1.5 tracking-wide">
            Email Address <span className="text-[#E07AA0]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="e.g. priya@gmail.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1A2744] placeholder-slate-300 bg-[#F8FAFF] outline-none transition-all
              ${
                errors.email
                  ? "border-red-400 focus:border-red-400"
                  : "border-slate-200 focus:border-[#1B4FBE] focus:ring-2 focus:ring-[#1B4FBE]/10"
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-[#1A2744] mb-1.5 tracking-wide">
          Phone Number <span className="text-[#E07AA0]">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 98XXX XXXXX"
          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1A2744] placeholder-slate-300 bg-[#F8FAFF] outline-none transition-all
            ${
              errors.phone
                ? "border-red-400 focus:border-red-400"
                : "border-slate-200 focus:border-[#1B4FBE] focus:ring-2 focus:ring-[#1B4FBE]/10"
            }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>
        )}
      </div>

      {/* Message */}
      <div className="mb-7">
        <label className="block text-xs font-semibold text-[#1A2744] mb-1.5 tracking-wide">
          Your Message{" "}
          <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us how we can help you…"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-[#1A2744] placeholder-slate-300 bg-[#F8FAFF] outline-none resize-none focus:border-[#3B82C4] focus:ring-2 focus:ring-[#3B82C4]/10 transition-all"
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full bg-linear-to-r from-[#1B4FBE] to-[#5BA4E0] text-white font-semibold py-3.5 rounded-xl shadow-md shadow-blue-200 hover:shadow-lg transition-shadow text-sm flex items-center justify-center gap-2"
      >
        Submit Message <ArrowRight size={15} />
      </button>

      <p className="text-center text-xs text-slate-400 mt-4">
        We usually respond within a few hours during clinic hours.
      </p>
    </div>
  );
};

// ─── MAP PLACEHOLDER ─────────────────────────────────────────────────────────

const MapPlaceholder = () => (
  <div className="w-full h-48 bg-[#EBF3FC] border border-[#C5DDF5] rounded-2xl flex flex-col items-center justify-center gap-2 mt-6">
    <span className="text-3xl">🗺️</span>
    <p className="text-sm font-medium text-[#3B82C4]">
      Google Maps — Hosur Location
    </p>
    <p className="text-xs text-slate-400">B2/8, SBM Layout, Anthivadi, Hosur</p>
  </div>
);

// ─── MAIN BODY ───────────────────────────────────────────────────────────────

const ContactBody = () => (
  <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      {/* ── Left — Form (wider) ──────────────────────────── */}
      <div className="lg:col-span-3">
        <ContactForm />
      </div>

      {/* ── Right — Info ─────────────────────────────────── */}
      <div className="lg:col-span-2 flex flex-col gap-5">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#1A2744] mb-1">
            Reach Us
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Visit us, call us, or drop us an email — we're always happy to help.
          </p>
        </div>

        {/* Info cards */}
        <InfoCard icon={<MapPin size={18} />} label="Address">
          B2/8, SBM Layout, Anthivadi,
          <br />
          Hosur, Tamil Nadu 635109, India
        </InfoCard>

        <InfoCard icon={<Mail size={18} />} label="Email" accent="pink">
          <a
            href="mailto:info@sakthidentalclinic.in"
            className="hover:text-[#3B82C4] transition-colors"
          >
            info@sakthidentalclinic.in
          </a>
        </InfoCard>

        <InfoCard icon={<Phone size={18} />} label="Phone">
          <a
            href="tel:+919862890897"
            className="hover:text-[#3B82C4] transition-colors block"
          >
            +91 9862890897
          </a>
          <a
            href="tel:+919363298118"
            className="hover:text-[#3B82C4] transition-colors block"
          >
            +91 9363298118
          </a>
        </InfoCard>

        <InfoCard icon={<Clock size={18} />} label="Clinic Hours" accent="pink">
          <span className="font-semibold text-[#1A2744]">
            Sunday to Saturday
          </span>
          <br />
          <span className="text-[#3B82C4] font-semibold">
            9:00 AM – 7:00 PM
          </span>
        </InfoCard>
      </div>
    </div>
  </section>
);

// ─── QUICK LINKS STRIP ───────────────────────────────────────────────────────

const QuickStrip = () => (
  <section className="bg-[#F8FAFF] border-t border-slate-100 py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
      <div>
        <p className="font-semibold text-[#1A2744] text-base">
          Looking for something specific?
        </p>
        <p className="text-slate-400 text-sm mt-0.5">
          Explore our treatments or read common dental FAQs.
        </p>
      </div>
      <div className="flex gap-3 flex-wrap">
        <a
          href="/treatments"
          className="bg-white border border-slate-200 text-[#1A2744] text-sm font-semibold px-5 py-2.5 rounded-full hover:border-[#3B82C4] hover:text-[#3B82C4] transition-colors"
        >
          View Treatments →
        </a>
        <a
          href="/faqs"
          className="bg-white border border-slate-200 text-[#1A2744] text-sm font-semibold px-5 py-2.5 rounded-full hover:border-[#3B82C4] hover:text-[#3B82C4] transition-colors"
        >
          Read FAQs →
        </a>
      </div>
    </div>
  </section>
);

// ─── PAGE ────────────────────────────────────────────────────────────────────

const ContactPage = () => (
  <div className="min-h-screen bg-white font-sans">
    <Hero />
    <ContactBody />
  </div>
);

export default ContactPage;
