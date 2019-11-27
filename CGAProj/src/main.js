//External libs + docs import ->
document.write('<script type="text/javascript" src="../../lib/three.js-r109/build/three.js"></script>');
document.write('<script type="text/javascript" src="../../lib/three.js-r109/examples/js/controls/OrbitControls.js"></script>');

// Internal files import ->

function main(){
   scene = new THREE.Scene();

   var axes = new THREE.AxesHelper(20);
   scene.add(axes);

   camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
   camera.position.set(30, 40, 50);
   camera.lookAt(0, 0, 0);

   renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   renderer.setClearColor(new THREE.Color(0xffffff));

   document.getElementById("3d_content").appendChild(renderer.domElement);

   function mainLoop() {

       renderer.render(scene, camera);
       requestAnimationFrame(mainLoop);
   }

   mainLoop();
}

window.onload = main;
