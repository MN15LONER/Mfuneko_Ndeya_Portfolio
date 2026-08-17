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
    slug: "bertrand-cafe",
    kicker: "Web Design · Hospitality · Johannesburg",
    name: "Bertrand Café",
    blurb: "A website for Bertrand Café — a French-inspired café, restaurant, and jazz lounge in Maboneng, Johannesburg.",
    description:
      "Bertrand Café sits on Fox Street in Maboneng as part café, part restaurant, part jazz lounge — a Parisian-influenced spot founded by French-Congolese owners who brought Latin Quarter café culture to Joburg. The site needed to carry that same warmth online: morning coffee and croissants on the patio, French-African plates through the day, and evenings of live jazz, karaoke, and wine nights. Built as a clean front door for the venue so visitors can get a feel for the space, the menu, and what's on before they arrive.",
    tags: ["Web Design", "Hospitality", "Johannesburg"],
    thumb: "media/BertrandCafeThumbnail.png",
    gallery: [
      { type: "image", src: "media/BertrandCafeThumbnail.png" }
    ],
    links: [
      { label: "Visit Site", url: "https://bertrandcafe-a5004.web.app/" }
    ],
    specs: [
      { k: "Role", v: "Designer & Developer" },
      { k: "Client", v: "Bertrand Café, Maboneng" },
      { k: "Status", v: "Live" },
      { k: "Location", v: "Johannesburg" }
    ]
  },
  {
    slug: "roomiematch",
    kicker: "Web App · PropTech · South Africa",
    name: "RoomieMatch ZA",
    blurb: "A platform that helps tenants find places and compatible roommates — and helps landlords vet applicants with verified income.",
    description:
      "RoomieMatch ZA is built for the South African rental market: tenants browse listings across major cities, set preferences around lifestyle, budget, and location, then review roommate profiles before deciding who they actually want to live with. On the landlord side, the platform isn't just another listings board — landlords can screen potential tenants with verified income checks, so they spend less time chasing unreliable applications and more time placing people who can actually pay rent. The goal is a clearer match on both sides of the lease.",
    tags: ["Web App", "PropTech", "React"],
    thumb: "media/NewHomeThumbnail.png",
    gallery: [
      { type: "image", src: "media/NewHomeThumbnail.png" }
    ],
    links: [
      { label: "Visit Site", url: "https://newhome-4dc82.web.app/" }
    ],
    specs: [
      { k: "Role", v: "Designer & Developer" },
      { k: "Status", v: "Live" },
      { k: "Focus", v: "Roommate matching & tenant vetting" }
    ]
  },
  {
    slug: "shakers-cocktail-bar",
    kicker: "Web Design · Nightlife · Johannesburg",
    name: "Shakers Cocktail Bar",
    blurb: "A website for Shakers — a cocktail and nightlife venue in Maboneng / Jeppestown, Johannesburg.",
    description:
      "Shakers Cocktail Bar has been a fixture of the Maboneng nightlife scene since 2016 — cocktails, food, music, and late nights on Commissioner Street. The site was designed to match that energy: a clear look at the venue, the vibe, and enough information for first-timers and regulars to know what they're walking into. Focused on atmosphere and discoverability so the bar's online presence keeps pace with what happens on the floor.",
    tags: ["Web Design", "Nightlife", "Johannesburg"],
    thumb: "media/ShakersThumbnail.png",
    gallery: [
      { type: "image", src: "media/ShakersThumbnail.png" }
    ],
    links: [
      { label: "Visit Site", url: "https://shakerscocktailbar-9af2c.web.app/" }
    ],
    specs: [
      { k: "Role", v: "Designer & Developer" },
      { k: "Client", v: "Shakers Cocktail Bar, Maboneng" },
      { k: "Status", v: "Live" },
      { k: "Location", v: "Johannesburg" }
    ]
  },
  {
    slug: "six-cocktail-bar",
    kicker: "Web Design · Nightlife · Johannesburg",
    name: "SIX Cocktail Bar",
    blurb: "A website for SIX — a long-running cocktail bar and restaurant in Melville, Johannesburg.",
    description:
      "SIX Cocktail Bar is one of Melville's best-known cocktail spots — dozens of drinks on the menu, long happy hours, food late into the night, and a regular crowd that treats it as a neighbourhood staple. The website gives the bar a polished digital presence that reflects the venue: cocktails front and centre, enough atmosphere to feel like Melville, and a straightforward path for visitors to learn about the place before they show up on 3rd Avenue.",
    tags: ["Web Design", "Nightlife", "Johannesburg"],
    thumb: "media/SixCocktailBarThumbnail.png",
    gallery: [
      { type: "image", src: "media/SixCocktailBarThumbnail.png" }
    ],
    links: [
      { label: "Visit Site", url: "https://sixcocktailbar-543f9.web.app/" }
    ],
    specs: [
      { k: "Role", v: "Designer & Developer" },
      { k: "Client", v: "SIX Cocktail Bar, Melville" },
      { k: "Status", v: "Live" },
      { k: "Location", v: "Johannesburg" }
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
  },
  {
    slug: "wakimania",
    kicker: "Mobile App · Multiplayer Party Game",
    name: "Wakimania",
    blurb: "A playful multiplayer party game that bundles quick social mini-games, including Heads Up-style charades, into one shared room experience.",
    description:
      "Wakimania is a fun multiplayer party-game app designed to get a group playing together quickly. Players can create or join a room, gather in a shared lobby, and compete across a bundle of fast mini-games — including Heads Up-style charades and trivia rounds. The app keeps everyone in sync with room codes, live player lists, answer selection, countdown timers, and an ongoing leaderboard, turning a phone-based game session into a lively group event.",
    tags: ["Mobile App", "Multiplayer", "Game"],
    thumb: "media/Home_Screen.jpg",
    gallery: [
      { type: "image", src: "media/Home_Screen.jpg" },
      { type: "image", src: "media/Host_Room_Screen.jpg" },
      { type: "image", src: "media/Dashboard_Screen.jpg" },
      { type: "image", src: "media/Level_1_Screen.jpg" }
    ],
    links: [
      { label: "Download App", url: "https://drive.google.com/file/d/1ZiNj5viPV8ZwcV92wHCVo6pQJkemICFk/view?usp=sharing" }
    ],
    specs: [
      { k: "Role", v: "Solo Developer" },
      { k: "Type", v: "Multiplayer party game" },
      { k: "Features", v: "Room codes, lobby, mini-games & live leaderboard" },
      { k: "Platform", v: "Android" }
    ]
  }
];

// Expose for use in index.html and project.html
if (typeof module !== "undefined") module.exports = PROJECTS;
