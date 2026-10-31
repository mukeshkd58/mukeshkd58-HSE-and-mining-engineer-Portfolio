/* Portfolio script – vanilla JS, no dependencies.
   Project content below was written from each repository's README (inspected 31 Oct 2026).
   Edit this array to update the Projects section. */
(function () {
  "use strict";

  var PROJECTS = [
    {
      title: "HSE Incident Risk Dashboard",
      repo: "https://github.com/mukeshkd58/HSE-Incident-Risk-Dashboard",
      image: "assets/images/projects/incident.jpg",
      imageAlt: "Screenshot of the Streamlit HSE incident analytics dashboard",
      summary: "Streamlit dashboard and machine learning classifier that turn a 103,750-record workplace incident dataset into decision-ready HSE insights.",
      problem: "HSE teams collect incident data but rarely convert it into insights that show where severe incidents cluster and which controls to prioritise.",
      features: [
        "Sidebar filters by year, state, industry, hazard category and risk level",
        "KPI cards, trend analysis and breakdowns by injury type, body part, industry and event type",
        "Transparent rule-based risk scoring (Low to Critical) plus a logistic regression model for a project-defined “critical outcome” label",
        "Prediction form with PPE and preventive control recommendations; filtered data download as CSV"
      ],
      stack: ["Python", "Pandas", "NumPy", "scikit-learn", "Streamlit", "Plotly", "Matplotlib", "Joblib"],
      uses: "Identifying high-risk industries and hazard categories, prioritising machinery guarding, LOTO and fall-prevention controls, and communicating risk to management.",
      status: "Portfolio project. The README states it should not be used as a production safety-critical system, and that the dataset covers severe reported incidents only. It reports a held-out ROC-AUC of 0.923 for the project-defined label."
    },
    {
      title: "HSE Chatbot",
      repo: "https://github.com/mukeshkd58/HSE-Chatbot",
      image: null,
      summary: "AI-powered HSE assistant built with Streamlit and the OpenAI API for safety questions, risk assessments, toolbox talks and incident report drafts.",
      problem: "Field HSE staff spend time drafting routine documents and looking up basic guidance; a structured assistant can speed up first drafts.",
      features: [
        "HSE question-and-answer chatbot with a safety disclaimer",
        "Generators for risk assessment tables, toolbox talks and incident report drafts",
        "PPE recommendation tool",
        "Upload a PDF, DOCX or TXT document and ask questions using simple text extraction and keyword-based context selection"
      ],
      stack: ["Python", "Streamlit", "OpenAI Python SDK", "python-dotenv", "pypdf", "python-docx"],
      uses: "Drafting toolbox talks and risk assessment templates, quick PPE checks, and querying internal HSE policy documents.",
      status: "Portfolio project that needs your own OpenAI API key to run (kept in a .env file, not committed). Generated content is general guidance and must be checked by a competent HSE professional. The repository README notes screenshots are still to be added."
    },
    {
      title: "HSE Leading Indicator Dashboard",
      repo: "https://github.com/mukeshkd58/HSE-Leading-Indicator-Dashboard",
      image: null,
      summary: "Four-page Power BI report with a Python data generator that shifts HSE reporting from lagging indicators to a composite Leading Safety Score.",
      problem: "Reporting built on lagging indicators such as LTIFR and TRIR describes incidents after they happen; leading indicators give earlier warning.",
      features: [
        "Star-schema data model (3 dimension and 4 fact tables) with 25+ DAX measures",
        "Composite Leading Safety Score (0–100) from observation rate, audit closure, training compliance and PTW compliance, with RAG thresholds",
        "Pages: Executive Overview, Observations & Audits, Training Compliance, Severity & PTW",
        "Python script (Faker, NumPy, Pandas) generating about 94,000 synthetic rows across 8 fictional sites"
      ],
      stack: ["Power BI", "DAX", "Power Query (M)", "Python", "Pandas", "NumPy", "Faker"],
      uses: "Tracking audit finding ageing, expired training records, observation quality and permit-to-work compliance across multiple sites.",
      status: "All data is synthetic (the README says no real sites, people or incidents are represented), so the figures in the repository demonstrate the model, not real performance."
    },
    {
      title: "Mining Incident Predictor",
      repo: "https://github.com/mukeshkd58/Mining-Incident-Predictor",
      image: "assets/images/projects/mining.jpg",
      imageAlt: "Screenshot of the Streamlit app showing a lost time injury risk gauge",
      summary: "Streamlit app that estimates whether a reported mining incident will escalate to a Lost Time Injury, explains the prediction with SHAP and suggests ISO 45001-referenced actions.",
      problem: "Incident reviews are usually retrospective; a triage tool at the moment of reporting could help supervisors decide what to do first.",
      features: [
        "XGBoost classifier with a logistic regression baseline, trained with forward-only TimeSeriesSplit validation to avoid temporal leakage",
        "LTI probability gauge with three risk tiers",
        "SHAP waterfall explanation for each prediction",
        "Rule-based recommendation engine ranked by SHAP contribution, each mapped to an ISO 45001 clause"
      ],
      stack: ["Python", "XGBoost", "scikit-learn", "SHAP", "Streamlit", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      uses: "Supervisor decision support after an injury report, identifying new-worker, night-shift and underground-coal risk patterns, and supporting training priorities.",
      status: "Designed for MSHA accident data, which must be downloaded separately. The bundled synthetic fallback data has random labels, so its model scores sit near chance (ROC-AUC about 0.50) by design. The README’s real-data performance ranges are expectations from literature, not results achieved here."
    },
    {
      title: "HSE AI Project: Predictive Safety & Risk Management",
      repo: "https://github.com/mukeshkd58/HSE_AI_Project",
      image: null,
      summary: "End-to-end Gulf-focused concept combining incident risk prediction, NLP on incident reports, a tiered alert engine and a multi-page Streamlit app.",
      problem: "Oil and gas, mining and construction operations in the Gulf face heat stress, H₂S exposure and PTW/LOTO failures; the project explores shifting from reactive reporting to early warning.",
      features: [
        "Logistic regression, Random Forest and XGBoost models with a strict temporal train/test split",
        "NLP module: rule-based root-cause taxonomy, TF-IDF severity classifier and regex entity extraction",
        "Four-level alert engine plus standalone triggers (H₂S, temperature, PPE compliance, fatigue, working hours)",
        "Multi-page Streamlit app and a Power BI dashboard guide"
      ],
      stack: ["Python", "scikit-learn", "XGBoost", "Streamlit", "Plotly", "Pandas", "NumPy", "Matplotlib", "Seaborn", "BeautifulSoup"],
      uses: "Prototype for risk scoring, root-cause classification of incident narratives and alert escalation logic in high-hazard sites.",
      status: "Portfolio concept. Its main dataset is Gulf-calibrated synthetic data (4,320 rows), optionally supplemented by scraped public HSE UK and OSHA data. The README lists an AUC of at least 0.75 as an objective, not a measured result."
    }
  ];

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function list(items, cls) {
    var ul = el("ul", cls);
    items.forEach(function (t) { ul.appendChild(el("li", null, t)); });
    return ul;
  }
  function ghLink(url, label, cls) {
    var a = el("a", cls || "btn small", label);
    a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer";
    return a;
  }

  /* Project cards */
  var grid = document.getElementById("projectGrid");
  var modal = document.getElementById("modal");
  var mBody = document.getElementById("mBody");

  function openModal(p) {
    mBody.textContent = "";
    var h = el("h3", null, p.title); h.id = "mTitle";
    mBody.appendChild(h);
    mBody.appendChild(el("p", "muted", p.summary));
    mBody.appendChild(el("h4", null, "Problem addressed"));
    mBody.appendChild(el("p", null, p.problem));
    mBody.appendChild(el("h4", null, "Implemented features"));
    mBody.appendChild(list(p.features));
    mBody.appendChild(el("h4", null, "Technology stack"));
    mBody.appendChild(list(p.stack, "tags"));
    mBody.appendChild(el("h4", null, "Practical applications"));
    mBody.appendChild(el("p", null, p.uses));
    mBody.appendChild(el("h4", null, "Status and limitations"));
    mBody.appendChild(el("p", "muted", p.status));
    var act = el("div", "proj-actions");
    act.appendChild(ghLink(p.repo, "View on GitHub", "btn primary small"));
    mBody.appendChild(act);
    if (typeof modal.showModal === "function") modal.showModal();
    else window.open(p.repo, "_blank", "noopener");
  }

  if (grid) {
    PROJECTS.forEach(function (p) {
      var card = el("article", "card proj reveal");
      var thumb = el("div", "thumb");
      if (p.image) {
        var img = document.createElement("img");
        img.src = p.image; img.alt = p.imageAlt; img.loading = "lazy";
        img.width = 1100; img.height = 620;
        thumb.appendChild(img);
      } else {
        thumb.textContent = "Screenshot not yet published in the repository";
      }
      var body = el("div", "proj-body");
      body.appendChild(el("h3", null, p.title));
      body.appendChild(el("p", null, p.summary));
      body.appendChild(list(p.stack.slice(0, 5), "tags"));
      body.appendChild(el("p", "status", p.status.split(". ")[0].replace(/\.$/, "") + "."));
      var act = el("div", "proj-actions");
      var more = el("button", "btn small", "Project details");
      more.type = "button";
      more.addEventListener("click", function () { openModal(p); });
      act.appendChild(more);
      act.appendChild(ghLink(p.repo, "View on GitHub"));
      body.appendChild(act);
      card.appendChild(thumb); card.appendChild(body);
      grid.appendChild(card);
    });
  }

  document.getElementById("mClose").addEventListener("click", function () { modal.close(); });
  modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });

  /* Mobile menu */
  var btn = document.getElementById("menuBtn");
  var links = document.getElementById("navLinks");
  function setMenu(open) {
    links.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  }
  btn.addEventListener("click", function () { setMenu(!links.classList.contains("open")); });
  links.addEventListener("click", function (e) { if (e.target.tagName === "A") setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* Contact form: opens the visitor's email client (no backend) */
  document.getElementById("mailForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target;
    var body = f.message.value + "\n\n— " + f.name.value + " (" + f.email.value + ")";
    window.location.href = "mailto:mukeshkumardharani58@gmail.com?subject=" +
      encodeURIComponent("Portfolio enquiry from " + f.name.value) +
      "&body=" + encodeURIComponent(body);
  });

  /* Footer year */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* Active nav link + subtle reveal */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach(function (n) { io.observe(n); });

    var map = {};
    links.querySelectorAll("a").forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          Object.keys(map).forEach(function (k) { map[k].classList.remove("active"); });
          map[en.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) so.observe(s); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (n) { n.classList.add("in"); });
  }
})();
