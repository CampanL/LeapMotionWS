window.test = false;
function isColid(shield,cube){
	let colid= false;

	let coo_shield=shield.position;
	let coo_cube=cube.position;
	let size_shield=shield.geometry.parameters;
	let size_cube=cube.geometry.parameters;
	
	// if (coo_shield.x < coo_cube.x+size_cube.width  && coo_shield.x+160 > coo_cube.x  &&
 //        coo_shield.y < coo_cube.y+size_cube.heigth && coo_shield.y+220 > coo_cube.y  &&
 //        coo_shield.z < coo_cube.z+100) 

 	let collideZ = (cube.position.z > shield.position.z && cube.position.z < shield.position.z + 10);
 	let collideX = (cube.position.x > shield.position.x - 60 && cube.position.x < shield.position.x + 60);
 	let collideY = (cube.position.y > shield.position.y - 102 && cube.position.y < shield.position.y + 102);

 	// !window.test && console.log(shield.geometry.parameters);
 	// window.test = true;

	if (collideZ && collideX && collideY)
	{
		colid = true;
	}

	if (colid) console.log('collision')

	return colid;
}