class Lights {

    constructor() {

    }

    createAmbientLight() {
        var ambientLight = new THREE.AmbientLight(0xffffff);
        ambientLight.intensity = 0.5;
        return ambientLight;
    }

    createSpotLight(posX, posY, posZ) {
        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(posX, posY, posZ);
        spotLight.intensity = 0.8;
        spotLight.target = scene;
        spotLight.angle = 60 * DEG_TO_RAD;
        spotLight.penumbra = 1;
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;
        //spotLight.shadow.camera.aspect = 1;
        //spotLight.shadow.camera.near = 10;
        //spotLight.shadow.camera.far = 40;
        //scene.add(new THREE.CameraHelper(spotLight.shadow.camera));
        return spotLight;
    }

    createDirectionalLight(posX, posY, posZ) {
        var directionaLight = new THREE.DirectionalLight(0xffffff);
        directionaLight.position.set(posX, posY, posZ);
        directionaLight.lookAt(scene.position);
        directionaLight.intensity = 0.7;
        directionaLight.castShadow = true;
        directionaLight.shadow.radius = 5;
        directionaLight.shadow.mapSize.width = 2048;
        directionaLight.shadow.mapSize.height = 2048;
        directionaLight.shadow.camera.top = 400;
        directionaLight.shadow.camera.bottom = -400;
        directionaLight.shadow.camera.left = -500;
        directionaLight.shadow.camera.right = 500;
        scene.add(new THREE.CameraHelper(directionaLight.shadow.camera));
        return directionaLight;
    }

    /*    var pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(15, 20, 20);
    pointLight.intensity = 0.5;
    scene.add(pointLight);*/

}