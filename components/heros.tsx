import IconImage from "@/public/images/ojk-logos.png";
import Image from "next/image";

export default function Heros() {
  return (
    <section className="relative mt-16 overflow-hidden bg-herobgs bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-2xl ltr:sm:text-left rtl:sm:text-right">
          <h1
            className="text-3xl mt-8 font-extrabold sm:text-4xl text-blue-400"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Perusahaan Pembiayaan
            <strong className="block font-extrabold text-blue-400">
              {" "}
              Terpercaya Sejak 1990{" "}
            </strong>
          </h1>

          <div className="mt-8 flex flex-wrap gap-4">
            <p
              className="text-base text-gray-700 text-left "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Konsisten bertumbuh dengan komitmen penuh <br></br> menyediakan
              layanan solusi keuangan terbaik <br></br> dan inovatif untuk
              memajukan perekonomian <br></br> Indonesia
            </p>
            <img
              src="/images/ojk-logos.webp"
              width={350}
              height={350}
              alt="hero-sb"
              data-aos="fade-up"
              data-aos-delay="200"
              className="pt-16 sm:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
