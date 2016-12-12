var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}
render();