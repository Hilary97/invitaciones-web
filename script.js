const contactConfig = {
  whatsappNumber: "523313023706",
  whatsappDisplay: "331 302 3706",
  email: "navahilario499@gmail.com",
  defaultMessage: "Hola, quiero cotizar una invitación digital para mi evento.",
};

const demoInvitations = [
  {
    title: "Boda elegante",
    category: "Bodas",
    description: "Diseño romántico con agenda, mapa, galería, música y RSVP.",
    links: [
      {
        label: "Demo 1",
        url: "https://diseno-prototipo-boda.vercel.app/",
      },
      {
        label: "Demo 2",
        url: "https://diseno-prototipo-boda4.vercel.app/",
      },
      {
        label: "Demo 3",
        url: "https://nuevo-diseno-boda.vercel.app/",
      },
      {
        label: "Demo4",
        url: "https://nuestra-boda-chi-nine.vercel.app/",
      },
    ],
    status: "Agregar enlace",
  },
  {
    title: "Quinceañera glam",
    category: "Quinceañeras",
    description:
      "Experiencia visual con cuenta regresiva, dress code y detalles del salón.",
    links: [
      {
        label: "Demo 1",
        url: "https://xv-regina-ashy.vercel.app/",
      },
      {
        label: "Demo 2",
        url: "https://diseno-xv-prototipo2.vercel.app/",
      },
    ],
    status: "Agregar enlace",
  },
];

const body = document.body;
const overlay = document.querySelector("#info-overlay");
const menuToggle = document.querySelector("[data-menu-toggle]");
const closeMenu = document.querySelector("[data-menu-close]");
const openPanelLinks = document.querySelectorAll("[data-open-panel]");
let lastFocusedElement = null;

function openMenu(targetId) {
  lastFocusedElement = document.activeElement;
  body.classList.add("menu-open");
  overlay.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");

  if (targetId) {
    const target = document.querySelector(`#${targetId}`);
    target?.scrollIntoView({ block: "start" });
  }

  closeMenu.focus({ preventScroll: true });
}

function closeOverlay() {
  body.classList.remove("menu-open");
  overlay.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  lastFocusedElement?.focus?.({ preventScroll: true });
}

function renderDemoList() {
  const list = document.querySelector("#demo-list");
  if (!list) return;

  list.innerHTML = demoInvitations
    .map((demo) => {
      const links = (demo.links || []).filter(
        (link) => link.url && link.url !== "#",
      );
      const demoLinks = links.length
        ? links
            .map(
              (link) =>
                `<a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`,
            )
            .join("")
        : `<a href="#demos" aria-disabled="true">${demo.status}</a>`;

      return `
        <article class="demo-card">
          <span class="tag">${demo.category}</span>
          <h3>${demo.title}</h3>
          <p>${demo.description}</p>
          <div class="demo-links">${demoLinks}</div>
        </article>
      `;
    })
    .join("");
}

function setupContactLinks() {
  const encodedMessage = encodeURIComponent(contactConfig.defaultMessage);
  const encodedSubject = encodeURIComponent("Cotización de invitación digital");
  const whatsappUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodedMessage}`;
  const emailUrl = `mailto:${contactConfig.email}?subject=${encodedSubject}&body=${encodedMessage}`;

  document
    .querySelectorAll("#whatsapp-link, #hero-whatsapp")
    .forEach((link) => {
      link.href = whatsappUrl;
    });

  const emailLink = document.querySelector("#email-link");
  if (emailLink) emailLink.href = emailUrl;

  const placeholder = document.querySelector("#contact-placeholder");
  if (placeholder)
    placeholder.textContent = `${contactConfig.whatsappDisplay} · ${contactConfig.email}`;
}

menuToggle.addEventListener("click", () => openMenu());
closeMenu.addEventListener("click", closeOverlay);

openPanelLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const panelMap = {
      services: "servicios",
      demos: "demos",
      process: "valor",
      contact: "contacto",
    };
    openMenu(panelMap[link.dataset.openPanel]);
  });
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) closeOverlay();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && body.classList.contains("menu-open")) {
    closeOverlay();
  }
});

renderDemoList();
setupContactLinks();
