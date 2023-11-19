import express from "express";
import routers from "./routers/index.js"; 

const app = express();
app.use("/", (req, res) => {
    res.json({ message: "hello" });
});

app.use("/api/v1", routers);

app.listen(9000, () => {
    console.log("kết nối thành công");
});
