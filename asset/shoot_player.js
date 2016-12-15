//
function Shot(coordonates){
	this.coordonates = coordonates || [0,0,0];
	this.ready 		 = false;
	this.size		 = 0.5;
	this.speed 		 = -8;
	this.grow_speed  = 0.04;
	this.range       = -750;
	this.geometry    = new THREE.SphereGeometry( 10, 40, 40 );
	this.material    = new THREE.MeshBasicMaterial( {color: 0xD90115} );
    this.material.opacity=0.5;
    this.material.transparent=true;
    this.shooted	= false;
}

function reload_shot(shot){
	shot.shooted = false;
    shot.ready = false;
    shot.size=0.5;
    shot.material.color.setHex(0xD90115);
}
function moove_shot(shot,shot_sphere,normal){
	if (shot.shooted) {
	shot_sphere.translateX( normal[0]*30 );
	shot_sphere.translateY( normal[1]*30 );
    shot_sphere.translateZ( shot.speed );
    if (shot_sphere.position.z <= shot.range) {
      //réinitialise le shot
      reload_shot(shot);
    }
  }
}