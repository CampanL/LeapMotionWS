Leap.loop(function(frame){
  if (!frame.valid) {
    return;
  }
  frame.hands.forEach(function(hand) {
  	normal = hand.palmNormal;
  	//console.log(normal);
	let shield = {};
	if (hand.type=="left") {shield=shield_l}
  	else if (hand.type=="right") {shield=shield_r};
  	if (normal[2]<=-0.7) {
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
    	//cache le bouclier
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
