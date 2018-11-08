console.log("load util.js");

// 再帰的にレイヤー名を出力
function scanNode(node){
    if(node.children.length > 0){
        node.children.forEach(child => {
            console.log(child.name);
            scanNode(child);
        })
    }
}

module.exports = scanNode;