export function formatLetter(letter: string) {
  const paragraphs = letter.split("\n\n");

  return paragraphs.map((paragraph) => {
    const newParagraph = paragraph.replace(/\n/g, "<br />");

    return `<p>${newParagraph}</p>`;
  }).join("");
}

export const truncate = (str: string, n = 20) => {
  return str.length > n ? str.substring(0, n - 1) + "..." : str;
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}