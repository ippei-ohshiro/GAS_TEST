/**
 * カスタムメニューの表示
 */

// ユーザーがファイルを開いたときにメニューを表示
const onOpen = () =>  {
  let ui = SpreadsheetApp.getUi();
  // DocumentAppもしくは、FormApp.
  ui.createMenu('Custom Menu')
      .addItem('First item', 'menuItem1')
      .addSeparator()
      .addSubMenu(ui.createMenu('Sub-menu')
          .addItem('Second item', 'menuItem2'))
      .addToUi();
}

// menuItem1,2クリック時にアラート
const menuItem1 = () => {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     .alert('You clicked the first menu item!');
}
const menuItem2 = () => {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     .alert('You clicked the second menu item!');
}