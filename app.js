const express = require("express");
const app = express();

app.use(express.static("public"))

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const jsLearningPage = fs.readFileSync("./public/pages/js_learning/js_learning.html").toString();

const finalFrontpage = nav.replace("%%DOCUMENT_TITLE%%", "NodeJS KEA22") + frontpage + footer;
const finalJsLearningPage = nav.replace("%%DOCUMENT_TITLE%%", "Javascript I've learned") + jsLearningPage + footer;

app.get("/", (req, res) => {
    res.send(finalFrontpage);
});

app.get("/js_learning", (req, res) => {
    res.send(finalJsLearningPage);
});





const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

console.log(process.env.port)