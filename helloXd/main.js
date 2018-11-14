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

function myPluginCommand(selection, root) {
  // root.children.forEach(node => {
  //  scanNode(node);
  // })
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