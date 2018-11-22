const fs = require("uxp").storage.localFileSystem;
const application = require("application");
const getDialog = require("./main2");

function menuCommand(selection, root) {

  document.body.appendChild(getDialog()).showModal()

}

module.exports = {
  commands: {
    menuCommand: menuCommand
  }
};