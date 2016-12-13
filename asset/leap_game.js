Leap.loop(function(frame){
  if (!frame.valid) {
    return;
  }
  frame.hands.forEach(function(hand) {
  	normal = hand.palmNormal;
  	//console.log(normal);

  	if (normal[2]<=-0.7) {
  		console.log(hand)
  		if (hand.type=="left") {
  			scene.remove(shield_l);
			shield_l.position.x=hand.palmPosition[0];
			shield_l.position.y=hand.palmPosition[1];
			shield_l.position.z=hand.palmPosition[2];
			scene.add(shield_l);
		}
		else if (hand.type=="right") {
  			scene.remove(shield_r);
			shield_r.position.x=hand.palmPosition[0];
			shield_r.position.y=hand.palmPosition[1];
			shield_r.position.z=hand.palmPosition[2];
			scene.add(shield_r);
		}
  	}else{
  		//cache le bouclier
  		if (hand.type=="left") {
			shield_l.position.x=0;
			shield_l.position.y=0;
			shield_l.position.z=-1000;
		}
		else if (hand.type=="right") {
			shield_r.position.x=0;
			shield_r.position.y=0;
			shield_r.position.z=-1000;
		}
  	}
  });
}).on('handLost',
    function(hand){
    	//cache le bouclier
    	if (hand.type=="left") {
	  		shield_l.position.x=0;
			shield_l.position.y=0;
			shield_l.position.z=-1000;
		}else if(hand.type=="right"){
			shield_r.position.x=0;
			shield_r.position.y=0;
			shield_r.position.z=-1000;
		}
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
