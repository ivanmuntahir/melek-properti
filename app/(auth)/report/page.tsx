import Image from "next/image";
import ImageReport1 from "@/public/images/report-1.png";

const imageStyle = {
  borderRadius: "50%",
  border: "1px solid #fff",
};
export default function Report() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" id="features">
        <div className="py-12 md:py-20 mt-8">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 mt-4">
            <h2 className="h2 mb-4 text-blue-400">Laporan Keberlanjutan</h2>
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
                <img src="/images/report-1.png" alt="laporan-keberlanjutan-1" />
              </div>

              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div data-aos="fade-up" data-aos-delay="400">
                  <a
                    className="btn text-white bg-blue-400 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#"
                  >
                    Download Report
                  </a>
                </div>
              </div>
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
                <img src="/images/report-1.png" alt="laporan-keberlanjutan-2" />
              </div>

              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div data-aos="fade-up" data-aos-delay="400">
                  <a
                    className="btn text-white bg-blue-400 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#"
                  >
                    Download Report
                  </a>
                </div>
              </div>
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
                <img src="/images/report-1.png" alt="laporan-keberlanjutan-3" />
              </div>

              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div data-aos="fade-up" data-aos-delay="400">
                  <a
                    className="btn text-white bg-blue-400 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#"
                  >
                    Download Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
