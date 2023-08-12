import { toPng } from "html-to-image";
import { useEffect, useState } from "react";
import Writing from "../entities/writing/Writing";

export default function useConvertToPng(writing: Writing | null) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    convertToPng();
  }, [writing]);

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
