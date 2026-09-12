/* =========================================================
   NURJIHARA'S MAKEOVER — EASY EDIT FILE
   ---------------------------------------------------------
   সাধারণ পরিবর্তনের জন্য শুধু এই ফাইলটাই Edit করুন।
   index.html সাধারণত Edit করার দরকার নেই।

   Save → Commit changes → Netlify নিজে থেকে নতুন version deploy করবে।
   ========================================================= */

const SITE = {
  // ====== 1) BASIC INFORMATION ======
  brandName: "NURJIHARA'S MAKEOVER",
  email: "nurjharaaakter@gmail.com",
  messenger: "https://m.me/growlanceragency",
  facebook: "", // Facebook page URL দিন। না থাকলে ফাঁকা রাখুন।

  // ====== 2) HERO / MAIN TEXT ======
  heroEyebrow: "Beauty • Bridal • Elegance",
  heroTitle: "Made to feel beautiful.",
  heroText: "Refined makeup and styling for the moments you want to remember.",

  // ====== 3) SERVICES ======
  services: [
    {
      name: "Bridal Makeup",
      label: "01 / SIGNATURE",
      description: "Timeless bridal beauty with a refined, camera-ready finish."
    },
    {
      name: "Party Makeup",
      label: "02 / GLAM",
      description: "Elegant, polished glamour made for celebrations and evenings."
    },
    {
      name: "Engagement Makeup",
      label: "03 / ROMANCE",
      description: "Soft, luminous beauty for a moment worth remembering."
    },
    {
      name: "Hair & Styling",
      label: "04 / FINISHING",
      description: "Polished hair and styling that completes your full look."
    },
    {
      name: "Customized Makeup",
      label: "05 / BESPOKE",
      description: "A personalized look created around your taste and occasion."
    }
  ],

  // ====== 4) PORTFOLIO / GALLERY TEXT ======
  portfolio: [
    { label: "01 / BRIDAL", title: "Bridal Glow", caption: "Timeless • Luminous • Refined" },
    { label: "02 / PARTY", title: "Soft Glam", caption: "Elegant • Modern • Polished" },
    { label: "03 / ENGAGEMENT", title: "Golden Hour", caption: "Soft • Romantic • Radiant" },
    { label: "04 / STYLING", title: "Classic", caption: "Clean • Sophisticated • Chic" },
    { label: "05 / BESPOKE", title: "Signature", caption: "Personal • Distinct • Beautiful" },
    { label: "06 / BRIDAL", title: "Timeless", caption: "Graceful • Soft • Enduring" }
  ],

  // ====== 5) PACKAGES ======
  packages: [
    {
      kicker: "The Essential",
      name: "Basic",
      description: "Clean, polished makeup for a naturally elevated look."
    },
    {
      kicker: "The Signature",
      name: "Premium",
      description: "Elevated makeup and styling for your standout occasion."
    },
    {
      kicker: "The Complete",
      name: "Advanced",
      description: "A complete premium beauty experience, customized to you."
    }
  ],

  // ====== 6) CUSTOMER COUNT ======
  customerCount: 350,

  // ====== 7) BOOKING SECTION ======
  bookingEyebrow: "Private appointments",
  bookingTitle: "Let’s create your look.",
  bookingText: "Choose your service, date and preferred time. Send your request in under a minute — simple, clear and effortless.",

  // ====== 8) FOOTER ======
  developerName: "Growlancer Agency",
  developerLink: "https://m.me/growlanceragency"
};


/* =========================================================
   নিচের অংশে সাধারণত কিছু পরিবর্তন করার দরকার নেই।
   ========================================================= */
(function applySiteConfig() {
  const q = (selector, root = document) => root.querySelector(selector);
  const qa = (selector, root = document) => [...root.querySelectorAll(selector)];
  const setText = (el, text) => { if (el && text != null) el.textContent = text; };

  // Brand / email / social
  qa(".brand, .footer-brand strong").forEach(el => setText(el, SITE.brandName));
  qa(".email-link").forEach(el => {
    if (SITE.email) el.href = "mailto:" + SITE.email;
  });

  const messenger = q(".messenger-link");
  if (messenger && SITE.messenger) {
    messenger.href = SITE.messenger;
    messenger.classList.remove("is-hidden");
  }

  const facebook = q(".facebook-link");
  if (facebook && SITE.facebook) {
    facebook.href = SITE.facebook;
    facebook.classList.remove("is-hidden");
  }

  // Hero
  setText(q("#home .eyebrow"), SITE.heroEyebrow);
  setText(q("#home h1"), SITE.heroTitle);
  setText(q("#home .hero-text"), SITE.heroText);

  // Services
  const serviceCards = qa(".service-card-xl");
  SITE.services.forEach((item, i) => {
    const card = serviceCards[i];
    if (!card) return;
    setText(q("span", card), item.label);
    setText(q("h3", card), item.name);
    setText(q("p", card), item.description);
  });

  // Portfolio
  const workCards = qa(".work-card");
  SITE.portfolio.forEach((item, i) => {
    const card = workCards[i];
    if (!card) return;
    setText(q("span", card), item.label);
    setText(q("strong", card), item.title);
    setText(q("small", card), item.caption);
  });

  // Packages
  const packageCards = qa("#packageSlider .package-card");
  SITE.packages.forEach((item, i) => {
    const card = packageCards[i];
    if (!card) return;
    setText(q(".package-kicker", card), item.kicker);
    setText(q("h3", card), item.name);
    const ps = qa("p", card);
    const desc = ps.find(p => !p.classList.contains("package-kicker"));
    setText(desc, item.description);
  });

  // Booking
  setText(q("#booking .eyebrow"), SITE.bookingEyebrow);
  setText(q("#booking h2"), SITE.bookingTitle);
  setText(q("#booking .booking-lead"), SITE.bookingText);

  // Customer count
  const counter = q("[data-counter]");
  if (counter) {
    counter.dataset.counter = String(SITE.customerCount);
    if (!counter.textContent.trim() || counter.textContent.trim() === "0") {
      counter.textContent = "0";
    }
  }

  // Booking service dropdown — automatically follows the editable lists above.
  const select = q("#bookingService");
  if (select) {
    const current = select.value;
    select.innerHTML = '<option value="">Choose a service</option>';
    SITE.services.forEach(item => {
      const opt = document.createElement("option");
      opt.value = item.name;
      opt.textContent = item.name;
      select.appendChild(opt);
    });
    SITE.packages.forEach(item => {
      const opt = document.createElement("option");
      opt.value = item.name + " Package";
      opt.textContent = item.name + " Package";
      select.appendChild(opt);
    });
    if (current) select.value = current;
  }

  // Footer developer credit
  const dev = qa(".footer-credit a");
  dev.forEach(el => {
    setText(el, SITE.developerName + " ↗");
    if (SITE.developerLink) el.href = SITE.developerLink;
  });

  // Keep the booking mail address in the existing form script in sync.
  // The original form falls back to this address when no endpoint is set.
  document.documentElement.dataset.bookingEmail = SITE.email;
})();
