import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");


export const extractPdfText = async (buffer) => {
    const data = await pdfParse(buffer);
    return data.text;
};