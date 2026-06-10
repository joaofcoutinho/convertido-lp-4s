export const WHATSAPP_NUMBER = "5527997162623";

/** Monta o link do WhatsApp (wa.me) com uma mensagem opcional pré-preenchida. */
export function waLink(
  message = "Olá! Vim pelo site da Convertido e quero falar com um especialista."
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
