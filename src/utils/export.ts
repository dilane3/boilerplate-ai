import { saveAs } from "file-saver";

export const exportToWord = (content: string, fileName: string) => {
  const blob = new Blob(["\ufeff", content], {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });

  // Save the file
  saveAs(blob, `${fileName}.docx`);
};
