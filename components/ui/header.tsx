import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import LogoImage from "@/public/images/sbf-logo.png";

export default function Header() {
  return (
    <header className="fixed w-full z-30 bg-white shadow-lg">
      <div className="mx-auto sm:px-6">
        <div className="flex items-center justify-between h-20 mr-4">
          {/* Site branding */}
          <div className="shrink-0">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <img
                src="/images/sbf-logo.webp"
                width={250}
                height={250}
                alt="SB Finance Logo"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow ">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/#features"
                  className="font-medium text-blue-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Layanan Pembiayaan
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="font-medium text-blue-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Tentang Perusahaan
                </Link>
              </li>
              <li>
                <Link
                  href="/report"
                  className="font-medium text-blue-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Laporan Keberlanjutan
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-medium text-blue-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
