import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/sbf-logo-white.png";
import LogoBottom from "@/public/images/footerWhite.png";
import PhoneIcon from "@/public/images/phone.png";
import MailIcon from "@/public/images/mail.png";

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-12 bg-blue-600">
        <div className="sm:mx-6 md:mx-6 lg:mx-6">
          {/* Logo */}
          <Link href="/" aria-label="SB Finance">
            <span className="">
              <img
                src="/images/sbf-logo-white.webp"
                alt="sbf-logo-white"
                className="block"
                width={250}
                height={250}
              />
            </span>
          </Link>
        </div>
        <div className="max-w-6xl mx-8 md:mx-11">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-5 lg:col-span-5">
              <div className="">
                <h4 className="h4 text-aqua-400 font-medium mb-1">
                  PT Satyadhika Bakti Finance
                </h4>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Office Tower The Samator Lantai 9 Unit 8-10 Jalan Raya
                      Kedung Baruk Nomor 26-28, Surabaya
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="hover:text-gray-100 transition duration-150 ease-in-out inline-flex mt-4"
                    >
                      <img
                        src="/images/phone.webp"
                        alt="sbf-phone"
                        className="mr-2"
                        width={25}
                        height={15}
                      />
                      +62 319 900 4251
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="hover:text-gray-100 transition duration-150 ease-in-out  inline-flex"
                    >
                      <img
                        src="/images/mail.webp"
                        alt="sbf-mail"
                        className="mr-2"
                        width={30}
                        height={15}
                      />
                      satyadhika@sbfinance.co.id
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              {/* 2nd block */}
              <div className="text-sm">
                <h4 className="h4 text-aqua-400 font-medium mb-1 ">
                  Peta Situs
                </h4>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/#features"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Layanan Pembiayaan
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/#about"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Tentang Perusahaan
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/report"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Laporan Keberlanjutan
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Kontak
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center justify-between">
          <div className="flex md:order-1 md:ml-64 md:mb-0">
            <img
              src="/images/footerWhite.webp"
              alt="ojk-logo"
              width={250}
              height={250}
              className="mb-12 mx-6 md:mx-6"
            />
          </div>
          {/* Copyrights note */}
          <div className="text-sm mx-8 md:mx-8">
            &copy; 2024 PT Satyadhika Bakti Finance. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
