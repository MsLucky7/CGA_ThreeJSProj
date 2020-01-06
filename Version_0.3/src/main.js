//external libraries, no additional libs beyond those allowed
document.write('<script type="text/javascript" src="../lib/three.js-r109/build/three.js"></script>');
document.write('<script type="text/javascript" src="../lib/three.js-r109/examples/js/controls/OrbitControls.js"></script>');
document.write('<script type="text/javascript" src="../lib/dat.gui-0.7.6/build/dat.gui.js"></script>');
document.write('<script type="text/javascript" src="../lib/ThreeCSG-1/three-csg.js"></script>');
document.write('<script type="text/javascript" src="../lib/three.js-r109/examples/js/libs/inflate.min.js"></script>');
document.write('<script type="text/javascript" src="../lib/three.js-r109/examples/js/loaders/FBXLoader.js"></script>');
document.write('<script type="text/javascript" src="../lib/cannon.js-0.6.2/build/cannon.js"></script>');
document.write('<script type="text/javascript" src="../lib/cannon.js-0.6.2/tools/threejs/CannonDebugRenderer.js"></script>');
document.write('<script type="text/javascript" src="../lib/three.js-r109/examples/js/libs/stats.min.js"></script>');

//own internal classes/mods
//document.write('<script type="text/javascript" src="src/objects/Placeholders.js"></script>');
//document.write('<script type="text/javascript" src="src/objects/Floor.js"></script>');
document.write('<script type="text/javascript" src="src/objects/HoverCarfromPrimitives.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Islands.js"></script>');
document.write('<script type="text/javascript" src="src/objects/StorefromPrimitives.js"></script>');
document.write('<script type="text/javascript" src="src/objects/TemplefromFile.js"></script>');
document.write('<script type="text/javascript" src="src/objects/House01fromFile.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Houses02fromFile.js"></script>');
document.write('<script type="text/javascript" src="src/objects/EnginefromFile.js"></script>');
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

const DEG_TO_RAD = Math.PI / 180;

function main() {
    scene = new THREE.Scene();

    physics = new Physics();
    physics.initialize(0, -200, 0, 1 / 60, false);
    physicsVisualDebugger = new THREE.CannonDebugRenderer(scene, physics.getWorld());

    soundscape = new Soundscape();


    var hoverCar = new HoverCar(0, 300, -500, 0, 0, 0, 2, 2, 2);
    scene.add(hoverCar);

    //Islands Placement
    var islandMain = new Islands(180, 20, 300, -130, 30, 0, true, true);
    physics.addBox(islandMain, 0, 180, 20, 300); //(object, rotation, sizeX, sizeY, sizeZ, x, y, z)
    scene.add(islandMain);
    var islandBigger = new Islands(400, 20, 300, 210, 30, 0, true, true);
    physics.addBox(islandBigger, 0, 400, 20, 300);
    scene.add(islandBigger);
    /*var islandSecond = new Islands(200, 50, 200, 420, 20, -150, true, true);
    scene.add(islandSecond);
    var islandToTemple = new Islands(90, 20, 110, 90, 30, 265, true, true);
    scene.add(islandToTemple);
    var islandTree = new Islands(50,30,50, -400,20,-70,true,true);
    scene.add(islandTree);
    var wayToTree1 = new Islands(20,10,20, -350,30,-70,true,true);
    scene.add(wayToTree1);
    var wayToTree2 = new Islands(20,10,20, -310,30,-60,true,true);
    scene.add(wayToTree2);
    var wayToTree3 = new Islands(20,10,20, -270,30,-75,true,true);
    scene.add(wayToTree3);
    var wayToTree4 = new Islands(20,10,20, -230,30,-85,true,true);
    scene.add(wayToTree4);
    var islandTree2 = new Islands(50,30,50, 450,20,20,true,true);
    scene.add(islandTree2); */

    //Models from Primitives Placements
    /*var store = new StorefromPrimitives(4);
    store.position.set(420, 100,-150);
    scene.add(store); */

    //FBX Models Placements
    var temple = new TempleFromFile();
    temple.position.set(100,40,230);
    scene.add(temple);

    var templeEngine = new EngineFromFile(0, 0.3, 0.3, 0.3);
    templeEngine.position.set(100,36,230);
    scene.add(templeEngine);

    var islandMainEngine = new EngineFromFile(90, 0.32, 0.2, 0.18);
    islandMainEngine.position.set(-250, 30, -30);
    scene.add(islandMainEngine);

    var islandSecondEngine = new EngineFromFile(180, 0.32, 0.2, 0.18);
    islandSecondEngine.position.set(-250, 30, -30);
    scene.add(islandSecondEngine);

    var house01 = new House01FromFile();
    house01.position.set(46,35,220);
    physics.addBox(house01, 0, 120, 120, 132, -176, 65, -266);
    physics.addBox(house01, 0, 120, 120, 132, -190, 185, -266);
    scene.add(house01);

    var houses = new Houses02FromFile();
    houses.position.set(46, 35, 220);
    scene.add(houses);

    var lights = new Lights();
    scene.add(lights.createAmbientLight());
    var directionalLight = lights.createDirectionalLight(-30, 200, 400);
    scene.add(directionalLight);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 3000);
    camera.position.set(-700, 300, 500);
    camera.lookAt(0, 0, 0);

    var orbitControls = new THREE.OrbitControls(camera);
    orbitControls.target = new THREE.Vector3(0, 0, 0);
    orbitControls.update();

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

    //FPS control panel, should not go below 30fps
    var stats = new Stats();
    stats.showPanel(0);
    document.body.appendChild(stats.dom);

    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    document.getElementById("3d_content").appendChild(renderer.domElement);

    var clock = new THREE.Clock();

    function mainLoop() {

        stats.begin();

        var delta = clock.getDelta();

        physics.update(delta);
        physicsVisualDebugger.update();

        TWEEN.update();

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

}

window.onload = main;