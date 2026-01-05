const express = require("express");
const multer = require("multer");
const Transaction = require("../models/Transaction.js");
const { extractPdfText } = require("../services/pdf.service.js");
const { parseTransactions } = require("../services/parser.service.js");
const { translateTamilToEnglish } = require("../services/translate.service.js");


const Transactionrouter = express.Router();
const upload = multer();


Transactionrouter.post("/upload", upload.single("file"), async (req, res) => {
    try {
        const text = await extractPdfText(req.file.buffer);
        const parsed = parseTransactions(text);


        const translated = [];
        for (const record of parsed) {
            translated.push(await translateTamilToEnglish(record));
        }


        const saved = await Transaction.insertMany(translated);
        res.json(saved);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


Transactionrouter.get("/", async (req, res) => {
    const query = {};


    if (req.query.buyer)
        query.buyerEnglish = new RegExp(req.query.buyer, "i");


    if (req.query.seller)
        query.sellerEnglish = new RegExp(req.query.seller, "i");


    if (req.query.surveyNumber)
        query.surveyNumber = req.query.surveyNumber;


    if (req.query.documentNumber)
        query.documentNumber = req.query.documentNumber;


    const data = await Transaction.find(query).sort({ transactionDate: -1 });
    res.json(data);
});


module.exports = Transactionrouter;