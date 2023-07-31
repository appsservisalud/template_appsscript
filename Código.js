function doGet(){
  return HtmlService.createTemplateFromFile('src/views/Index').evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}