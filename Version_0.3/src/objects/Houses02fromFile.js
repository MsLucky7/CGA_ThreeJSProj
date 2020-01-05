Houses02FromFile = function () {

    var houses = new THREE.Group();

    var fbxloader = new THREE.FBXLoader();
    

    fbxloader.load("src/models/Houses02.fbx", function (model) {

        houses.add(model);
        houses.scale.set(0.3,0.3,0.3);

        var houseTexture = new THREE.TextureLoader().load("src/images/HousesDiffuse.png");
        var houseTextureEmit = new THREE.TextureLoader().load("src/images/HousesEmit.png");
        var houseMaterial = new THREE.MeshPhongMaterial({map: houseTexture, emissiveMap: houseTextureEmit});
 

        model.traverse(function (child) {
            if (child.isMesh) {
                console.log(child.name);
                child.castShadow = true;
                child.receiveShadow = true;
                child.material = houseMaterial;
            }
        })
    });

    return houses;
};