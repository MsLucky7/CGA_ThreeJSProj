Houses02FromFile = function () {

    var houses = new THREE.Group();

    var fbxloader = new THREE.FBXLoader();

    fbxloader.load("src/models/Houses02.fbx", function (model) {

        houses.add(model);
        houses.scale.set(0.3,0.3,0.3);

        model.traverse(function (child) {
            if (child.isMesh) {
                console.log(child.name);
                child.castShadow = true;
                child.receiveShadow = true;
            }
        })
    });

    return houses;
};