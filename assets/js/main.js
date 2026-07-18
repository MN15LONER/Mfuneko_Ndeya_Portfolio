/* ============================================================
   Scroll reveal
   ============================================================ */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => io.observe(el));
}

/* ============================================================
   Lightbox (shared by index + project pages)
   ============================================================ */
function openLightbox(src, type) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const video = document.getElementById("lightbox-video");
  if (type === "video") {
    video.src = src;
    video.style.display = "block";
    img.style.display = "none";
    video.play().catch(() => {});
  } else {
    img.src = src;
    img.style.display = "block";
    video.style.display = "none";
  }
  lightbox.classList.add("active");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const video = document.getElementById("lightbox-video");
  lightbox.classList.remove("active");
  video.pause();
  video.currentTime = 0;
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

/* ============================================================
   Render project cards on the homepage
   ============================================================ */
function renderProjectGrid(containerId) {
  const el = document.getElementById(containerId);
  if (!el || typeof PROJECTS === "undefined") return;

  el.innerHTML = PROJECTS.map((p, i) => {
    const hasVideo = p.gallery.some((item) => item.type === "video");
    return `
    <a href="projects/project.html?slug=${p.slug}" class="project-card reveal" style="transition-delay:${(i % 4) * 60}ms">
      <div class="project-thumb">
        <img src="${p.thumb}" alt="${p.name}" loading="lazy" />
        ${hasVideo ? `<span class="video-badge" aria-label="Includes video"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg> Video</span>` : ""}
        <span class="view-tag">View project →</span>
      </div>
      <div class="project-body">
        <div class="project-kicker">${p.kicker}</div>
        <h3 class="project-name">${p.name}</h3>
        <p class="project-blurb">${p.blurb}</p>
        <div class="tag-row">
          ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </a>`;
  }).join("");

  initReveal();
}

/* ============================================================
   Hero terminal typing effect
   ============================================================ */
function initHeroTerminal() {
  const body = document.getElementById("hero-terminal-body");
  if (!body) return;

  const lines = [
    { text: "$ whoami", cls: "prompt" },
    { text: "mfuneko_ndeya — dev & AI agent builder", cls: "" },
    { text: "$ cat current_project.md", cls: "prompt" },
    { text: "Project Me — voice-controlled desktop agent", cls: "" },
    { text: "  Eyes · Ears · Brain · Hands · Memory", cls: "" },
    { text: "$ status", cls: "prompt" },
    { text: "✓ agent pipeline online", cls: "ok" },
  ];

  let lineIndex = 0;
  let charIndex = 0;
  body.innerHTML = "";

  function typeNext() {
    if (lineIndex >= lines.length) {
      const cursor = document.createElement("span");
      cursor.className = "terminal-cursor";
      body.appendChild(cursor);
      return;
    }
    const current = lines[lineIndex];
    if (charIndex === 0) {
      const div = document.createElement("div");
      div.className = "line " + current.cls;
      div.id = `tline-${lineIndex}`;
      body.appendChild(div);
    }
    const div = document.getElementById(`tline-${lineIndex}`);
    if (charIndex <= current.text.length) {
      div.textContent = current.text.slice(0, charIndex);
      charIndex++;
      setTimeout(typeNext, current.text.startsWith("$") ? 35 : 16);
    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(typeNext, 220);
    }
  }
  typeNext();
}

/* ============================================================
   Init
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initReveal();
  initHeroTerminal();
  renderProjectGrid("projects-grid");
});
