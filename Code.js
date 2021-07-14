function onOpen() {
  var ui = SpreadsheetApp.getUi();
  var mainMenu = ui.createMenu("Add Ons");
  mainMenu.addItem("Help", "onClickHelp");
  mainMenu.addToUi();
};

function onClickHelp() {
var ui = SpreadsheetApp.getUi();
var message = "How To Use:\n";
message += "1. Click on \'Tag Medium/Artists\' to set ARTIST NAME and MEDIUM to their proper values. Please do this before anything else.\n 2. Click on '\Upload Dexi Data\' to upload your lots.\n";
message += "\nFineArt/DecArt format for each lot will be determined by the artwork type you specified for the auction ID that you entered.";
ui.alert(message);
}
