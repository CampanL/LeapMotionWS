/*var shot_vector_l=[0,0,0];
var shot_vector_r=[0,0,0];*/
Leap.loop( function(frame){
  
  if (!frame.valid) {
    return;
  }

  //_____________________________________________PARTIE SHOOT__________________________________________
  //Gérer le tire du joueur
  let table_fingers = [];

  //nb de doight fermés
  let close = 0;

  frame.hands.forEach(function(hand) {
  	let xPalm = hand.palmPosition[0];
	let yPalm = hand.palmPosition[1];
	let zPalm = hand.palmPosition[2];
	let close = 0;
	let type  = hand.type;

  	hand.fingers.forEach(function(finger){
  		//compte le nombre de doigts fermés
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
  	//si 4 ou plus de doigts sont fermés
  	/*
  	if (close>=4 && !shot.shooted) {
  		scene.remove(shot_sphere);
  		shot.coordonates=hand.palmPosition;
  		shot_sphere.position.x = shot.coordonates[0];
		shot_sphere.position.y = shot.coordonates[1];
		shot_sphere.position.z = shot.coordonates[2];
		//charge le tire
		if (shot.size<3) {
        	shot.size +=shot.grow_speed;

        }else{
   			shot.size=3;
        	shot.ready=true;
        	shot.material.color.setHex( 0x2C75FF );
        }
        shot_sphere.scale.set(shot.size,shot.size,shot.size);
		scene.add(shot_sphere);
  	}else if(close>=5){
  		close=5;
  	}else if(shot.ready && close<=1){
  		shot.shooted=true;

  	}else if(!shot.ready){
  		shot.coordonates=[0,0,1000];
  		shot_sphere.position.x = shot.coordonates[0];
		shot_sphere.position.y = shot.coordonates[1];
		shot_sphere.position.z = shot.coordonates[2];
		shot.size=0.5;
  	}*/

  	//_____________________________________________PARTIE SHIELD__________________________________________
  	normal = hand.palmNormal;

  	if (normal[2]<=-0.7 && close<=1 /*&& !shot.shooted*/) {
  		scene.remove(shield);
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
	  	shield.position.x=0;
		shield.position.y=0;
		shield.position.z=-1000;
	})
.use('transform', {
  // move 20 cm back.
  position: new THREE.Vector3(0,-50,-300),
  quaternion: new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), Math.PI / 4 ),
  scale: 0.4
})
.use('boneHand', {
      scene: scene,
      arm: true

    })
.use('handEntry')