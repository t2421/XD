
const util = require('./util');
const application = require("application");
const fs = require("uxp").storage.localFileSystem;
const h = require("./h")

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
    const quality = util.getQualityFromName(layerName);

    renditions.push({
      node: item,
      outputFile: file,
      type: type,
      scale: scale,
      quality:quality
    })
  }

  application.createRenditions(renditions)
    .then(results => {
      for (var i = 0; i < results.length; i++) {
        console.log(`PNG rendition has been saved at ${ results[i].outputFile.nativePath}`);
      }
      showDialog("Complete");
    })
    .catch(error => {
      showDialog("Error....");
    })
}

function showDialog(message,text) {
  let dialog;
  dialog = h("dialog",
              h("form", { method: "dialog", style: { width: 'auto', height: 'auto'} },
                  h("header",
                  h("h1",message)),
                  h("button", { uxpVariant: "cta", onclick(e) { dialog.close() } },"OK")
              )
          )
  document.body.appendChild(dialog);
  dialog.showModal();
}


module.exports = exportLayer;