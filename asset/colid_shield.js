window.test = false;
function isColid(shield,cube){
	let colid= false;

	let coo_shield=shield.position;
	let coo_cube=cube.position;

 	let collideZ = (cube.position.z > shield.position.z && cube.position.z < shield.position.z + 30);
 	let collideX = (cube.position.x > shield.position.x - 60 && cube.position.x < shield.position.x + 60);
 	let collideY = (cube.position.y > shield.position.y - 102 && cube.position.y < shield.position.y + 102);

	if (collideZ && collideX && collideY)
	{
		colid = true;
	}

	return colid;
}