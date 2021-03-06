var compteur = 0;
var randx    = 0;
var randy    = 0;
var HandTimer;
var ErrorTimer;
var inter_shoot=100;
var speed = 3;
var score = 0;
var erreur = 10;
var lvl = 1;

function render() {
  requestAnimationFrame( render );

  $(".score_bar .score").html("SCORE : "+score);
  $(".score_bar .erreur").html("ERREUR RESTANTE : "+erreur);

  //affichage du tutoriel
  if (tuto==true) 
  {
    mobs[0].position.x=200;
    mobs[0].position.y=100;
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

    }

  }else
  {

    // Animation des cubes
    for (var i = 0, cube; i < cubes.length; i++) 
    {
      cube = cubes[i];

      cube.position.z += speed;
      cube.position.x += (camera.position.x - cube.position.x)/(200/lvl);
      cube.position.y += (camera.position.y - cube.position.y)/(100/(lvl)/2);

    }
    //bouge le shot r et vérifie la colision avec le fond
    /*
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
    }  */

    //gestion des mobs
    for (var j=0, mob; j < mobs.length; j++)
    {
      mob = mobs[j];

      if (compteur == inter_shoot) 
      {
        mob_shoot(mob);
      }
      if (compteur==100) 
      {
        randx = random(-3,3);
        randy = random(-3,3);
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
    }
    compteur++;

    if (compteur>100) 
    {
      compteur = 0;
    }
  }

  //changement de couleur en fonction des evenement
  if (Date.now() - HandTimer < 200) {
    material_shield.color.setHex( 0x2FBB0E ); // attrapé !
  }
  else if (Date.now() - ErrorTimer < 200){
    material_shield.color.setHex( 0xd62d20 );
  }
  else{
    material_shield.color.setHex( 0x2C75FF );
  }

  //collid cube/shield
  for (var i = 0; i < cubes.length; i++) {
    let cube = cubes[i];
    if(isColid(shield,cube)){
      scene.remove(cube);
      cubes.splice(i,1);
      HandTimer = Date.now();
      score++;
      if (score%5==0) 
      {
        if (inter_shoot>50) 
        {
          inter_shoot -=10;
        }
          speed +=2;
          lvl+=0.5;
      }
    }
    if (cube.position.z > 20) {
      scene.remove(cube);
      cubes.splice(i,1);
      ErrorTimer = Date.now();
      if(!tuto){
        erreur--;
      }
    }
  }

  //gestion du score
  if (score==1) {
    scene.remove(sprite);
    tuto=false;
  }
  if (erreur<=0) {
    score = parseInt(score);
    localStorage.setItem("score",score);
    document.location.href = "loose.html";
  }
  // Rendering...
  renderer.render( scene, camera );
}
render();