var compteur = 0;
var randx    = 0;
var randy    = 0;
var HandTimer;

function render() {
  requestAnimationFrame( render );

  // Animation des tirs ennemis
  for (var i = 0, cube; i < cubes.length; i++) {
    cube = cubes[i];

    cube.position.z += 3;
    cube.position.x += (camera.position.x - cube.position.x)/200;
    cube.position.y += (camera.position.y - cube.position.y)/100;

    if (cube.position.z > 20) {
      scene.remove(cube);
    }
  }
  //bouge le shot r et vérifie la colision avec le fond
  /*moove_shot(shot_l,shot_sphere_l,shot_vector_l);
  moove_shot(shot_r,shot_sphere_r,shot_vector_r);*/

  //gestion des mobs
  for (var j=0, mob; j < mobs.length; j++)
  {
    mob = mobs[j];

    if (compteur == 0) 
    {
      randx = random(-2,2);
      randy = random(-2,2);
      mob_shoot(mob);
    }

    mob.position.x += randx;
    mob.position.y += randy;
    
    if (mob.position.x < -350 || mob.position.x > 350) 
    {
      randx = -randx;
    }
    if (mob.position.y < -300 || mob.position.y > 300) 
    {
      randy = -randy;
    }
  }
  compteur++;
  if (compteur>100) 
  {
    compteur = 0;
  }

  if (Date.now() - HandTimer < 200) {
    material_shield.color.setHex( 0x2FBB0E ); // attrapé !
  } else {
    material_shield.color.setHex( 0x2C75FF );
  }
  
  //collid cube/shield
  for (var i = 0; i < cubes.length; i++) {
    let cube = cubes[i];
    if(isColid(shield,cube)){
      scene.remove(cube);
      HandTimer = Date.now();

    }
  }
  // Rendering...
  renderer.render( scene, camera );
}
render();