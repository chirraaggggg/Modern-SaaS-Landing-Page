import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 px-4">
          <div className="flex-shrink-0">
            <Image src={logoImage} alt="Layers logo" className="h-8 w-auto" />
          </div>
          <div className="flex-shrink-0">
            <nav className="flex gap-4 sm:gap-6 flex-wrap justify-center">
              {footerLinks.map((link) => (
                <a
                  href={link.href}
                  className="text-white/50 text-xs sm:text-sm hover:text-white/70 transition-colors"
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
