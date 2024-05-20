import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import HeroImage from "@/public/images/str.png";
import IconImage from "@/public/images/ojk-logos.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="relative pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="columns-2">
            <div className="contents">
              <h1
                className="h1 -ml-32 mt-64 text-blue-400"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Perusahaan Pembiayaan Terpercaya Sejak 1990
              </h1>
              <div className="break-after-column -ml-32 mt-16">
                <p
                  className="text-xl text-gray-400"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Konsisten bertumbuh dengan komitmen penuh menyediakan layanan
                  solusi keuangan terbaik dan inovatif untuk memajukan
                  perekonomian Indonesia
                </p>
                <Image
                  src={IconImage}
                  style={{ objectFit: "cover" }}
                  width={350}
                  height={350}
                  alt="hero-sb"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="pt-16"
                ></Image>
              </div>
              <Image
                src={HeroImage}
                style={{ objectFit: "cover" }}
                className="max-w-[1080px]"
                alt="hero-sb"
              ></Image>
            </div>
          </div>
        </div>

        {/* <ModalVideo
          thumb={VideoThumb}
          thumbWidth={1024}
          thumbHeight={576}
          thumbAlt="Modal video thumbnail"
          video="/videos/video.mp4"
          videoWidth={1920}
          videoHeight={1080}
        /> */}
      </div>
    </section>
  );
}
