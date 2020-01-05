TempleFromFile = function () {

    var temple = new THREE.Group();

    var fbxloader = new THREE.FBXLoader();

    fbxloader.load("src/models/TempleCleaner02.fbx", function (model) {

        temple.add(model);
        temple.scale.set(0.3,0.3,0.3);

        model.traverse(function (child) {
            if (child.isMesh) {
                console.log(child.name);
                child.castShadow = true;
                child.receiveShadow = true;
            }
        })
    });

    return temple;
};