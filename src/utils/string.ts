export function formatLetter(letter: string) {
  const paragraphs = letter.split("\n\n");

  return paragraphs.map((paragraph) => {
    const newParagraph = paragraph.replace(/\n/g, "<br />");

    return `<p>${newParagraph}</p>`;
  }).join("");
}