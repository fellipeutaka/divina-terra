import { SiWhatsapp } from "react-icons/si";

export function WhatsApp() {
  return (
    <a
      className="fixed bottom-6 right-6 bg-green-600 p-3 rounded-full outline-none shadow-xl transition-all hover:opacity-70 focus-visible:ring-2 focus-visible:ring-green-800"
      href="https://api.whatsapp.com/send/?phone=5511997331837"
      rel="noreferrer noopener"
      target="_blank"
      aria-label="WhatsApp"
    >
      <SiWhatsapp className="fill-white w-6 h-6" />
    </a>
  );
}
