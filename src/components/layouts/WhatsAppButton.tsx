import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../data/site";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Mutanu, I would like to enquire about your freight and logistics services.",
  );

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Mutanu on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
