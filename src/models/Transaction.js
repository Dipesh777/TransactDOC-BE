import mongoose from "mongoose";


const transactionSchema = new mongoose.Schema({
buyerTamil: String,
buyerEnglish: String,
sellerTamil: String,
sellerEnglish: String,
houseNumber: String,
surveyNumber: String,
documentNumber: String,
transactionDate: Date,
value: Number
}, { timestamps: true });


transactionSchema.index({ buyerEnglish: 1 });
transactionSchema.index({ sellerEnglish: 1 });
transactionSchema.index({ surveyNumber: 1 });
transactionSchema.index({ documentNumber: 1 });


export default mongoose.model("Transaction", transactionSchema);