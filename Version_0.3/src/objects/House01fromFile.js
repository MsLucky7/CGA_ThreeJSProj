House01FromFile = function () {

    var house01 = new THREE.Group();

    var fbxloader = new THREE.FBXLoader();
    

    fbxloader.load("src/models/House01.fbx", function (model) {

        house01.add(model);
        house01.scale.set(0.3,0.3,0.3);

        
        var houseTexture = new THREE.TextureLoader().load("src/images/House01Diffuse.png");
        var houseMaterial = new THREE.MeshPhongMaterial({map: houseTexture});
        //house01.material = houseMaterial;


        model.traverse(function (child) {
            if (child.isMesh) {
                console.log(child.name);
                child.castShadow = true;
                child.receiveShadow = true;
                child.material = houseMaterial;
            }
        })
    });

    return house01;
};