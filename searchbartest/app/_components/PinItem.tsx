import React from "react";
import Image from "next/image";

interface Pin {
  id: string;
  image: string;
  alt_description?: string;
}

const PinItem: React.FC<{ pin: Pin }> = ({ pin }) => {
  return (
    <div className="pin-item">
      <Image
        src={pin.image || "/default.jpg"}
        alt={pin.alt_description || "Image"}
        width={500}
        height={500}
        className="rounded-3xl cursor-pointer"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default PinItem;
