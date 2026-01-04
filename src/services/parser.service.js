export const parseTransactions = (text) => {
    const transactions = [];


    const blocks = text.split(/Document No/i);


    for (let block of blocks) {
        const buyerTamil = block.match(/Buyer\s*:\s*(.*)/i)?.[1];
        const sellerTamil = block.match(/Seller\s*:\s*(.*)/i)?.[1];
        const surveyNumber = block.match(/Survey No\s*:\s*(.*)/i)?.[1];
        const houseNumber = block.match(/House No\s*:\s*(.*)/i)?.[1];
        const documentNumber = block.match(/No\s*:\s*(.*)/i)?.[1];
        const date = block.match(/Date\s*:\s*(.*)/i)?.[1];
        const value = block.match(/Value\s*:\s*(\d+)/i)?.[1];


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