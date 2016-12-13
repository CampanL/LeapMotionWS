var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.z = 100;
scene.add(camera);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Lumière
var light = new THREE.PointLight( 0xffffff, 1, 1000 );
light.position.set( 50, 50, 50 );
scene.add( light );

// Initialisation : création des cubes
var cubes = [];
const nbCubes = 20;
for (var i = 0; i < nbCubes; i++) {
  cubes.push( cube({
    x : random(-150, 150),
    y : random(-100, 100),
    z : random(0, -1000)
  }, 20, getRandomColor()) );
}

function cube(pos, dimension, mcolor)
{
  var geometry = new THREE.BoxGeometry( dimension, dimension, dimension );
  var material = new THREE.MeshLambertMaterial( { color: mcolor } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  cube.position.x = pos.x;
  cube.position.y = pos.y;
  cube.position.z = pos.z;

  return cube;
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomColor() {
  return '#'+(~~(Math.random() * (1<<24))).toString(16);
}

Leap.loop({
  hand: function(hand){

  }
})
.use('transform', {
  // move 20 cm back.
  position: new THREE.Vector3(0,-75,-150),
  quaternion: new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), Math.PI / 4 ),
  scale: 0.5
})
.use('boneHand', {
      scene: scene,
      arm: true

    })
