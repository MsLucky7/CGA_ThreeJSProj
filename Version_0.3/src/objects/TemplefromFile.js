TempleFromFile = function () {

    var temple = new THREE.Group();

    var fbxloader = new THREE.FBXLoader();

    fbxloader.load("src/models/TempleCleaner03.fbx", function (model) {

        temple.add(model);
        temple.scale.set(0.3,0.3,0.3);

        var templeTexture = new THREE.TextureLoader().load("src/images/TempleDiffuse.png");
        var templeMaterial = new THREE.MeshPhongMaterial({map: templeTexture});

        model.traverse(function (child) {
            if (child.isMesh) {
                console.log(child.name);
                child.castShadow = true;
                child.receiveShadow = true;
                child.material = templeMaterial;
            }
        })
    });

    return temple;
};