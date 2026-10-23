const $ = (s) => document.querySelector(s),
  ic = (n) => `<svg class="i"><use href="#${n}"/></svg>`,
  ini = (s) =>
    s
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2);
const H = (id, a, f) => ($("#" + id).innerHTML = a.map(f).join(""));
const ppl = (n, r) =>
  `<div class="av ph !rounded-full !text-lg font-semibold">${ini(n)}</div>`;
H(
  "msgs",
  [
    [
      "Director’s Name",
      "Director",
      "Every child carries a unique spark. Our job is to protect it, challenge it and help it shine. Thank you for trusting Spring Field with your most precious asset.",
    ],
    [
      "Principal’s Name",
      "Principal",
      "Our classrooms are built on warmth and high expectations. I invite you to visit, meet our teachers and see how learning feels at Spring Field.",
    ],
  ],
  (m) =>
    `<article class="card lift flex gap-5 flex-col sm:flex-row">${ppl(m[0])}<div><p class="mut text-[15px]">“${m[2]}”</p><b class="block mt-4">${m[0]}</b><span class="text-sm" style="color:var(--g)">${m[1]}</span></div></article>`,
);
H(
  "levels",
  [
    [
      "Pre-School",
      "Playgroup, Nursery, Prep",
      "Play-based learning that builds language, motor skills and curiosity.",
    ],
    [
      "Primary",
      "Grade 1 to 5",
      "Strong foundations in English, Urdu, Maths, Science and Islamiyat.",
    ],
    [
      "Middle",
      "Grade 6 to 8",
      "Subject teachers, labs and projects that deepen understanding.",
    ],
    [
      "Matric",
      "Grade 9 to 10",
      "Focused board preparation with mock exams and career guidance.",
    ],
  ],
  (l) =>
    `<div class="card lift"><div class="ico">${ic("book")}</div><h3 class="font-semibold text-lg mt-4">${l[0]}</h3><p class="text-sm font-medium" style="color:var(--g)">${l[1]}</p><p class="mut text-sm mt-2">${l[2]}</p></div>`,
);
const cls = [
  "Playgroup",
  "Nursery",
  "Prep",
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => "Grade " + n),
];
$("#classes").innerHTML = cls
  .map(
    (c) =>
      `<span class="px-4 py-2 rounded-full text-sm font-medium" style="background:#fff;border:1px solid var(--line)">${c}</span>`,
  )
  .join("");
$("#gr").innerHTML += cls.map((c) => `<option>${c}</option>`).join("");
H(
  "fac",
  [
    [
      "flask",
      "Science laboratories",
      "Physics, Chemistry and Biology labs with guided practicals.",
    ],
    [
      "pc",
      "Computer labs",
      "Modern systems and digital skills from the primary years.",
    ],
    [
      "book",
      "Library",
      "A calm reading space with English and Urdu collections.",
    ],
    [
      "cup",
      "Sports",
      "Cricket, football, badminton and athletics with trained coaches.",
    ],
    [
      "board",
      "Smart classrooms",
      "Interactive displays that bring lessons to life.",
    ],
    [
      "star",
      "Co-curricular activities",
      "Debating, art, robotics and science clubs.",
    ],
  ],
  (f) =>
    `<div class="card lift"><div class="ico">${ic(f[0])}</div><h3 class="font-semibold text-lg mt-4">${f[1]}</h3><p class="mut text-sm mt-2">${f[2]}</p></div>`,
);
H(
  "gal",
  ["Campus", "Classroom", "Science lab", "Playground"],
  (g) => `<div class="ph aspect-[4/3]">${g}<br>photo</div>`,
);
H(
  "proof",
  ["Registration certificate", "BISE affiliation letter", "Safety and NOC"],
  (p) => `<div class="ph aspect-[3/4] p-2">${ic("doc")}<br>${p}</div>`,
);
H(
  "top",
  [
    ["Student Name", "Grade 10", "1,020 / 1,100", "Board position holder"],
    ["Student Name", "Grade 10", "1,005 / 1,100", "A1 grade"],
    ["Student Name", "Grade 8", "Gold medal", "Science fair winner"],
    ["Student Name", "Grade 5", "1st position", "Inter-school debate"],
  ],
  (s) =>
    `<div class="card lift text-center"><div class="av ph !rounded-full mx-auto !text-lg font-semibold">${ini(s[0])}</div><b class="block mt-4">${s[0]}</b><span class="text-sm mut">${s[1]}</span><div class="font-semibold mt-2" style="color:var(--g)">${s[2]}</div><p class="text-sm mut">${s[3]}</p></div>`,
);
H(
  "team-g",
  [
    ["Vice Principal", "Academics and discipline"],
    ["Academic Coordinator", "Curriculum and exams"],
    ["Head of Pre-School", "Playgroup to Prep"],
    ["Administration Manager", "Operations and admissions"],
  ],
  (t) =>
    `<div class="card lift text-center"><div class="av ph !rounded-full mx-auto !text-lg font-semibold">${ini(t[0])}</div><b class="block mt-4">Full Name</b><span class="text-sm font-medium" style="color:var(--g)">${t[0]}</span><p class="text-sm mut">${t[1]}</p></div>`,
);
H(
  "age",
  [
    ["Playgroup", "2.5 years"],
    ["Nursery", "3.5 years"],
    ["Prep", "4.5 years"],
    ["Grade 1", "5.5 years"],
    ["Grade 6", "10 years"],
    ["Grade 9", "13 years"],
  ],
  (a) => `<tr><td>${a[0]}</td><td>${a[1]}</td></tr>`,
);
H(
  "fee",
  [
    ["Pre-School", "Rs. 10,000", "Rs. 6,500"],
    ["Primary", "Rs. 12,000", "Rs. 7,500"],
    ["Middle", "Rs. 15,000", "Rs. 9,000"],
    ["Matric", "Rs. 18,000", "Rs. 11,000"],
  ],
  (f) => `<tr><td>${f[0]}</td><td>${f[1]}</td><td>${f[2]}</td></tr>`,
);
const sb =
  "w-11 h-11 rounded-full grid place-items-center text-white font-semibold";
$("#soc").innerHTML =
  `<a href="#" aria-label="Facebook" class="${sb}" style="background:var(--g)">f</a><a href="#" aria-label="Instagram" class="${sb}" style="background:var(--g)"><svg class="i !w-[18px] !h-[18px]"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg></a><a href="#" aria-label="YouTube" class="${sb}" style="background:var(--g)"><svg class="i !w-[18px] !h-[18px]"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/></svg></a><a href="https://wa.me/923000000000" target="_blank" rel="noopener" aria-label="WhatsApp" class="${sb}" style="background:#1FAF55">W</a>`;
const b = $("#burger"),
  m = $("#mob");
b.onclick = () => {
  const h = m.classList.toggle("hidden");
  b.setAttribute("aria-expanded", String(!h));
};
m.querySelectorAll("a").forEach(
  (a) => (a.onclick = () => m.classList.add("hidden")),
);
const ids = ["sn", "gr", "gn", "ph", "ad"];
$("#adm").onsubmit = (e) => {
  e.preventDefault();
  const er = $("#err"),
    bad = ids.filter((i) => !$("#" + i).value.trim());
  ids.forEach((i) => $("#" + i).classList.toggle("bad", bad.includes(i)));
  if (bad.length) {
    er.textContent = "Please complete the highlighted fields.";
    er.classList.remove("hidden");
    $("#" + bad[0]).focus();
    return;
  }
  const p = $("#ph").value.replace(/\D/g, "");
  if (p.length < 10 || p.length > 13) {
    $("#ph").classList.add("bad");
    er.textContent = "Enter a valid phone number, for example 0300 1234567.";
    er.classList.remove("hidden");
    return;
  }
  er.classList.add("hidden");
  $("#dt").textContent =
    `Thank you, ${$("#gn").value.trim()}. We received the application for ${$("#sn").value.trim()} (${$("#gr").value}). We will call ${$("#ph").value.trim()} within one working day.`;
  $("#adm").classList.add("hidden");
  $("#done").classList.remove("hidden");
  alert("Thank you! Your application has been submitted successfully.");
  e.target.reset();
};
$("#again").onclick = () => {
  $("#done").classList.add("hidden");
  $("#adm").classList.remove("hidden");
};
$("#yr").textContent = new Date().getFullYear();
