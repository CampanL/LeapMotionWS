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

//initialisation du bouclier
let geometry_shield = new THREE.CylinderGeometry( 100, 100, 2, 32 );
let material_shield = new THREE.MeshBasicMaterial( {color: 00256} );
material_shield.opacity=0.5;
material_shield.transparent=true;
geometry_shield.rotateX ( Math.PI/2 );

let shield_r = new THREE.Mesh( geometry_shield, material_shield );
let shield_l = new THREE.Mesh( geometry_shield, material_shield );

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