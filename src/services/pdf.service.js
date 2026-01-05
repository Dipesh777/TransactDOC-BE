const { PDFParse } = require('pdf-parse');

module.exports.extractPdfText = async (buffer) => {
    // FIX: Convert Node.js Buffer to Uint8Array
    const uint8Array = new Uint8Array(buffer);
    const parser = new PDFParse(uint8Array);
    return await parser.getText();
    // const data = await PDFParse(buffer);
    // return data.text;
};