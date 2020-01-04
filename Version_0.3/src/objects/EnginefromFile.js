EngineFromFile = function (rot, sizeX, sizeY, sizeZ) {

    var engine = new THREE.Group();

    var fbxloader = new THREE.FBXLoader();

    fbxloader.load("src/models/HoverEngine.fbx", function (model) {

        engine.add(model);
        engine.scale.set(sizeX,sizeY,sizeZ);
        engine.rotation.set(0, rot*Math.PI / 180, 0);

        var engineMaterial = new THREE.MeshPhongMaterial({color: 0x0c0c0c, specular: 0xd8d8d8, shininess: 80});
        engine.material = engineMaterial;

        model.traverse(function (child) {
            if (child.isMesh) {
                console.log(child.name);
                child.castShadow = true;
                child.receiveShadow = true;
            }
        })
    });

    return engine;
};