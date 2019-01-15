/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */

const { Artboard } = require("scenegraph");
const util = require("./util");
const exportLayer = require("./exportLayer");
const fs = require("uxp").storage.localFileSystem;
const application = require("application");
const os = require('os');
const h = require("./h")
const dialog = require('./lib/dialogs');

function myPluginCommand(selection, root) {
  // root.children.forEach(node => {
  //  scanNode(node);
  // })
  // document.body.appendChild(getDialog()).showModal()
  // showDialog();
  exportLayer(selection);
  // selection.items.map(node => {
  //     console.log(node)
  //     // scanNode(node);
  // })
}




module.exports = {
  commands: {
    myPluginCommand: myPluginCommand
  }
};