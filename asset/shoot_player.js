//
function Shot(coordonates){
	this.coordonates = coordonates || [0,0,0];
	this.ready 		 = false;
	this.size		 = 0.5;
	this.speed 		 = 15;
	this.geometry    = new THREE.SphereGeometry( 10, 40, 40 );
	this.material    = new THREE.MeshBasicMaterial( {color: 00256} );
    this.material.opacity=0.5;
    this.material.transparent=true;
    this.shooted	= false;
}

function shoot_player(){
	if (shot.ready) {
		console.log("ready");
	}
}