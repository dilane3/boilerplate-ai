export function formatLetter(letter: string) {
  const paragraphs = letter.split("\n\n");

  return paragraphs
    .map((paragraph) => {
      const newParagraph = paragraph.replace(/\n/g, "<br />");

      return `<p>${newParagraph}</p>`;
    })
    .join("");
}

export function reformatLetter(letter: string) {
  const paragraphs = letter.split("</p>");

  return paragraphs
    .map((paragraph) => {
      const newParagraph = paragraph
        .replace(/<br>/g, "\n")
        .replace(/<p>/g, "")
        .replace(/<div>/g, "")
        .replace(/<\/div>/g, "");

      return newParagraph;
    })
    .join("\n\n");
}

export const truncate = (str: string, n = 20) => {
  return str.length > n ? str.substring(0, n - 1) + "..." : str;
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
