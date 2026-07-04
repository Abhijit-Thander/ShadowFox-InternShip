import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const sections = [
  {
    id: 1,
    title: "Information We Collect",
    icon: "📋",
    content: (
      <>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          We may collect personal identification information from users in
          several ways, including when users:
        </p>
        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Visit our website",
            "Fill out forms (e.g. contact or appointment requests)",
            "Engage with features, services, or resources on our site",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-slate-500"
            >
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#1B4FBE] shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-slate-500 text-sm leading-relaxed mb-3">
          Types of personal information we may collect include:
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {["Name", "Email address", "Phone number"].map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold bg-[#EBF3FC] text-[#1B4FBE] px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          Users can visit our site anonymously. We only collect personal data
          when it is voluntarily submitted. Refusing to provide certain
          information may limit access to some site features or services.
        </p>

        <p className="text-slate-500 text-sm leading-relaxed mb-3">
          We may also gather non-personal identification information such as:
        </p>
        <ul className="flex flex-col gap-2">
          {[
            "Browser type",
            "Device details",
            "Operating system",
            "Internet service provider",
            "Technical data related to user interaction with the site",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-slate-500"
            >
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#C0161B] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "Cookies",
    icon: "🍪",
    content: (
      <>
        <p className="text-slate-500 text-sm leading-relaxed mb-3">
          Our website may use "cookies" to enhance the user experience. Cookies
          are small files stored on a user's device for record-keeping purposes
          and to track preferences or site activity.
        </p>
        <p className="text-slate-500 text-sm leading-relaxed">
          Users can set their browser to refuse cookies or alert them when
          cookies are being used. Please note that disabling cookies may affect
          some site functionality.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "How We Use Your Information",
    icon: "🔍",
    content: (
      <>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          Collected information may be used for the following purposes:
        </p>
        <div className="flex flex-col gap-3">
          {[
            {
              label: "Operate & manage the website",
              desc: "Ensuring content displays properly and services run smoothly.",
            },
            {
              label: "Improve customer service",
              desc: "Helping us respond to inquiries more efficiently.",
            },
            {
              label: "Enhance the website experience",
              desc: "Feedback provided may help us improve content, usability, and performance.",
            },
            {
              label: "Communicate via email",
              desc: "We may use your email address to respond to inquiries, appointments, or service updates.",
            },
          ].map(({ label, desc }) => (
            <div
              key={label}
              className="flex items-start gap-3 bg-[#F8FAFF] border border-slate-100 rounded-xl px-4 py-3"
            >
              <span className="mt-1 w-2 h-2 rounded-full bg-[#1B4FBE] shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#1A2744]">{label}</p>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "Data Security",
    icon: "🔒",
    content: (
      <p className="text-slate-500 text-sm leading-relaxed">
        We implement appropriate security measures for data collection, storage,
        and processing to safeguard your personal information from unauthorized
        access, alteration, or destruction.
      </p>
    ),
  },
  {
    id: 5,
    title: "Information Sharing",
    icon: "🤝",
    content: (
      <>
        <p className="text-slate-500 text-sm leading-relaxed mb-3">
          We do not sell, trade, or rent personal identification information to
          third parties.
        </p>
        <p className="text-slate-500 text-sm leading-relaxed">
          We may share general demographic data (not linked to any personal
          information) with trusted partners or affiliates to improve service
          delivery and site performance.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Children's Privacy",
    icon: "👶",
    content: (
      <p className="text-slate-500 text-sm leading-relaxed">
        In compliance with the Children's Online Privacy Protection Act (COPPA),
        we do not knowingly collect any personal information from children under
        the age of 13. Our site is not intended to attract users below this age
        group.
      </p>
    ),
  },
  {
    id: 7,
    title: "Changes to This Policy",
    icon: "📝",
    content: (
      <p className="text-slate-500 text-sm leading-relaxed">
        Sakthi Dental Clinic may update this Privacy Policy from time to time.
        We encourage users to review this page periodically to stay informed
        about how we protect your information.
      </p>
    ),
  },
  {
    id: 8,
    title: "Acceptance of Terms",
    icon: "✅",
    content: (
      <>
        <p className="text-slate-500 text-sm leading-relaxed mb-3">
          By using this website, you agree to this policy. If you do not accept
          our Privacy Policy, please do not use our website.
        </p>
        <p className="text-slate-500 text-sm leading-relaxed">
          Continued use of the site following any updates will be deemed as your
          acceptance of the revised policy.
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: "Contact Us",
    icon: "📞",
    content: (
      <>
        <p className="text-slate-500 text-sm leading-relaxed mb-5">
          If you have any questions about this Privacy Policy or your
          interactions with our site, please contact us:
        </p>
        <div className="flex flex-col gap-3">
          {[
            {
              icon: "📍",
              text: "B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India",
            },
            { icon: "📧", text: "info@sakthidentalclinic.in" },
            { icon: "📞", text: "+91 9862890897 / +91 9363298118" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-start gap-3">
              <span className="text-base shrink-0">{icon}</span>
              <span className="text-sm text-[#1A2744] font-medium">{text}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

// ─── HERO ────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="bg-linear-to-br from-[#EBF3FC] via-[#F8FAFF] to-[#FDF0F5] py-16 text-center px-6">
    <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-[#C0161B] mb-3">
      Legal
    </span>
    <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1A2744] leading-tight mb-4">
      Privacy <span className="text-[#1B4FBE]">Policy</span>
    </h1>
    <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed mb-6">
      At Sakthi Dental Clinic, we are committed to protecting your privacy. This
      policy outlines how we collect, use, store, and disclose your information.
    </p>
  </section>
);

// ─── CONTENT ─────────────────────────────────────────────────────────────────

const PolicyContent = () => (
  <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
    <div className="flex flex-col lg:flex-row gap-10">
      {/* ── Main policy content ───────────────────────────── */}
      <div className="flex-1 min-w-0 flex flex-col gap-6">
        {/* Intro box */}
        <div className="bg-[#EBF3FC] border border-[#C5DDF5] rounded-2xl px-6 py-5">
          <p className="text-sm text-[#1A2744] leading-relaxed font-medium">
            At Sakthi Dental Clinic, we are committed to protecting your
            privacy. This Privacy Policy outlines how we collect, use, store,
            and disclose information from visitors and users of our website.
          </p>
        </div>

        {/* Sections */}
        {sections.map(({ id, title, icon, content }) => (
          <div
            key={id}
            id={`section-${id}`}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#C5DDF5] transition-colors duration-200"
          >
            {/* section header */}
            <div className="flex items-center gap-4 px-6 py-5 border-b border-slate-100 bg-[#F8FAFF]">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-lg shrink-0 shadow-sm">
                {icon}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-300 font-mono">
                  {String(id).padStart(2, "0")}
                </span>
                <h2 className="font-semibold text-[#1A2744] text-base">
                  {title}
                </h2>
              </div>
            </div>

            {/* section body */}
            <div className="px-6 py-5">{content}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── BOTTOM STRIP ─────────────────────────────────────────────────────────────

const BottomStrip = () => (
  <section className="bg-[#F8FAFF] border-t border-slate-100 py-10 px-6 text-center">
    <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
      By continuing to use the Sakthi Dental Clinic website, you acknowledge
      that you have read and agree to this Privacy Policy.
    </p>
    <div className="flex flex-wrap gap-3 justify-center mt-5">
      <a
        href="/contact"
        className="bg-linear-to-r from-[#1B4FBE] to-[#5BA4E0] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md shadow-blue-200 hover:shadow-lg transition-shadow"
      >
        Contact Us
      </a>
      <a
        href="/"
        className="bg-white border border-slate-200 text-[#1A2744] text-sm font-semibold px-6 py-2.5 rounded-full hover:border-[#1B4FBE] transition-colors"
      >
        Back to Home
      </a>
    </div>
  </section>
);

// ─── PAGE ────────────────────────────────────────────────────────────────────

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-white font-sans">
    <Hero />
    <PolicyContent />
    <BottomStrip />
  </div>
);

export default PrivacyPolicyPage;
