// To add a project, add one object to this list. Order here = order on the page.
const IMG = "imgs/";
const projects = [
  {
    id: "lexicon-tower", cat: "Games", title: "The Lexicon Tower", logo: "TheLexiconTowerLogo.png",
    summary: "A 2D escape room game that teaches English to children.",
    meta: "Made with a friend, in collaboration with Porto Editora",
    desc: ["You escape the Lexicon Tower by solving riddles about grammar and vocabulary."],
    tech: ["Godot"],
    links: [["Play on itch.io", "https://cube512.itch.io/the-lexicon-tower"]],
    shots: [
      ["TheLexiconTower1.png", "Main menu screen of the game"],
      ["TheLexiconTower2.png", "A tutorial puzzle: type the word written on the wall"],
      ["TheLexiconTower3.png", "Level complete screen"],
      ["TheLexiconTower4.png", "A crossword puzzle"],
      ["TheLexiconTower5.png", "Dialogue screen"]
    ]
  },
  {
    id: "conexao-vj", cat: "Apps", title: "Conexão VJ", logo: "ConexaoVJlogo.png",
    summary: "An app that helps teachers and parents keep in touch and follow student progress.",
    meta: "Course project, with the Visconde Juromenha school",
    desc: ["Conexão VJ makes communication between teachers and parents easier. It has a shared calendar and a chat between teachers and parents."],
    tech: ["Flutter", "Dart", "Firebase"],
    links: [],
    shots: [
      ["ConexaoVJ1.png", "Login and register screen"],
      ["ConexaoVJ2.png", "Register screen"],
      ["ConexaoVJ3.png", "Home page with a calendar and a list of the other screens"],
      ["ConexaoVJ4.png", "Chat screen to message the teacher or the parents"]
    ]
  },
  {
    id: "deep-within", cat: "Games", title: "The Deep Within", logo: "TheDeepWithinlogo.png",
    summary: "A short 2D horror game set underwater.",
    meta: "ScreamJam 2025, made with a friend in 1 week",
    desc: ["You wake up underwater and have to scan every rock and plant to find a way out. Something might be lurking in the shadows."],
    tech: ["Godot"],
    links: [["Play on itch.io", "https://cube512.itch.io/the-deep-within"]],
    shots: [
      ["TheDeepWithin1.png", "Main menu screen"],
      ["TheDeepWithin2.png", "Gameplay screen"],
      ["TheDeepWithin3.png", "End of the game"]
    ]
  },
  {
    id: "hurricane-frenzy", cat: "Games", title: "Hurricane Frenzy", logo: "HurricaneFrenzyLogo.png",
    summary: "A side-scroller where you play a hurricane tearing through a city.",
    meta: "Very Serious Juniper Dev Game Jam, under 1 week",
    desc: ["Destroy as many buildings as you can before time runs out. Then spend your score on upgrades for the next run."],
    tech: ["Godot"],
    links: [["Play on itch.io", "https://cube512.itch.io/hurricanefrenzy"]],
    shots: [
      ["HurricaneFrenzy1.png", "Main menu screen"],
      ["HurricaneFrenzy2.png", "Gameplay screen"],
      ["HurricaneFrenzy3.png", "Game over screen"]
    ]
  },
  {
    id: "little-apocalypse", cat: "Games", title: "Our little apocalypse &lt;3", logo: "OurLittleApocalypseLogo.png",
    summary: "A Peggle-like narrative game about love and the end of the universe.",
    meta: "GMTK Game Jam, 4 days. My role: artist",
    desc: ["You play a character in love with a monster destined to end the universe. The story is about love, and about a relationship that can't outlast the ending."],
    tech: ["Photoshop"],
    links: [["Play on itch.io", "https://allseriousstudios.itch.io/our-little-apocalypse"]],
    shots: [
      ["OurLittleApocalypse1.png", "Main menu screen"],
      ["OurLittleApocalypse2.png", "Dialogue screen"],
      ["OurLittleApocalypse3.png", "Gameplay screen"]
    ]
  },
  {
    id: "bdrp", cat: "Websites", title: "BDRP", logo: "BDRPLogo.png",
    summary: "A clothing store website with search, product pages and a cart.",
    meta: "Course project",
    desc: ["A search bar backed by a product database, product pages, and a cart where you can add items and check out.", "Built with HTML, CSS and JavaScript, with React for the interactive parts."],
    tech: ["HTML", "CSS", "JavaScript", "React"],
    links: [],
    shots: [
      ["BDRP1.png", "Landing page"],
      ["BDRP2.png", "Top sellers section"],
      ["BDRP3.png", "Search results page"],
      ["BDRP4.png", "Product detail page"],
      ["BDRP5.png", "Cart page"]
    ]
  },
  {
    id: "portfolio", cat: "Websites", title: "Portfolio website", logo: "Portfoliologo.png",
    summary: "The site you're on, hosted on GitHub Pages.",
    meta: "Personal project",
    desc: ["Where I show my projects and skills. It's plain HTML, CSS and JavaScript, with no framework."],
    tech: ["HTML", "CSS", "JavaScript"],
    links: [],
    shots: [
      ["Portfolio1.png", "Landing page of the website"],
      ["Portfolio2.png", "About me page of the website"]
    ]
  }
];

const $ = s => document.querySelector(s);
const dlg = $("#dlg");
let cur, i = 0;

const cats = ["All", ...new Set(projects.map(p => p.cat))];
$("#filters").innerHTML = cats.map((c, n) => `<button data-c="${c}" aria-pressed="${n === 0}">${c}</button>`).join("");

function render(cat) {
  $("#grid").innerHTML = projects.filter(p => cat === "All" || p.cat === cat).map(p => `
    <article class="card">
      <div class="cover"><img src="${IMG + p.logo}" alt="" loading="lazy"></div>
      <div class="body">
        <h3><button class="open" data-id="${p.id}">${p.title}</button></h3>
        <p>${p.summary}</p>
        <small>${p.tech.join(", ")}</small>
      </div>
    </article>`).join("");
}

function showShot() {
  const [file, alt] = cur.shots[i];
  $("#d-img").src = IMG + file;
  $("#d-img").alt = alt;
  $("#d-cap").textContent = alt;
  $("#d-n").textContent = `${i + 1} of ${cur.shots.length}`;
}

function step(d) {
  i = (i + d + cur.shots.length) % cur.shots.length;
  showShot();
}

function openProject(id) {
  cur = projects.find(p => p.id === id);
  i = 0;
  $("#d-text").innerHTML = `
    <h2 id="d-title">${cur.title}</h2>
    <p class="meta">${cur.meta}</p>
    ${cur.desc.map(t => `<p>${t}</p>`).join("")}
    <h3>Technologies</h3>
    <ul>${cur.tech.map(t => `<li>${t}</li>`).join("")}</ul>
    ${cur.links.map(([label, url]) => `<a class="btn primary" href="${url}" target="_blank" rel="noopener">${label}</a>`).join(" ")}`;
  showShot();
  dlg.showModal();
}

$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
  render(b.dataset.c);
});
$("#grid").addEventListener("click", e => {
  const b = e.target.closest(".open");
  if (b) openProject(b.dataset.id);
});
$("#d-prev").addEventListener("click", () => step(-1));
$("#d-next").addEventListener("click", () => step(1));
$("#d-close").addEventListener("click", () => dlg.close());
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

render("All");
