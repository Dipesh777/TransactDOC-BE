const axios = require("axios");


module.exports.translateTamilToEnglish = async (record) => {
    const translate = async (text) => {
        if (!text) return null;


        const res = await axios.post(process.env.TRANSLATE_API_URL, {
            q: text,
            source: "ta",
            target: "en",
            format: "text"
        });


        return res.data.translatedText;
    };


    return {
        ...record,
        buyerEnglish: await translate(record.buyerTamil),
        sellerEnglish: await translate(record.sellerTamil)
    };
};