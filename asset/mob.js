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
	var geometry = new THREE.SphereGeometry( 25, 32, 32 );
	var material = new THREE.MeshLambertMaterial( {color: 0x000000} );
	var sphere = new THREE.Mesh( geometry, material );

	sphere.position.x=pos.x;
	sphere.position.y=pos.y;
	sphere.position.z=-750;

	return sphere;
}