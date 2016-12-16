var scene = new THREE.Scene();

var tuto = true;

var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.z = 100;
scene.add(camera);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Lumière
var light = new THREE.PointLight( 0xffffff, 2, 1500 );
light.position.set( 50, 50, 50 );
scene.add( light );

// Initialisation : création des cubes
var cubes = [];

// Initialisation : création des shots
let shot_r = new Shot([0,0,1000]);
let shot_sphere_r = new THREE.Mesh( shot_r.geometry, shot_r.material );
shot_sphere_r.position.x = shot_r.coordonates[0];
shot_sphere_r.position.y = shot_r.coordonates[1];
shot_sphere_r.position.z = shot_r.coordonates[2];
scene.add(shot_sphere_r); 

let shot_l = new Shot([0,0,1000]);
let shot_sphere_l = new THREE.Mesh( shot_l.geometry, shot_l.material );
shot_sphere_l.position.x = shot_l.coordonates[0];
shot_sphere_l.position.y = shot_l.coordonates[1];
shot_sphere_l.position.z = shot_l.coordonates[2];
scene.add(shot_sphere_l); 

//initialisation du bouclier
let geometry_shield = new THREE.CylinderGeometry( 60, 60, 2, 32 );
let material_shield = new THREE.MeshBasicMaterial( {color: 00256} );
material_shield.opacity=0.5;
material_shield.transparent=true;

geometry_shield.rotateX ( Math.PI/2 );

let shield_r = new THREE.Mesh( geometry_shield, material_shield );
shield_r.scale.set(1,1.7,1);
let shield_l = new THREE.Mesh( geometry_shield, material_shield );
shield_l.scale.set(1,1.7,1);

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