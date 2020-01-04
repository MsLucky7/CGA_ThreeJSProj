class StorefromPrimitives extends THREE.Group {

    constructor(segments) {
        super();
        this.addParts(segments);
    }

    addParts(segments) {

        var buildingGeometry = new THREE.BoxGeometry(80, 80, 100);
        var buildingMaterial = new THREE.MeshPhongMaterial({color: 0xAD4242});
        var buildingTexture = new THREE.TextureLoader().load("src/images/brickwall.jpg");
        buildingTexture.repeat.set(segments / 4, segments / 4);
        buildingTexture.wrapS = THREE.RepeatWrapping;
        buildingTexture.wrapT = THREE.RepeatWrapping;
        buildingMaterial.map = buildingTexture;
        var buildingNormalTexture = new THREE.TextureLoader().load("src/images/brickwall_normal.jpg");
        buildingNormalTexture.repeat.set(segments / 4, segments / 4);
        buildingNormalTexture.wrapS = THREE.RepeatWrapping;
        buildingNormalTexture.wrapT = THREE.RepeatWrapping;
        buildingMaterial.normalMap = buildingNormalTexture;
        var building = new THREE.Mesh(buildingGeometry, buildingMaterial);
        this.add(building);

        var frontWindowGeometry = new THREE.BoxGeometry(60,50,5);
        var frontWindowMaterial = new THREE.MeshPhongMaterial({color: 0x0000bb});
        var frontWindow = new THREE.Mesh(frontWindowGeometry, frontWindowMaterial);
        frontWindow.position.x = -40;
        frontWindow.position.y = -12;
        frontWindow.position.z = 15;
        frontWindow.rotation.y = 90*DEG_TO_RAD;
        this.add(frontWindow);

    }
}