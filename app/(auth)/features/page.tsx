import Image from "next/image";
import ImageService1 from "@/public/images/layanan-1 -cropped.jpg";
import ImageService2 from "@/public/images/layanan-2-cropped.jpg";
import ImageService3 from "@/public/images/layanan-3-newcrop.jpg";

export const metadata = {
  title: "Features - Satyadhika Bakti Finance",
  description:
    "Satyadhika Bakti Finance memiliki beragam layanan pembiayaan yang dapat membantu keuangan anda",
};

const imageStyle = {
  borderRadius: "50%",
  border: "1px solid #fff",
};
export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 mt-4">Laporan Keberlanjutan</h2>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
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
              >
                <Image
                  alt="Mountains"
                  // Importing an image will
                  // automatically set the width and height
                  src={ImageService1}
                  sizes="100vw"
                  // Make the image display full width
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>

              <h4 className="h4 mb-2">Pembiayaan Investasi</h4>
              <p className="text-lg text-gray-400">
                Pembiayaan untuk pengadaan barang modal dan atau jasa untuk
                keperluan aktivitas usaha investasi (usaha produktif): Sewa
                pembiayaan (finance lease), jual dan sewa balik (sale and
                leaseback), pembelian dengan pembayaran secara angsuran, dan
                pembiayaan alat kesehatan untuk rumah sakit.
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
              >
                <Image
                  alt="Mountains"
                  // Importing an image will
                  // automatically set the width and height
                  src={ImageService2}
                  sizes="100vw"
                  // Make the image display full width
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>

              <h4 className="h4 mb-2">Pembiayaan Modal</h4>
              <p className="text-lg text-gray-400">
                Pembiayaan untuk memenuhi kebutuhan modal kerja atau pengeluaran
                yang habis dalam satu siklus usaha (usaha produktif): Jual dan
                sewa balik (sale and leaseback) serta anjak piutang (factoring
                with recourse).
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
              >
                <Image
                  alt="Mountains"
                  // Importing an image will
                  // automatically set the width and height
                  src={ImageService3}
                  sizes="100vw"
                  // Make the image display full width
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>

              <h4 className="h4 mb-2">Pembiayaan Investasi</h4>
              <p className="text-lg text-gray-400">
                Merupakan pembiayaan untuk pengadaan barang dan atau jasa yang
                bersifat konsumtif dan bukan untuk keperluan usaha (non
                produktif): Sewa pembiayaan (finance lease) dan pembelian dengan
                pembayaran secara angsuran.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
