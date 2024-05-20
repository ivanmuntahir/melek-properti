// export const metadata = {
//   title: "Contact - PT Satyadhika Bakti Finance",
//   description:
//     "Hubungi Satyadhika Bakti Finance Surabaya untuk solusi finansial terpercaya. Dapatkan bantuan dari tim kami yang berpengalaman dalam mencapai tujuan keuangan Anda. Jangan ragu untuk menghubungi kami melalui informasi kontak yang tersedia di halaman ini. Kami siap membantu Anda dengan layanan finansial terbaik di Surabaya. Terima kasih atas kepercayaan Anda kepada kami.",
// };

import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-12 grid">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        {/* Contact Information */}
        <div
          className="mb-8"
          data-aos="fade-up"
          data-aos-anchor="[data-aos-id-blocks]"
        >
          <h3 className="h4 font-regular text-blue-400 mb-2">Kontak Kami</h3>
          <h3 className="h2 text-blue-400 mb-2">Head Office</h3>
          <p className="text-xl text-blue-400">
            Office Tower The Samator<br></br> Lantai 9 Unit 8-10 Jalan Raya
            Kedung Baruk Nomor 26-28 <br></br> Surabaya
          </p>
        </div>
        <div
          className="mb-4"
          data-aos="fade-up"
          data-aos-anchor="[data-aos-id-blocks]"
        >
          <p className="text-xl text-blue-400">
            {" "}
            <span className="font-bold">Phone:</span> +6231 9900 4251
          </p>
        </div>
        <div className="mb-8">
          <p
            className="text-xl text-blue-400"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-blocks]"
          >
            <span className="font-bold">E-mail:</span>{" "}
            satyadhika@sbfinance.co.id
          </p>
        </div>
        {/* Responsive Google Map */}
        <div
          className="relative h-0 overflow-hidden mb-6"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            name="maps-satyadhika-bhakti"
            className="absolute top-0 left-0 w-full h-full"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jl%20raya%20kedung%20baruk%2026-28+(Satyadhika%20Bakti)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameBorder={0}
            style={{ border: 0 }}
            //allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
        {/* Additional contact details or a contact form can be added here */}
      </div>
    </section>
  );
}
