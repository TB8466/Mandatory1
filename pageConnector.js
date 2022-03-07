//Different HTML pages. Read, connected and exported

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const finalFrontpage = nav.replace("%%DOCUMENT_TITLE%%", "NodeJS KEA22").replace("%%DOCUMENT_STYLESHEET%%", "./pages/frontpage/frontpage.css") + frontpage + footer;

const jsLearningPage = fs.readFileSync("./public/pages/js_learning/js_learning.html").toString();
const finalJsLearningPage = nav.replace("%%DOCUMENT_TITLE%%", "Javascript I've learned") + jsLearningPage + footer;

const nodeLearningPage = fs.readFileSync("./public/pages/node_learning/node_learning.html").toString();
const finalNodeLearningPage = nav.replace("%%DOCUMENT_TITLE%%", "NodeJS I've learned") + nodeLearningPage + footer;

const codeSnippetPage = fs.readFileSync("./public/pages/codeSnippets/code_snippets.html").toString();
const finalCodeSnippetPage = nav.replace("%%DOCUMENT_TITLE%%", "Code Snippets") + codeSnippetPage + footer;

module.exports = {
    finalFrontpage,
    finalJsLearningPage,
    finalNodeLearningPage,
    finalCodeSnippetPage
}