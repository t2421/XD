console.log("loaded exportLayer")
const util = require('./util');
const application = require("application");
const fs = require("uxp").storage.localFileSystem;

async function exportLayer(selection) {
  const renditions = [];
  let folder;

  if (util.hasImageExportLayer(selection)) {
    folder = await fs.getFolder();
  } else {
    return false;
  }

  for (var i = 0; i < selection.items.length; i++) {
    var item = selection.items[i];
    const layerName = item.name;
    if (!util.isExportImage(layerName)) continue;
    const outputName = util.getOutputName(layerName);
    const file = await folder.createFile(outputName, { overwrite: true });
    const type = util.getImageType(layerName);
    const scale = util.getScaleFromName(layerName);

    renditions.push({
      node: item,
      outputFile: file,
      type: type,
      scale: scale
    })
    
  }

  application.createRenditions(renditions)
    .then(results => {
      for (var i = 0; i < results.length; i++) {
        console.log(`PNG rendition has been saved at ${ results[i].outputFile.nativePath}`);
      }
    })
    .catch(error => {
      console.log(error);
    })
}

module.exports = exportLayer;