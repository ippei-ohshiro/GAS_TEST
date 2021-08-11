const createDoc = () => {
  // 新規ドキュメント
  let doc = DocumentApp.create('ローカルテスト');
  // ドキュメントの内容
  let body = doc.getBody();
  let rowsData = [['Plants', 'Animals'], ['Ficus', 'Goat'], ['Basil', 'Cat'], ['Moss', 'Frog']];

  body.insertParagraph(0, doc.getName())
      .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  table = body.appendTable(rowsData);
  table.getRow(0).editAsText().setBold(true);
}
