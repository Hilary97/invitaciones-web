# Invitaciones Digitales

Landing page estática para promocionar invitaciones digitales para bodas, quinceañeras, cumpleaños, eventos corporativos y celebraciones especiales.

## Cómo verla

Abrí `index.html` directamente en el navegador. No requiere instalación, build step ni dependencias externas.

## Editar WhatsApp y correo

En `script.js`, cambiá estos valores:

```js
const contactConfig = {
  whatsappNumber: "5210000000000",
  email: "cotizaciones@tudominio.com",
  defaultMessage: "Hola, quiero cotizar una invitación digital para mi evento."
};
```

- `whatsappNumber`: usar código de país + número, sin `+`, espacios ni guiones.
- `email`: correo que recibirá las solicitudes de cotización.
- `defaultMessage`: mensaje inicial para WhatsApp y correo.

## Editar prototipos o demos

Los cards de demos salen de la lista `demoInvitations` en `script.js`:

```js
const demoInvitations = [
  {
    title: "Boda elegante",
    category: "Bodas",
    description: "Diseño romántico con agenda, mapa, galería, música y RSVP.",
    url: "#",
    status: "Agregar enlace",
    gradient: "linear-gradient(135deg, rgba(255,184,107,.72), rgba(232,107,220,.64))"
  }
];
```

Para publicar una demo real, reemplazá `url: "#"` por el enlace final. Podés agregar más objetos a la lista para mostrar más prototipos.
