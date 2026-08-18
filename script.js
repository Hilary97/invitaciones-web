const contactConfig = {
  whatsappNumber: "523313023706", // WhatsApp link format: country code + number, without + or spaces.
  whatsappDisplay: "331 302 3706",
  email: "navahilario499@gmail.com", // Replace with the quote email address.
  defaultMessage: "Hola, quiero cotizar una invitación digital para mi evento.",
};

const demoInvitations = [
  {
    title: "Boda elegante",
    category: "Bodas",
    description: "Diseño romántico con agenda, mapa, galería, música y RSVP.",
    url: "",
    status: "Agregar enlace",
    gradient:
      "linear-gradient(135deg, rgba(255,184,107,.72), rgba(232,107,220,.64))",
  },
  {
    title: "Quinceañera glam",
    category: "Quinceañeras",
    description:
      "Experiencia visual con cuenta regresiva, dress code y detalles del salón.",
    url: "#",
    status: "Agregar enlace",
    gradient:
      "linear-gradient(135deg, rgba(232,107,220,.74), rgba(124,224,255,.52))",
  },
  {
    title: "Evento corporativo",
    category: "Corporativo",
    description:
      "Landing profesional para conferencias, cenas, lanzamientos o networking.",
    url: "#",
    status: "Agregar enlace",
    gradient:
      "linear-gradient(135deg, rgba(124,224,255,.64), rgba(255,184,107,.46))",
  },
];

function renderDemoCards() {
  const grid = document.querySelector("#demo-grid");
  if (!grid) return;

  grid.innerHTML = demoInvitations
    .map((demo) => {
      const hasRealUrl = demo.url && demo.url !== "#";
      const linkAttributes = hasRealUrl
        ? `href="${demo.url}" target="_blank" rel="noopener"`
        : 'href="#demos" aria-disabled="true"';

      return `
        <article class="demo-card reveal" style="--card-gradient: ${demo.gradient}">
          <span class="tag">${demo.category}</span>
          <h3>${demo.title}</h3>
          <p>${demo.description}</p>
          <a ${linkAttributes}>${hasRealUrl ? "Abrir demo" : demo.status}</a>
        </article>
      `;
    })
    .join("");
}

function setupContactLinks() {
  const whatsappLink = document.querySelector("#whatsapp-link");
  const emailLink = document.querySelector("#email-link");
  const placeholder = document.querySelector("#contact-placeholder");

  const encodedMessage = encodeURIComponent(contactConfig.defaultMessage);
  const encodedSubject = encodeURIComponent("Cotización de invitación digital");

  if (whatsappLink) {
    whatsappLink.href = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodedMessage}`;
  }

  if (emailLink) {
    emailLink.href = `mailto:${contactConfig.email}?subject=${encodedSubject}&body=${encodedMessage}`;
  }

  if (placeholder) {
    placeholder.textContent = `${contactConfig.whatsappDisplay} · ${contactConfig.email}`;
  }
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  elements.forEach((element) => observer.observe(element));
}

function setCurrentYear() {
  const year = document.querySelector("#current-year");
  if (year) year.textContent = new Date().getFullYear();
}

renderDemoCards();
setupContactLinks();
setCurrentYear();
setupRevealAnimations();
