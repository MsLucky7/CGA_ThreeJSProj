class Grass extends THREE.Mesh {

    constructor(width, height, depth, posX, posY, posZ, cShadow, rShadow) {
        super();

        var cubeGeometry = new THREE.BoxGeometry(width, height, depth);
        var cubeMaterial = new THREE.MeshPhongMaterial({
            color: 0x28791F

        });
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(posX, posY, posZ);
        cube.castShadow = cShadow;
        cube.receiveShadow = rShadow;
        return cube;
    }
}