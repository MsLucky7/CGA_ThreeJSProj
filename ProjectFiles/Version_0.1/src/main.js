//external libraries, no additional libs beyond those allowed
document.write('<script type="text/javascript" src="../../lib/three.js-r109/build/three.js"></script>');
document.write('<script type="text/javascript" src="../../lib/three.js-r109/examples/js/controls/OrbitControls.js"></script>');
document.write('<script type="text/javascript" src="../../lib/dat.gui-0.7.6/build/dat.gui.js"></script>');
document.write('<script type="text/javascript" src="../../lib/ThreeCSG-1/three-csg.js"></script>');
document.write('<script type="text/javascript" src="../../lib/three.js-r109/examples/js/libs/inflate.min.js"></script>');
document.write('<script type="text/javascript" src="../../lib/three.js-r109/examples/js/loaders/FBXLoader_r90.js"></script>');
document.write('<script type="text/javascript" src="../../lib/cannon.js-0.6.2/build/cannon.js"></script>');
document.write('<script type="text/javascript" src="../../lib/cannon.js-0.6.2/tools/threejs/CannonDebugRenderer.js"></script>');
document.write('<script type="text/javascript" src="../../lib/three.js-r109/examples/js/libs/stats.min.js"></script>');

//own internal classes/mods
//document.write('<script type="text/javascript" src="src/objects/BowlFromFile.js"></script>');
//document.write('<script type="text/javascript" src="src/objects/RadioFromFile.js"></script>');
//document.write('<script type="text/javascript" src="src/objects/TableFromFile.js"></script>');
//document.write('<script type="text/javascript" src="src/objects/Radio.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Placeholders.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Floor.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Lights.js"></script>');
document.write('<script type="text/javascript" src="src/animation/Animation.js"></script>');
document.write('<script type="text/javascript" src="src/animation/Tween.js"></script>');
document.write('<script type="text/javascript" src="src/physics/Physics.js"></script>');
document.write('<script type="text/javascript" src="src/sound/Soundscape.js"></script>');

// Event functions
document.write('<script type="text/javascript" src="src/eventfunctions/updateAspectRatio.js"></script>');
document.write('<script type="text/javascript" src="src/eventfunctions/calculateMousePosition.js"></script>');
document.write('<script type="text/javascript" src="src/eventfunctions/executeRaycast.js"></script>');
document.write('<script type="text/javascript" src="src/eventfunctions/executeKeyAction.js"></script>');
//document.write('<script type="text/javascript" src="src/eventfunctions/setRadioSound.js"></script>');

const DEG_TO_RAD = Math.PI / 180;

function main() {
    scene = new THREE.Scene();

    physics = new Physics();
    physics.initialize(0, -200, 0, 1 / 60, true);
    physicsVisualDebugger = new THREE.CannonDebugRenderer(scene, physics.getWorld());

    soundscape = new Soundscape();

    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

   /* var radio = new Radio();
    radio.position.set(-30, 83, 5);
    radio.rotation.y = 20 * DEG_TO_RAD;
    physics.addBox(radio, 3, 30, 20, 8);
    scene.add(radio);

    radioFromFile = new RadioFromFile();
    radioFromFile.position.set(30, 83, 5);
    radioFromFile.rotation.y = -20 * DEG_TO_RAD;
    physics.addBox(radioFromFile, 3, 30, 20, 8);
    soundscape.addSound(radioFromFile, "src/sound/files/sound_01.mp3", 5, true);
    soundscape.addSound(radioFromFile, "src/sound/files/sound_02.mp3", 5, true);
    soundscape.addSound(radioFromFile, "src/sound/files/white_noise.mp3", 5, true);
    scene.add(radioFromFile);

    var bowlFromFile = new BowlfromFile();
    bowlFromFile.position.set(0, 73, -15);
    physics.addCylinder(bowlFromFile, 1, 20, 11, 13, 32, 0, 13 / 2, 0, -90 * DEG_TO_RAD, 0, 0);
    scene.add(bowlFromFile);

    var table = new TableFromFile();
    physics.addBox(table, 0, 130, 3, 70, 0, 71.5, 0);
    scene.add(table);*/

    scene.add(new Floor(200, 200, 8));

    var lights = new Lights();
    scene.add(lights.createAmbientLight());
    var directionalLight = lights.createDirectionalLight(-30, 200, 100);
    scene.add(directionalLight);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 150, 150);
    camera.lookAt(0, 83, 0);

    var orbitControls = new THREE.OrbitControls(camera);
    orbitControls.target = new THREE.Vector3(0, 0, 0);
    orbitControls.update();

/*    var gui = new dat.GUI();
    gui.add(sphere.position, "x", -50, 50).step(5);
    gui.add(sphere.position, "y", -50, 50).onChange(function (e) {
        cube.position.y = e;
    });

    var proxies = {z_pos: 0};
    gui.add(proxies, "z_pos", -50, 50).onChange(function (e) {
        cube.position.z = e;
        sphere.position.z = e;
    });*/

/*var gui = new dat.GUI();
    gui.add(pointLight.position, "x", -50, 50);
    gui.add(pointLight.position, "y", -50, 50);
    gui.add(pointLight.position, "z", -50, 50);

    var gui = new dat.GUI();
    gui.add(directionalLight.position, "x", -50, 50);
    gui.add(directionalLight.position, "y", -50, 50);
    gui.add(directionalLight.position, "z", -50, 50);*/

/*    var gui = new dat.GUI();
    gui.add(cubeSphereGroup.position, "x", -50, 50);
    gui.add(cubeSphereGroup.position, "y", -50, 50);
    gui.add(cubeSphereGroup.position, "z", -50, 50);
    gui.domElement.onmouseenter = function () {
        orbitControls.enabled = false;
    };
    gui.domElement.onmouseleave = function () {
        orbitControls.enabled = true;
    };*/

/*    var gui = new dat.GUI();
    gui.add(spotlight.position, "x", -200, 200);
    gui.add(spotlight.position, "y", -200, 200);
    gui.add(spotlight.position, "z", -200, 200);
    gui.domElement.onmouseenter = function () {
        orbitControls.enabled = false;
    };
    gui.domElement.onmouseleave = function () {
        orbitControls.enabled = true;
    };*/

    var gui = new dat.GUI();
    gui.add(directionalLight.position, "x", -200, 200);
    gui.add(directionalLight.position, "y", -200, 200);
    gui.add(directionalLight.position, "z", -200, 200);
    gui.domElement.onmouseenter = function () {
        orbitControls.enabled = false;
    };
    gui.domElement.onmouseleave = function () {
        orbitControls.enabled = true;
    };

/*    var gui3 = new dat.GUI();
    gui3.add(radio.position, "x", -50, 50);
    gui3.add(radio.position, "y", -50, 50);
    gui3.add(radio.position, "z", -50, 50);
    gui3.domElement.onmouseenter = function () {
        orbitControls.enabled = false;
    };
    gui3.domElement.onmouseleave = function () {
        orbitControls.enabled = true;
    };*/

    var stats = new Stats();
    stats.showPanel(0);
    document.body.appendChild(stats.dom);

    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    //renderer.setClearColor(new THREE.Color(0x265CB7 ));
    renderer.shadowMap.enabled = true;

    document.getElementById("3d_content").appendChild(renderer.domElement);

    var clock = new THREE.Clock();

    function mainLoop() {

        stats.begin();

        var delta = clock.getDelta();

        physics.update(delta);
        physicsVisualDebugger.update();

/*        radio.animations.forEach(function (animation) {
            animation.update(delta)
        });*/

        TWEEN.update();

/*        if (radioAnimationMixer != null) {
            radioAnimationMixer.update(delta);
        }*/

        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);

        stats.end();
    }

    mainLoop();

    window.onresize = updateAspectRatio;
    window.onmousemove = calculateMousePosition;
    window.onclick = executeRaycast;
    window.onkeydown = keyDownAction;
    window.onkeyup = keyUpAction;

    //window.addEventListener("radioStateChanged", setRadioSound);
    //window.dispatchEvent(new Event("radioStateChanged"));
}

window.onload = main;