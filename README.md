# Invitaciones Digitales

Landing page estática para promocionar invitaciones digitales para bodas, quinceañeras, cumpleaños, eventos corporativos y celebraciones especiales.

## Cómo verla

Abrí `index.html` directamente en el navegador. No requiere instalación, build step ni dependencias locales.

## Editar colores y estilos

Todos los estilos visuales viven en `styles.css`.

Ahí podés ajustar colores, tokens dorados, fondos, tipografías, layout, estilos del escenario, overlay, botones y responsive.

## Editar WhatsApp, correo y prototipos

La configuración dinámica vive en `script.js`.

Buscá `contactConfig` para editar:

```js
const contactConfig = {
  whatsappNumber: "523313023706",
  whatsappDisplay: "331 302 3706",
  email: "navahilario499@gmail.com",
  defaultMessage: "Hola, quiero cotizar una invitación digital para mi evento.",
};
```

- `whatsappNumber`: usar código de país + número, sin `+`, espacios ni guiones.
- `whatsappDisplay`: número visible para visitantes.
- `email`: correo que recibirá las solicitudes de cotización.
- `defaultMessage`: mensaje inicial para WhatsApp y correo.

Buscá `demoInvitations` en `script.js` para editar los prototipos o demos:

```js
const demoInvitations = [
  {
    title: "Boda elegante",
    category: "Bodas",
    description: "Diseño romántico con agenda, mapa, galería, música y RSVP.",
    url: "",
    status: "Agregar enlace",
  },
];
```

Para publicar una demo real, reemplazá `url: ""` o `url: "#"` por el enlace final. Podés agregar más objetos a la lista para mostrar más prototipos.

## Deploy

El sitio sigue siendo dependency-free y deployable como sitio estático en Vercel.
