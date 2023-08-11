import { toPng } from "html-to-image";
import { useEffect, useState } from "react";

export default function useConvertToPng(letter: string) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    convertToPng();
  }, [letter]);

  const convertToPng = () => {
    const node = document.getElementById("letter");

    if (!node) return;

    toPng(node)
      .then(function (dataUrl) {
        setImage(dataUrl);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return image;
}
