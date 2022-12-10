import Image from "next/image";
import { SiInstagram, SiWhatsapp, SiIfood } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const year = new Date().getFullYear();

const links = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/divinaterraatibaia",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/divinaterraatibaia/",
    icon: SiInstagram,
  },
  {
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=5511997331837",
    icon: SiWhatsapp,
  },
  {
    name: "iFood",
    href: "https://www.ifood.com.br/delivery/atibaia-sp/divina-terra-atibaia-jardim-paulista/eeb0b2d5-1414-4139-b4e5-a0788a3e97a8",
    icon: SiIfood,
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-white flex flex-col justify-center items-center mt-16 p-8 gap-6">
      <Image src="/logo.svg" width={282} height={54} alt="Divina Terra logo" />
      <div className="flex flex-col gap-6 mt-4">
        <ul className="flex justify-center items-center gap-4">
          {links.map((link) => (
            <li
              className="border border-white flex justify-center items-center rounded-full transition-all hover:border-primary hover:bg-primary focus-within:border-primary focus-within:bg-primary"
              key={link.name}
            >
              <a
                className="p-3 outline-none"
                href={link.href}
                rel="noreferrer noopener"
                target="_blank"
                aria-label={link.name}
              >
                <link.icon />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center">
          Copyright © {year} - Todos os direitos reservados - Divina Terra
          Atibaia
        </p>
      </div>
    </footer>
  );
}
