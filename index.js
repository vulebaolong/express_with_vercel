import express from "express";

const app = express();
app.use("/", (req, res) => {
    res.json({ message: "hello" });
});

app.listen(9000, () => {
    console.log("kết nối thành công");
});
