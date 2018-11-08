/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */

const { Artboard} = require("scenegraph");
const scanNode = require("./util");

function myPluginCommand(selection,root) {
    root.children.forEach(node => {
		if (node instanceof Artboard) {
            scanNode(node);
		}
	})
}


module.exports = {
    commands: {
        myPluginCommand: myPluginCommand
    }
};
