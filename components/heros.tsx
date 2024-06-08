import IconImage from "@/public/images/ojk-logos.png";
import Image from "next/image";

export default function Heros() {
  return (
    <section className="relative overflow-hidden bg-white/75 bg-trs bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="mt-16 max-w-2xl ltr:sm:text-left rtl:sm:text-right">
          <h1
            className="text-3xl mt-8 font-extrabold sm:text-4xl text-yellow-400"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ingin mencari properti
            <strong className="block font-extrabold "> impian anda?</strong>
          </h1>
          <h2
            className="text-xl mt-8 font-extrabold sm:text-2xl text-yellow-400"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Melek Properti solusinya!
          </h2>

          <div className="flex flex-wrap gap-4">
            <p
              className="text-base text-white text-left text-yellow-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Melek Properti menawarkan layanan profesional untuk membantu{" "}
              <br></br>Anda menemukan properti impian anda, termasuk apartemen,
              <br></br>rumah, tanah, dan lain-lain. Dengan tim ahli yang
              berpengalaman, <br></br>kami memastikan Anda mendapatkan pilihan
              terbaik sesuai dengan <br></br> kebutuhan dan anggaran Anda,
              sehingga proses pencarian properti <br></br>menjadi lebih mudah
              dan efisien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
