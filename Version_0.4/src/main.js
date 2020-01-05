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
document.write('<script type="text/javascript" src="src/objects/Islands.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Grass.js"></script>');
document.write('<script type="text/javascript" src="src/objects/TemplefromFile.js"></script>');
document.write('<script type="text/javascript" src="src/objects/House01fromFile.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Houses02fromFile.js"></script>');
document.write('<script type="text/javascript" src="src/objects/CherryTreefromFile.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Trashcan1fromFile.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Trashcan2fromFile.js"></script>');
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

    //Islands Placement---------------------------------------
    var islandMain = new Islands(900, 20, 700, 170, 30, -200, true, true);
    physics.addBox(islandMain, 0, 900, 20, 700); //(object, rotation, sizeX, sizeY, sizeZ, x, y, z)
    scene.add(islandMain);

    //Islands
    var islandTree1 = new Islands(80, 50, 80, 400, 150, 350, true, true);
    physics.addBox(islandTree1, 0, 80,160,80, 0, 55,0);
    scene.add(islandTree1);
    var islandTree2 = new Islands(80, 50, 80, -500, -100, -200, true, true);
    physics.addBox(islandTree2, 0, 80,160,80, 0, 55,0);
    scene.add(islandTree2);
    var islandTree3 = new Islands(80, 50, 80, 300, 100, -800, true, true);
    physics.addBox(islandTree3, 0, 80,160,80, 0, 55,0);
    scene.add(islandTree3);
    var islandTree4 = new Islands(80, 50, 80, 800, -200, -500, true, true);
    physics.addBox(islandTree4, 0, 80,160,80, 0, 55,0);
    scene.add(islandTree4);
    var islandTree5 = new Islands(80, 50, 80, 100, 200, 800, true, true);
    physics.addBox(islandTree5, 0, 80,160,80, 0, 55,0);
    scene.add(islandTree5);

    var grassIslandTree1 = new Grass(70,10,70, 400,175,350,true,true);
    scene.add(grassIslandTree1);
    var grassIslandTree2 = new Grass(70,10,70, -500,-75,-200,true,true);
    scene.add(grassIslandTree2);
    var grassIslandTree3 = new Grass(70,10,70, 300,125,-800,true,true);
    scene.add(grassIslandTree3);
    var grassIslandTree4 = new Grass(70,10,70, 800,-175,-500,true,true);
    scene.add(grassIslandTree4);
    var grassIslandTree5 = new Grass(70,10,70, 100,225,800,true,true);
    scene.add(grassIslandTree5);

    var grassPark1 = new Grass(300,10,80, 150,40,-220,true,true);
    scene.add(grassPark1);

    //FBX Models Placements--------------------------------------------------
    var temple = new TempleFromFile();
    temple.position.set(100,40,230);
    physics.addBox(temple, 0, 80,80,150, -30, 35,-20);
    physics.addBox(temple, 0, 350,20,300, -30, 0,200);
    physics.addBox(temple, 0, 180,200,110, -30, 80,210);
    physics.addBox(temple, 0, 55,80,55, -120, 40,80);
    physics.addBox(temple, 0, 65,100,55, 120, 50,260);
    scene.add(temple);

    var house01 = new House01FromFile();
    house01.position.set(120,35,220);
    physics.addBox(house01, 0, 120, 120, 132, -176, 65, -266);
    physics.addBox(house01, 0, 120, 120, 132, -190, 185, -266);
    scene.add(house01);

    var houses = new Houses02FromFile();
    houses.position.set(46, 35, 220);
    scene.add(houses);

    var tree1 = new CherryTreefromFile();
    tree1.position.set(280,175,95);
    scene.add(tree1);

    var tree2 = new CherryTreefromFile();
    tree2.position.set(530,-175,-600);
    tree2.rotation.y = 45*DEG_TO_RAD;
    scene.add(tree2);

    var tree3 = new CherryTreefromFile();
    tree3.position.set(60,130,-650);
    tree3.rotation.y = 100*DEG_TO_RAD;
    scene.add(tree3);

    var tree4 = new CherryTreefromFile();
    tree4.position.set(-780,-90,-200);
    tree4.rotation.y = 65*DEG_TO_RAD;
    scene.add(tree4);

    var tree5 = new CherryTreefromFile();
    tree5.position.set(-150,230,910);
    tree5.rotation.y = 90*DEG_TO_RAD;
    scene.add(tree5);

    var trashcan1 = new Trashcan1fromFile();
    trashcan1.position.set(200,70,80);
    physics.addCylinder(trashcan1, 2, 10, 10, 25, 8, 0, 0, 0, 90*DEG_TO_RAD);
    scene.add(trashcan1);

    var trashcan2 = new Trashcan2fromFile();
    trashcan2.position.set(230,70,75);
    physics.addCylinder(trashcan2, 2, 10, 10, 25, 8, 0, 0, 0, 90*DEG_TO_RAD);
    scene.add(trashcan2);
    //-----------------------------------------------------------

    var lights = new Lights();
    scene.add(lights.createAmbientLight());
    var directionalLight = lights.createDirectionalLight(-30, 500, 700);
    scene.add(directionalLight);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 3000);
    camera.position.set(-800, 400, 500);
    camera.lookAt(0, 0, 0);

    var orbitControls = new THREE.OrbitControls(camera);
    orbitControls.target = new THREE.Vector3(0, 0, 0);
    orbitControls.update();

    var gui = new dat.GUI();
    gui.add(directionalLight.position, "x", -500, 500);
    gui.add(directionalLight.position, "y", -200, 500);
    gui.add(directionalLight.position, "z", -800, 800);
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