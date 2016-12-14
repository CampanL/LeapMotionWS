//
function Shot(coordonates){
	this.coordonates = coordonates || [0,0,0];
	this.ready 		 = false;
	this.size		 = 0.5;
	this.speed 		 = 10;
	this.geometry    = new THREE.SphereGeometry( 10, 40, 40 );
	this.material    = new THREE.MeshBasicMaterial( {color: 00256} );
    this.material.opacity=0.5;
    this.material.transparent=true;
    this.shooted	= false;

	this.grow = function(object3D) {
        if (this.size<3) {
        	this.size +=0.025;

        }else{
   			this.size=3;
        	this.ready=true;
        }
        object3D.scale.set(this.size,this.size,this.size);
        return object3D;
    };

}

function shoot_player(){
	if (shot.ready) {
		console.log("ready");
	}
}