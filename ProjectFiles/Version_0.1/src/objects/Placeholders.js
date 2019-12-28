class Placeholders {

    constructor() {

    }

    createCube(width, height, depth, posX, posY, posZ, cShadow, rShadow) {
        var cubeGeometry = new THREE.BoxGeometry(width, height, depth)
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000, wireframe: false});
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(posX, posY, posZ);
        cube.castShadow = cShadow;
        cube.receiveShadow = rShadow;
        return cube;
    }

    createSphere(radius, wSeg, hSeg, posX, posY, posZ, cShadow, rShadow) {
        var sphereGeometry = new THREE.SphereGeometry(radius, wSeg, hSeg);
        var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x0000ff, wireframe: false});
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(posX, posY, posZ);
        sphere.castShadow = cShadow;
        sphere.receiveShadow = rShadow;
        return sphere;
    }

    createCylinder(radTop, radBot, height, radSeg, heightSeg, posX, posY, posZ, cShadow, rShadow) {
        var cylinderGeometry = new THREE.CylinderGeometry(radTop, radBot, height, radSeg, heightSeg);
        var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xbbbbbb, wireframe: false});
        var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        cylinder.position.set(posX, posY, posZ);
        cylinder.castShadow = cShadow;
        cylinder.receiveShadow = rShadow;
        return cylinder;
    }
}