var compteur = 0;
var inter_shoot=100;
var speed = 3;
var randx=0;
var randy=0;

function render() {
  requestAnimationFrame( render );

  //affichage du tutoriel
  if (tuto==true) 
  {
    mobs[0].position.x=200;
    mobs[0].position.y=250;
    compteur++;
    if (compteur>150) 
    {
      mob_shoot(mobs[0])
      compteur=0;
    }

    for (var i = 0, cube; i < cubes.length; i++) 
    {
      cube = cubes[i];

      cube.position.z += 3;
      cube.position.x += (camera.position.x - cube.position.x)/200;
      cube.position.y += (camera.position.y - cube.position.y)/100;

      if (cube.position.z > 20) {
        scene.remove(cube);
      }
    }

  }else
  {

    // Animation des cubes
    for (var i = 0, cube; i < cubes.length; i++) 
    {
      cube = cubes[i];

      cube.position.z += 3;
      cube.position.x += (camera.position.x - cube.position.x)/200;
      cube.position.y += (camera.position.y - cube.position.y)/100;

      if (cube.position.z > 20) {
        scene.remove(cube);
      }
    }
    //bouge le shot r et vérifie la colision avec le fond
    if (shot_r.shooted) {
      shot_sphere_r.position.z -=shot_r.speed;
      if (shot_sphere_r.position.z < -1300) {
        shot_r.shooted = false;
        shot_r.ready = false;
        shot_r.size=0.5;
      }
    }

    //bouge le shot l et vérifie la colision avec le fond
    if (shot_l.shooted) {
      shot_sphere_l.position.z -=shot_l.speed;
      if (shot_sphere_l.position.z < -1300) {
        shot_l.shooted = false;
        shot_l.ready = false;
        shot_l.size=0.5;
      }
    }  

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
      if (mob.position.y < -100 || mob.position.y > 100) 
      {
        randy = -randy;
      }
        console.log(mob.position.y);
    }
    compteur++;
    if (compteur>100) 
    {
      compteur = 0;
    }
  }
  // Rendering...
  renderer.render( scene, camera );
}
render();