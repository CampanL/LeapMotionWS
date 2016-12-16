var spriteMap = new THREE.TextureLoader().load( 'asset/img/tuto.png' );

var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xffffff } );

var sprite = new THREE.Sprite( spriteMaterial );
sprite.scale.set(80, 80, 1)

scene.add( sprite );
sprite.position.y = 10;