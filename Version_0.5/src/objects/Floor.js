class Floor extends THREE.Mesh {

    constructor(dimX, dimY, segments) {
        super();

        var floorGeometry = new THREE.PlaneGeometry(dimX, dimY);
        var floorMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff
        });

        var floorTexture = new THREE.TextureLoader().load("src/images/asphalt.jpg");
        floorTexture.repeat.set(segments / 4, segments / 4);
        floorTexture.wrapS = THREE.RepeatWrapping;
        floorTexture.wrapT = THREE.RepeatWrapping;
        floorMaterial.map = floorTexture;
        var floorNormalTexture = new THREE.TextureLoader().load("src/images/asphalt_normal.jpg");
        floorNormalTexture.repeat.set(segments / 4, segments / 4);
        floorNormalTexture.wrapS = THREE.RepeatWrapping;
        floorNormalTexture.wrapT = THREE.RepeatWrapping;
        floorMaterial.normalMap = floorNormalTexture;
        //floorMaterial.normalScale = (0.3 , 0.3);
        floorMaterial.side = THREE.DoubleSide;
        var floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -90 * DEG_TO_RAD;
        floor.receiveShadow = true;

        return floor;
    }
}