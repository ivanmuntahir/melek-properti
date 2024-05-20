import Image from "next/image";

import HeaderImage from "@/public/images/sbf-lobby.jpg";

const imageStyle = {
  borderRadius: "50%",
  border: "1px solid #fff",
};
export default function About() {
  return (
    <section>
      <img src="/images/sbf-lobby.webp" alt="sbf-lobby" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-start md:max-w-3xl lg:max-w-none"
            data-aos-id-blocks
            data-aos="fade-up"
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <h3 className="h3 mb-2 text-blue-400">Tentang Perusahaan</h3>
              <p className="text-xl text-gray-400 mb-4">
                Bergerak di bawah bendera PT Satyadhika Bakti Finance di
                Surabaya, SB Finance telah dipercaya sejak tahun 1990 sebagai
                perusahaan pembiayaan yang konsisten dalam menyediakan layanan
                solusi keuangan terbaik dan inovatif kepada usaha perorangan
                maupun perusahaan besar. SB Finance beroperasi dengan menjunjung
                tinggi visi, misi, dan corporate values perusahaan untuk terus
                berkontribusi terhadap pertumbuhan perekonomian nasional dan
                portfolio pembiayaan di Indonesia.
              </p>
            </div>
            {/* 2nd item */}
            <div
              className="relative flex flex-col mt-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <p className="text-xl text-gray-400 mb-4">
                Anggaran dasar dan perubahannya termuat dalam Akta Pendirian
                Nomor 54 tertanggal 5 Februari 1990, dibuat di hadapan
                Soetjipto, SH., Notaris di Surabaya. Akta telah mendapat
                pengesahan dari Menteri Kehakiman Republik Indonesia berdasarkan
                surat keputusan tertanggal 3 April 1990
                Nomor:C2-1949.HT.01.01.Th.90.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
