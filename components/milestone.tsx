import Image from "next/image";
import HeaderImage from "@/public/images/Milestone.png";
import StaticImg from "@/.next/static/media/Milestone.376973b6.png";

export default function Milestone() {
  return (
    <section>
      <div className="max-w-3xl mx-auto text-center " id="milestones">
        <h2 className="h2 mb-4 text-blue-400">Milestone</h2>
      </div>
      {/* <h3 className="h3 px-8 text-blue-400">Milestone</h3> */}
      <img src="/images/Milestone.webp" alt="milestone" />

      <div className="mb-12 mx-12">
        <div className="">
          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
            data-aos="fade-right"
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <h3 className="h3 mb-2 text-aqua-400">1990</h3>
              <p className="text-lg text-gray-400">
                Berdiri dengan nama PT Prima Tangguh Artha Finance (PTF).
              </p>
            </div>
            {/* 2nd item */}
            <div
              className="relative flex flex-col"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <h3 className="h3 mb-2 text-aqua-400">1996</h3>
              <p className="text-lg text-gray-400">
                Diambil alih dan dikelola oleh Samator Group.
              </p>
            </div>
            {/* 3rd item */}
            <div
              className="relative flex flex-col"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <h3 className="h3 mb-2 text-aqua-400">2000-sekarang</h3>
              <p className="text-lg text-gray-400">
                PT Satyadhika Bakti Finance mengalami pertumbuhan aset yang
                pesat dan telah banyak membantu perusahaan UMKM
              </p>
            </div>
            {/* 4th item */}
            <div
              className="relative flex flex-col"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <h3 className="h3 mb-2 text-aqua-400">
                <br></br>
              </h3>
              <p className="text-lg text-gray-400">
                di Indonesia melalui layanan pembiayaan terbaik dan
                komprehensif.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto bg-blue-600">
        <div className="relative mx-12 py-10 md:py-16" data-aos="fade-up">
          <h3 className="h3 text-aqua-400">2023</h3>
          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <div
              className="max-w-sm grid gap-8 md:grid-cols-3 lg:grid-cols-3 lg:gap-16 items-start md:max-w-3xl lg:max-w-none"
              data-aos-id-blocks
            >
              {/* 1st item */}
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className="mb-6"
                ></div>

                <p className="text-lg">
                  Berubah nama menjadi PT Satyadhika Bakti Finance (SB Finance).
                </p>
              </div>
              {/* 2nd item */}
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className="mb-6"
                ></div>

                <p className="text-lg">
                  Menduduki peringkat 8 dari 42 Perusahaan Pembiayaan Terbaik di
                  Indonesia (aset 100-500 miliar) versi majalah Infobank Juli
                  2023.
                </p>
              </div>
              {/* 3rd item */}
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className="mb-6"
                ></div>

                <p className="text-lg">
                  Memulai program pembiayaan khusus rumah sakit untuk pembelian
                  alat kesehatan. Program ini bertujuan untuk mempercepat
                  pertumbuhan sektor kesehatan di Indonesia. Salah satu rumah
                  sakit yang telah bekerja sama adalah RS Juwita, Bekasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
