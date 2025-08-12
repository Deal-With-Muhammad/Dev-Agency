import { Image } from "@heroui/react";

export default function ScatteredImages() {
  const images = [
    {
      src: "https://cdn.dribbble.com/userupload/14612276/file/original-207ec092c53256921a940395eebabafa.png?resize=1504x1128&vertical=center",
      alt: "Vintage red poster",
      className: "w-44 h-28 -rotate-12 z-10",
    },
    {
      src: "https://cdn.dribbble.com/userupload/15925705/file/original-f37cd3255ca4cfeba085e1244b64f1d6.png?resize=1504x1128&vertical=center",
      alt: "Blue stamps",
      className: "w-48 h-32 rotate-6 z-20 -ml-8 mt-4",
    },
    {
      src: "https://cdn.dribbble.com/userupload/8821412/file/original-22473f0d06c2e056893f661d50e95e49.png?resize=1504x1128&vertical=center",
      alt: "Album cover",
      className: "w-64 h-40 rotate-8 z-40 -ml-16 mt-6",
    },
    {
      src: "https://cdn.dribbble.com/userupload/5999269/file/original-cbf3f8e32228dd4724c425c255551155.png?resize=1504x1128&vertical=center",
      alt: "Yellow retro design",
      className: "w-56 h-36 -rotate-3 z-30 -ml-12 -mt-2",
    },
    {
      src: "https://cdn.dribbble.com/userupload/12906199/file/original-c7f9132bb36926b34aefaa1d0509fb8f.jpg?resize=1504x1128&vertical=center",
      alt: "Sports card",
      className: "w-48 h-32 -rotate-6 z-50 -ml-10 -mt-4",
    },
  ];

  return (
    <div className="relative flex justify-center items-center min-h-72">
      <div className="relative flex flex-wrap justify-center items-center max-w-4xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-[100] ${image.className}`}
          >
            <Image
              isBlurred
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={400}
              height={200}
              className="w-full h-40 object-cover rounded-lg border-2 border-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
