const express = require("express");
const app = express();

app.use(express.static("public"))

const pageConnector = require("./pageConnector");

app.get("/", (req, res) => {
    res.send(pageConnector.finalFrontpage);
});

app.get("/js", (req, res) => {
    res.send(pageConnector.finalJsLearningPage);
});

app.get("/node", (req, res) => {
    res.send(pageConnector.finalNodeLearningPage);
});

app.get("/code", (req, res) => {
    res.send(pageConnector.finalCodeSnippetPage);
});



const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

console.log(process.env.port)