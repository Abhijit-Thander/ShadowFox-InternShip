import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import logo from "../../assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Treatments", href: "/treatments" },
    { label: "Privacy Policy", href: "/privacy" },
  ];

  const treatments = [
    { label: "Teeth Cleaning", href: "/treatments#cleaning" },
    { label: "Dental Implants", href: "/treatments#implants" },
    { label: "Root Canal", href: "/treatments#rct" },
    { label: "Orthodontics", href: "/treatments#braces" },
    { label: "Laser Dentistry", href: "/treatments#laser" },
    { label: "Clear Aligners", href: "/treatments#aligners" },
  ];

  const contactInfo = [
    {
      icon: <MapPin size={16} className="mt-0.5 shrink-0 text-blue-400" />,
      text: "B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India",
    },
    {
      icon: <Mail size={16} className="mt-0.5 shrink-0 text-blue-400" />,
      text: "info@sakthidentalclinic.in",
    },
    {
      icon: <Phone size={16} className="mt-0.5 shrink-0 text-blue-400" />,
      text: "+91 9862890897 / +91 9363298118",
    },
    {
      icon: <Clock size={16} className="mt-0.5 shrink-0 text-blue-400" />,
      text: (
        <>
          <span className="text-white font-medium">Sun – Sat</span>
          <br />
          9:00 AM – 7:00 PM
        </>
      ),
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF size={14} />,
      href: "#",
      label: "Facebook",
    },
    {
      icon: <FaInstagram size={14} />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <FaYoutube size={14} />,
      href: "#",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-[#1A2744] text-white">
      {/* ── Main footer grid ───────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="" className="mb-3 h-10 w-40" />

            {/* Tagline */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-55">
              Premium dental care for women, children & families — with
              compassion and modern technology.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 mt-5">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 border border-white/15
                             flex items-center justify-center text-slate-300
                             hover:bg-[#3B82C4] hover:border-[#3B82C4] hover:text-white
                             transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-400 text-sm hover:text-white
                               hover:translate-x-1 transition-all duration-150
                               inline-flex items-center gap-1.5"
                  >
                    <span className="text-[#3B82C4] text-xs">›</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Treatments */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">
              Treatments
            </h4>
            <ul className="flex flex-col gap-3">
              {treatments.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-400 text-sm hover:text-white
                               hover:translate-x-1 transition-all duration-150
                               inline-flex items-center gap-1.5"
                  >
                    <span className="text-[#E07AA0] text-xs">›</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              {contactInfo.map(({ icon, text }, i) => (
                <li key={i} className="flex items-start gap-3">
                  {icon}
                  <span className="text-slate-400 text-sm leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Divider ───────────────────────────────────────── */}
      <div className="border-t border-white/8 mx-6" />

      {/* ── Bottom bar ────────────────────────────────────── */}
      <div
        className="max-w-6xl mx-auto px-6 py-5 sm:flex-row
                      items-center text-center gap-3"
      >
        <p className="text-slate-500 text-xs text-center">
          © {new Date().getFullYear()} Sakthi Dental Clinic. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
