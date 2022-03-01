const express = require("express");
const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/frontpage.html");
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

console.log(process.env.port)