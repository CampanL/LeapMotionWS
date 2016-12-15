function isColid(elem1,elem2){
	let colid= false;
	let coo1=elem1.position;
	let coo2=elem2.position;
	let size1=elem1.geometry.parameters;
	let size2=elem2.geometry.parameters;
	/*console.log(coo1);
	console.log(coo2);
	console.log(size1);
	console.log(size2);*/
	//a améliorer
	if (coo1.x <= coo2.x+50  &&
        coo1.y <= coo2.y+100 &&
        coo1.z <= coo2.z+5) 
	{
		colid= true;
	}
	return colid;
}