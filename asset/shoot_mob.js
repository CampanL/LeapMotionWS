function mob_shoot(mob)
{
	cubes.push( cube({
	  x : mob.position.x,
	  y : mob.position.y,
	  z : mob.position.z
	}, 10, 0xffffff) );
}