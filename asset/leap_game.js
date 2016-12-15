Leap.loop( function(frame){
  
  if (!frame.valid) {
    return;
  }

  //_____________________________________________PARTIE SHOOT__________________________________________
  //Gérer le tire du joueur
  let table_fingers_r = [];
  let table_fingers_l = [];

  //nb de doight fermés
  let close_r = 0;
  let close_l = 0;
  frame.hands.forEach(function(hand) {
  	let xPalm = hand.palmPosition[0];
	let yPalm = hand.palmPosition[1];
	let zPalm = hand.palmPosition[2];
	let close = 0;
	let type  = hand.type;
	if (type=="right") {table_fingers=table_fingers_r; close=close_r; shot=shot_r; shot_sphere=shot_sphere_r}
 		else if(type=="left"){table_fingers=table_fingers_l; close=close_l; shot=shot_l; shot_sphere=shot_sphere_l};
  	hand.fingers.forEach(function(finger){
  		let xTip = finger.tipPosition[0];
		let yTip = finger.tipPosition[1];
		let zTip = finger.tipPosition[2];
		let distance =	Math.sqrt(Math.pow(xPalm-xTip,2)+Math.pow(yPalm-yTip,2)+Math.pow(zPalm-zTip,2));
		if (distance<30) {
  			table_fingers.push(1);
  		}else{
  			table_fingers.push(0);
  		}
  	});
  		
  	for (var i = 0; i < table_fingers.length; i++) {

  		close+=table_fingers[i];
  	}
  	//si 4 ou plus de doights sont fermés
  	if (close==5 && !shot.shooted) {
  		scene.remove(shot_sphere);
  		shot.coordonates=hand.palmPosition;
  		shot_sphere.position.x = shot.coordonates[0];
		shot_sphere.position.y = shot.coordonates[1];
		shot_sphere.position.z = shot.coordonates[2];
		if (shot.size<3) {
        	shot.size +=0.025;

        }else{
   			shot.size=3;
        	shot.ready=true;
        }
        shot_sphere.scale.set(shot.size,shot.size,shot.size);
		scene.add(shot_sphere);
  	}else if(close>=5){
  		close=5;
  	}else if(shot.ready && close<=1){
  		shot.shooted=true;

  	}else if(!shot.ready && close<=1){
  		shot.coordonates=[0,0,1000];
  		shot_sphere.position.x = shot.coordonates[0];
		shot_sphere.position.y = shot.coordonates[1];
		shot_sphere.position.z = shot.coordonates[2];
		shot.size=0.5;
  	}

  	//_____________________________________________PARTIE SHIELD__________________________________________
  	normal = hand.palmNormal;
  	
	let shield = {};
	if (hand.type=="left") {shield=shield_l}
  	else if (hand.type=="right") {shield=shield_r};
  	if (normal[2]<=-0.7 && close<=1) {
  		scene.remove(shield_l);
		shield.position.x=hand.palmPosition[0];
		shield.position.y=hand.palmPosition[1];
		shield.position.z=hand.palmPosition[2];
		scene.add(shield);
  	}else{
  		//cache le bouclier
		shield.position.x=0;
		shield.position.y=0;
		shield.position.z=-1000;
  	}
  });
}).on('handLost',
    function(hand){
    	//cache le bouclier quand la main disparait
    	let shield = {};
  		if (hand.type=="left") {shield=shield_l}
  		else if (hand.type=="right") {shield=shield_r};
	  	shield.position.x=0;
		shield.position.y=0;
		shield.position.z=-1000;
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
.use('handEntry')
