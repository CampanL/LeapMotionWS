
var mobs = [];
const nbMob = 1;


for (var i = 0; i < nbMob; i++) {
  mobs.push( mob({
    x : random(-150, 150),
    y : random(-100, 100)
  }));
}

function mob(pos)
{
	var geometry = new THREE.SphereGeometry( 20, 32, 32 );
	var material = new THREE.MeshLambertMaterial( {color: 0xff0000} );
	var sphere = new THREE.Mesh( geometry, material );
	scene.add( sphere );

	sphere.position.x=pos.x;
	sphere.position.y=pos.y;
	sphere.position.z=-500;

	return sphere;
}