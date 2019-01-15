console.log("load util.js");
const application = require("application");

const util = {};
// 再帰的にレイヤー名を出力
util.scanNode = function(node){
    if(node.children.length > 0){
        node.children.forEach(child => {
            console.log(child.name);
            util.scanNode(child);
        })
    }
}

util.hasImageExportLayer = function(selection){
    for (var i = 0; i < selection.items.length; i++) {
        if(util.isExportImage(selection.items[i].name)) return true;
    }
    return false;
}

//layer名の拡張子に画像の拡張子がついていたら出力する
util.isExportImage = function(layerName){
    const type = util.getImageType(layerName);
    if(type) return true;
    return false;
}

util.getScaleFromName = function(layerName){
    var re = /\d{1,3}%\s/;
    var matchers = layerName.match(re);
    if(matchers){
        let scale = matchers[0].replace('% ','');
        return Number(scale)/100;
    }
    return 1;
}


util.getQualityFromName = function(layerName){
    var re = /\s\d{1,3}$/;
    var matchers = layerName.match(re);
    
    if(matchers){
        let quality = matchers[0].replace(' ','');
        return Number(quality);
    }
    return 100;
}

//layer名についているパラメータを削除する
util.getOutputName = function(layerName){
    var outputName = util.removeScaleParam(layerName);
    outputName = util.removeQualityParam(outputName);
    return outputName;
}

util.removeScaleParam = function(layerName){
    var re = /\d{1,3}%\s/;
    var replaced = layerName.replace(re,"");
    return replaced;
}

util.removeQualityParam = function(layerName){
    var re = /\s\d{1,3}$/;
    var replaced = layerName.replace(re,"");
    return replaced;
}


util.getImageType = function(layerName){
    if(layerName.indexOf('.png') > -1){
        return application.RenditionType.PNG;
    }
    // if(layerName.indexOf('.svg')){
    //     return application.RenditionType.SVG;
    // }
    if(layerName.indexOf('.jpg') > -1){
        return application.RenditionType.JPG;
    }
    return undefined;
}

module.exports = util;