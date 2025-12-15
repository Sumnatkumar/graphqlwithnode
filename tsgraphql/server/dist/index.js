import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 7000;
app.get("/", (req, res) => {
    return res.json({ status: 200, message: "App is working" });
});
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
