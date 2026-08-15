// Todas as informações da festa ficam centralizadas aqui.
// Alterar horário, endereço, telefone ou textos deve exigir editar apenas este arquivo.

export const eventConfig = {
  children: {
    sofia: {
      name: "Sofia",
      age: 9,
      clothingSize: "12 anos",
      shoeSize: "30",
      theme: "rosa" as const,
    },
    samuel: {
      name: "Samuel",
      age: 2,
      clothingSize: "2 a 3 anos",
      shoeSize: "21",
      theme: "azul" as const,
    },
  },

  event: {
    date: "2026-09-12",
    day: "12",
    month: "SETEMBRO",
    year: "2026",
    time: "16h",
    locationName: "Sítio Ypê",
    mapsUrl: "https://maps.app.goo.gl/DCGw9FGgcdzm4W457",
  },

  rsvp: {
    phone: "5531996224002",
    whatsappBaseUrl: "https://wa.me/5531996224002",
    message:
      "Olá! Confirmo minha presença no aniversário da Sofia e do Samuel. 🎉",
  },

  seo: {
    title: "Sofia & Samuel | Nosso aniversário",
    description:
      "Você é nosso convidado para celebrar os 9 anos da Sofia e os 2 anos do Samuel.",
    ogImage: "/og-convite.webp",
  },
};

export type EventConfig = typeof eventConfig;

/** Monta a URL do WhatsApp com a mensagem já codificada. */
export function buildWhatsAppUrl(): string {
  const encodedMessage = encodeURIComponent(eventConfig.rsvp.message);
  return `${eventConfig.rsvp.whatsappBaseUrl}?text=${encodedMessage}`;
}
