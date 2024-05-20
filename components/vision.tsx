import Image from "next/image";

import VisiImage from "@/public/images/visi.jpeg";

export default function Vision() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Items */}
          <div className="grid">
            {/* Visi */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src="/images/visi.webp"
                  alt="sbf-building"
                  width={540}
                  height={405}
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3 text-blue-400">Visi Perusahaan</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Menjadi perusahaan pembiayaan terkemuka dan terpercaya di
                    Indonesia yang mampu menyediakan solusi keuangan yang
                    inovatif untuk memberdayakan baik usaha perorangan maupun
                    usaha besar dalam mencapai tujuan dan pertumbuhan usaha yang
                    berkelanjutan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto ">
        <h3 className="h3 mb-2 text-blue-400 mx-4">Misi Perusahaan</h3>
        <div className="py-6">
          {/* Items */}
          <div
            className="px-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
            data-aos="fade-up"
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <ul className="list-decimal">
                <li className="text-gray-400 text-xl">
                  {" "}
                  Mengutamakan pelayanan kepada nasabah dengan cara memberikan
                  solusi keuangan yang terbaik, meningkatkan kesejahteraan
                  nasabah, dan memungkinkan mereka merebut peluang-peluang yang
                  ada.{" "}
                </li>
                <li className="text-gray-400 text-xl">
                  {" "}
                  Berkomitmen memberikan pelayanan terbaik untuk kepuasan
                  pelanggan, selalu membangun dan menjaga hubungan baik dalam
                  jangka panjang atas dasar kepercayaan dan keterbukaan, serta
                  memberikan layanan keuangan yang mudah, cepat, dan efisien
                  melebihi harapan nasabah.{" "}
                </li>
                <li className="text-gray-400 text-xl">
                  {" "}
                  Mampu beradaptasi dengan perubahan teknologi dan perkembangan
                  pasar yang dinamis, terus melakukan pengembangan produk dan
                  pelayanan sehingga mampu memberikan solusi yang terbaik kepada
                  nasabah.{" "}
                </li>
                <li className="text-gray-400 text-xl">
                  {" "}
                  Menjadi lembaga pembiayaan yang menjunjung tinggi etika dan
                  integritas serta selalu mengedepankan praktek pembiayaan yang
                  bertanggung jawab dan bertujuan untuk memberikan kontribusi
                  terhadap pembangunan berkelanjutan.{" "}
                </li>
              </ul>
            </div>
            {/* 2nd item */}
            <div
              className="relative flex flex-col"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <ol className="list-decimal" start={5}>
                <li className="text-gray-400 text-xl">
                  {" "}
                  Memberikan kepada karyawan suasana dan lingkungan kerja yang
                  nyaman, memberikan kesempatan untuk berkembang menjadi semakin
                  profesional, mendorong untuk lebih inovatif dan bekerja sama
                  untuk meraih kesuksesan bersama.{" "}
                </li>
                <li className="text-gray-400 text-xl">
                  {" "}
                  Aktif bekerjasama dengan para rekanan strategis dalam
                  menciptakan sinergi dan menawarkan solusi keuangan yang
                  komprehensif.{" "}
                </li>
                <li className="text-gray-400 text-xl">
                  {" "}
                  Berdedikasi untuk menciptakan nilai-nilai jangka panjang bagi
                  para pemegang saham, para pegawai, para nasabah, dan bagi
                  komunitas perusahaan pembiayaan.{" "}
                </li>
                <li className="text-gray-400 text-xl">
                  {" "}
                  Berusaha untuk menerapkan kinerja keuangan berkelanjutan yang
                  mampu memberikan keuntungan yang layak atas investasi yang
                  telah ditanamkan oleh para pemegang saham, sekaligus bisa
                  berdampak positif bagi masyarakat.{" "}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
