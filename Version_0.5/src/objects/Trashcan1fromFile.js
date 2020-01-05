Trashcan1fromFile = function () {

    var trashcan = new THREE.Group();

    var fbxloader = new THREE.FBXLoader();

    fbxloader.load("src/models/trashcan.fbx", function (model) {

        trashcan.add(model);
        trashcan.scale.set(0.3,0.3,0.3);

        model.traverse(function (child) {
            if (child.isMesh) {
                console.log(child.name);
                child.castShadow = true;
                child.receiveShadow = true;
            }
        })
    });

    return trashcan;
};