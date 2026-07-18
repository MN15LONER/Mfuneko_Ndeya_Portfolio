/* ============================================================
   PROJECTS DATA
   To add a new project: copy an object below, give it a unique
   `slug` (used in the URL: project.html?slug=your-slug), and
   fill in the fields. Drop media into /media/ and reference it
   the same way the others do.
   ============================================================ */

const PROJECTS = [
  {
    slug: "fluentedge",
    kicker: "Web App · Online Education",
    name: "FluentEdge",
    blurb: "A teaching website built for an online English teacher to run lessons, manage students, and showcase her tutoring brand.",
    description:
      "FluentEdge is a website I built for my sister, who teaches English online. The goal was a clean, professional front door for her tutoring business — something she can send to prospective students that immediately signals credibility, alongside the practical tools she needs to run lessons day to day.",
    tags: ["Web App", "React", "Design"],
    thumb: "media/FluentEdgeThumbnail.png",
    gallery: [
      { type: "image", src: "media/FluentEdgeThumbnail.png" }
    ],
    links: [
      { label: "Visit Site", url: "https://fluentedge-428b9.web.app/" }
    ],
    specs: [
      { k: "Role", v: "Designer & Developer" },
      { k: "Status", v: "Live" },
      { k: "Stack", v: "React" }
    ]
  },
  {
    slug: "f1-weather-tracker",
    kicker: "Web App · Sports Data",
    name: "F1 Racetrack Weather Tracker",
    blurb: "A website that tracks live weather conditions at F1 racetracks using a weather API.",
    description:
      "Built to answer a simple question F1 fans actually care about on race weekend: what's the weather doing at the track right now? Pulls live conditions from a weather API and presents them per-circuit.",
    tags: ["HTML", "CSS", "JavaScript"],
    thumb: "media/Project_1_Thumbnail.png",
    gallery: [
      { type: "image", src: "media/Project_1_Thumbnail.png" },
      { type: "video", src: "media/Weather_API_Project_1.mp4" }
    ],
    links: [],
    specs: [
      { k: "Role", v: "Solo Developer" },
      { k: "Stack", v: "HTML, CSS, JavaScript, Weather API" }
    ]
  },
  {
    slug: "neighbourguard",
    kicker: "Web App · Community Safety",
    name: "NeighbourGuard",
    blurb: "A webapp that lets residents view and report crime events in their area to improve community response and safety.",
    description:
      "NeighbourGuard gives residents a shared, real-time picture of what's happening in their neighbourhood. Users can log incidents and browse reports from others nearby, turning scattered word-of-mouth safety info into something structured and actionable for the whole community.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    thumb: "media/neighbourguard_thumbnail.png",
    gallery: [
      { type: "image", src: "media/neighbourguard_thumbnail.png" },
      { type: "video", src: "media/Project_2_neighbourguard.mp4" }
    ],
    links: [],
    specs: [
      { k: "Role", v: "Solo Developer" },
      { k: "Stack", v: "HTML, CSS, JavaScript, PHP" }
    ]
  },
  {
    slug: "muni-report-pro",
    kicker: "Mobile App · Civic Tech",
    name: "Muni Report Pro",
    blurb: "A mobile app that lets residents report service delivery issues — potholes, power outages, broken streetlights — in a few taps.",
    description:
      "Built to lower the friction of reporting municipal issues. Instead of navigating a call centre or a clunky web form, residents can flag a pothole, outage, or broken streetlight from their phone in a few taps, making it far more likely the issue actually gets reported.",
    tags: ["Flutter"],
    thumb: "media/Muni_Report_Pro_thumbnail.png",
    gallery: [
      { type: "image", src: "media/Muni_Report_Pro_thumbnail.png" },
      { type: "video", src: "media/Muni_Report_pro.mp4" }
    ],
    links: [
      { label: "Download App", url: "https://drive.google.com/file/d/12pTZPxE1hljyp7KGlFVWgyaDZjbWd6Og/view?usp=sharing" }
    ],
    specs: [
      { k: "Role", v: "Solo Developer" },
      { k: "Stack", v: "Flutter" }
    ]
  },
  {
    slug: "mzansi-react",
    kicker: "Mobile App · Retail",
    name: "Mzansi-react",
    blurb: "An app that consolidates prices from multiple stores so users can find the best deals and specials.",
    description:
      "Mzansi-react pulls pricing from multiple retailers into one place, so users can compare deals and specials on the products they care about without hopping between apps and flyers.",
    tags: ["React Native"],
    thumb: "media/Mzansi-react-app-thumbnail.png",
    gallery: [
      { type: "image", src: "media/Mzansi-react-app-thumbnail.png" },
      { type: "video", src: "media/MzansiReact-App.mp4" }
    ],
    links: [],
    specs: [
      { k: "Role", v: "Solo Developer" },
      { k: "Stack", v: "React Native" }
    ]
  },
  {
    slug: "blanco-website",
    kicker: "Web Design",
    name: "Blanco Website",
    blurb: "A modern web application showcasing clean design and a user-friendly interface.",
    description:
      "A design-focused build centred on clarity — clean layout, restrained palette, and a straightforward interface that puts the client's content first.",
    tags: ["Web Design", "HTML", "CSS"],
    thumb: "media/BlancoThumbnail.png",
    gallery: [
      { type: "image", src: "media/BlancoThumbnail.png" }
    ],
    links: [
      { label: "Visit Website", url: "https://blancowebsite.web.app/" }
    ],
    specs: [
      { k: "Role", v: "Designer & Developer" },
      { k: "Stack", v: "HTML, CSS" }
    ]
  },
  {
    slug: "zigney-and-braai",
    kicker: "Web Design · Food & Culture",
    name: "Zigney and Braai",
    blurb: "An engaging web platform dedicated to bringing people together through food and culture.",
    description:
      "A content-led site built to celebrate food and culture, designed to feel warm and inviting while staying easy to navigate on any device.",
    tags: ["Web Design", "HTML", "CSS"],
    thumb: "media/ZigneyandBraaiThumbnail.png",
    gallery: [
      { type: "image", src: "media/ZigneyandBraaiThumbnail.png" }
    ],
    links: [
      { label: "Visit Website", url: "https://zigneyandbraai.web.app/" }
    ],
    specs: [
      { k: "Role", v: "Designer & Developer" },
      { k: "Stack", v: "HTML, CSS" }
    ]
  },
  {
    slug: "san-bao",
    kicker: "Web App · Restaurant",
    name: "San Bao Chinese Restaurant",
    blurb: "A modern website for a local Chinese restaurant.",
    description:
      "A modern, mobile-friendly site for a local restaurant, built with React and Tailwind to give the business a fast, polished web presence.",
    tags: ["React", "Tailwind CSS"],
    thumb: "media/SanBaoThumbnail.png",
    gallery: [
      { type: "image", src: "media/SanBaoThumbnail.png" }
    ],
    links: [
      { label: "Visit Website", url: "https://china-restaurant-san-bao.web.app/" }
    ],
    specs: [
      { k: "Role", v: "Designer & Developer" },
      { k: "Stack", v: "React, Tailwind CSS" }
    ]
  },
  {
    slug: "autolistings",
    kicker: "Web App · Marketplace",
    name: "AutoListings",
    blurb: "A website for dealers and private sellers to post car listings, connecting buyers and sellers in one marketplace.",
    description:
      "AutoListings gives dealers and private sellers a single place to post car listings, and gives buyers a straightforward way to browse and compare them.",
    tags: ["React", "TypeScript"],
    thumb: "media/AutoMartThumbnail.png",
    gallery: [
      { type: "image", src: "media/AutoMartThumbnail.png" }
    ],
    links: [
      { label: "Visit Website", url: "https://autolistings-b363f.web.app" }
    ],
    specs: [
      { k: "Role", v: "Solo Developer" },
      { k: "Stack", v: "React, TypeScript" }
    ]
  },
  {
    slug: "german-lingo",
    kicker: "Mobile App · Language Learning",
    name: "German Lingo",
    blurb: "An app to learn German with a full A1–C2 video and lesson guide, AI-powered suggestions, and integrated Google Translate.",
    description:
      "German Lingo bundles a structured video playlist and lesson guide spanning A1 to C2 with AI-powered suggestions and integrated Google Translate, aimed at giving self-taught learners a clear path instead of scattered YouTube videos.",
    tags: ["React Native"],
    thumb: "media/GermanLingo-Thumbnail.jpg",
    gallery: [
      { type: "image", src: "media/GermanLingo-Thumbnail.jpg" },
      { type: "video", src: "media/GermanLingoAppreview.mp4" }
    ],
    links: [
      { label: "Download App", url: "https://drive.google.com/file/d/1DTbpu_8dBeUesEp_ymBJD9yPhsuEZROF/view?usp=sharing" }
    ],
    specs: [
      { k: "Role", v: "Solo Developer" },
      { k: "Stack", v: "React Native" }
    ]
  }
];

// Expose for use in index.html and project.html
if (typeof module !== "undefined") module.exports = PROJECTS;
