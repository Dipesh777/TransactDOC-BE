const dotenv = require("dotenv");
const app = require("./app.js");
const connectDB = require("./config/db.js");

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})