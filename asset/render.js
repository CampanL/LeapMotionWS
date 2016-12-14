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
  if (shot_r.shooted) {
    shot_sphere_r.position.z -=9;
    if (shot_sphere_r.position.z < -1000) {
      shot_r.shooted = false;
    }
  }

  //bouge le shot l et vérifie la colision avec le fond
  if (shot_l.shooted) {
    shot_sphere_l.position.z -=9;
    if (shot_sphere_l.position.z < -1000) {
      shot_l.shooted = false;
    }
  }
  // Rendering...
  renderer.render( scene, camera );
}
render();