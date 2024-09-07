import android from "@/assets/Images/Certificates/andriod.png";
import cybersecurity from "@/assets/Images/Certificates/cybersecurity.png";
import teachnook1 from "@/assets/Images/Certificates/teachnook1.jpg";
import teachnook2 from "@/assets/Images/Certificates/teachnook2.jpg";
import cwebdev from "@/assets/Images/Certificates/webdev.png";
import devops from "@/assets/Images/Certificates/devops.png";
import { useState, useEffect } from "react";

const certificates = [
  { title: "Devops", image: devops },
  { title: "Cybersecurity", image: cybersecurity },
  { title: "Android Development", image: android },
  { title: "Web Development", image: cwebdev },
  { title: "Teachnook Course Certificate", image: teachnook1 },
  { title: "Teachnook Internship Certificate", image: teachnook2 },
];

interface Certificate {
  title: string;
  image: string;
}

function Certificates() {
  const [image, SetactiveImage] = useState(certificates[0].image);
  const [visibleCertificates, setVisibleCertificates] = useState<Certificate[]>(
    []
  );

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];

    certificates.forEach((certificate, index) => {
      const timeout = setTimeout(() => {
        setVisibleCertificates((prevCertificates) => [
          ...prevCertificates,
          certificate,
        ]);
      }, index * 1000); // Add delay of 1 second per certificate
      timeouts.push(timeout);
    });

    // Cleanup timeouts on unmount or when certificates change
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [certificates]);
  return (
    <div className="w-full md:h-screen flex max-md:flex-col justify-center items-center gap-5 overflow-x-hidden p-4">
      <div className="max-w-[60rem] animate-fade-in-bottom ">
        <img
          src={image}
          className="rounded-2xl border-white border-2 w-full h-full"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-1">
        {visibleCertificates.map((certificate, index) => (
          <div
            key={index}
            className=" overflow-hidden relative max-lg:max-w-56 max-w-48 animate-fade-in-bottom"
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="rounded-tr-[40px] rounded-bl-[40px] -z-0"
            />
            <h3
              className=" h-full w-full absolute z-[1] text-white bg-black top-0 bg-opacity-50 flex justify-center items-center hover:opacity-0 cursor-pointer text-center"
              onClick={() => {
                SetactiveImage(certificate.image);
              }}
            >
              {certificate.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
