CherryTreefromFile = function () {

    var tree = new THREE.Group();

    var fbxloader = new THREE.FBXLoader();

    fbxloader.load("src/models/CherryTree.fbx", function (model) {

        tree.add(model);
        tree.scale.set(0.3,0.3,0.3);

        model.traverse(function (child) {
            if (child.isMesh) {
                console.log(child.name);
                child.castShadow = true;
                child.receiveShadow = true;
            }
        })
    });

    return tree;
};