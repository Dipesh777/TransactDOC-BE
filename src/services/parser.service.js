module.exports.parseTransactions = (text) => {
    const transactions = [];



    console.log('loop', Object.keys(text));
    console.log('page0', text.pages[0]);
    
    // console.log('text',text.text);

    const blocks = text.pages.map(obj => obj.text.split(/Document No./i));
    console.log('blocks', blocks);


    for (let block of blocks) {
        // const buyerTamil = block[0].match(/Buyer\s*:\s*(.*)/i)?.[1];
        const sellerTamil = block[0].match(/Name of Executant(s)\s*:\s*(.*)/i)?.[1];
        // const surveyNumber = block[0].match(/Survey No\s*:\s*(.*)/i)?.[1];
        // const houseNumber = block[0].match(/House No\s*:\s*(.*)/i)?.[1];
        // const houseNumber = block[0].split(/\n(?=\d{3}\/\d{4})/);
        const documentNumber = block[0].match(/Document No.\s*:\s*(.*)/i)?.[1];
        // const documentNumber = block[0].split(/\n(?=\d{3}\/\d{4})/);
        const date = block[0].match(/Date of Registration\s*:\s*(.*)/i)?.[1];
        // const value = block[0].match(/Value\s*:\s*(\d+)/i)?.[1];


        if (documentNumber) {
            transactions.push({
                buyerTamil,
                sellerTamil,
                surveyNumber,
                houseNumber,
                documentNumber,
                transactionDate: date ? new Date(date) : null,
                value: value ? Number(value) : null
            });
        }
    }


    return transactions;
};