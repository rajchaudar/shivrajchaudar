import { FaEye } from "react-icons/fa"
import SectionSeparator from "../Sections/SectionSeparator"

function Footer() {
  // Placeholder – replace later with Firebase / API
  const visitorCount = "--"

  return (
    <footer className="relative py-6 bg-white/20">
        <SectionSeparator />
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Visitor Counter */}
        <div className="
          inline-flex items-center gap-2 mb-4
          px-4 py-2 rounded-full
          bg-white/70 dark:bg-slate-800/70
          backdrop-blur-xl
          border border-white/20 dark:border-white/10
          shadow-sm
          text-gray-700 dark:text-gray-300
        ">
          <FaEye />
          <span>
            Visitors:
            <span className="font-semibold ml-1">{visitorCount}</span>
          </span>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-700 dark:text-gray-300">
          © 2025 <strong>Shivraj Chaudar</strong> — Built with ❤️ &{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Tailwind CSS
          </a>
        </p>

        {/* Footer Links */}
        <div className="mt-4 flex justify-center flex-wrap gap-2 text-sm text-blue-600">
          <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          <Separator />
          <FooterLink href="/pricing">Pricing</FooterLink>
          <Separator />
          <FooterLink href="/terms-and-conditions">Terms & Conditions</FooterLink>
          <Separator />
          <FooterLink href="/refund-policy">Refund Policy</FooterLink>
          <Separator />
          <FooterLink href="/cancellation-policy">Cancellation Policy</FooterLink>
          <Separator />
          <FooterLink href="/disclaimer">Disclaimer</FooterLink>
          <Separator />
          <FooterLink href="/contact">Contact</FooterLink>
          <Separator />
          <FooterLink href="/sitemap.xml">Sitemap</FooterLink>
        </div>
      </div>
    </footer>
  )
}

/* ---------- SMALL COMPONENTS ---------- */
function FooterLink({ href, children }) {
  return (
    <a href={href} className="hover:underline">
      {children}
    </a>
  )
}

function Separator() {
  return <span className="text-gray-400">|</span>
}

export default Footer