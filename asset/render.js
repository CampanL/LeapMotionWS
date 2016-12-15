var compteur = 0;
var randx = random(-2,2);
var randy = random(-2,2);

function render() {
  requestAnimationFrame( render );

  // Animation des cubes
  for (var i = 0, cube; i < cubes.length; i++) {
    cube = cubes[i];

    cube.position.z += 3;

    if (cube.position.z > 50) {
      cube.position.z = -1000;
    }
  }
  //bouge le shot r et vérifie la colision avec le fond
  moove_shot(shot_l,shot_sphere_l,shot_vector_l);
  moove_shot(shot_r,shot_sphere_r,shot_vector_r);

  //gestion des mobs
  for (var j=0, mob; j < mobs.length; j++)
  {
    mob = mobs[j];

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
  compteur++
  if (compteur>100) 
  {
    randx = random(-3,3);
    randy = random(-3,3);
    compteur = 0;
  }
  // Rendering...

  renderer.render( scene, camera );
}
render();