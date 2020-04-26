 var scene = new THREE.Scene();
    
    //
    // CAMERA
    var camera = new THREE.PerspectiveCamera( 85, window.innerWidth/window.innerHeight, 1, 2000);
        camera.position.z = 450;
        camera.position.x = -150;


    //
    // WebGL Renderer
    var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
        
    //
    // CSS 2D Renderer
    var labelRenderer = new THREE.CSS2DRenderer();
        labelRenderer.setSize( window.innerWidth, window.innerHeight );
        labelRenderer.domElement.style.position = 'absolute';
        labelRenderer.domElement.style.top = 0;
    document.body.appendChild( labelRenderer.domElement );
    
    //
    // FRUSTUM
    var frustum = new THREE.Frustum();
    var cameraViewProjectionMatrix = new THREE.Matrix4();
    var animation_target;
    var animation_trigger = false;
    
    //
    // CONTROLS
    var controls = new THREE.OrbitControls( camera, labelRenderer.domElement );
    //var controls = new PointerLockControls( camera, document.body );
        controls.maxDistance = 500;
        controls.update();
    
    
    
    
    
    
    
    
    //
    // Lights
    var light = new THREE.HemisphereLight( 0xffffff, 0x080820, 4 );
    scene.add( light );
    // var ambientLight = new THREE.AmbientLight(0xf1f1f1);
    // scene.add(ambientLight);
    // var spotLight = new THREE.DirectionalLight(0xffffff);
    // spotLight.position.set(50,50,50);
    // scene.add(spotLight);


    //see screenshots for overview position reference
          //Lights

    
    // Starfield Sphere
    var starGeometry = new THREE.SphereGeometry(1000, 50, 50);
    var starMaterial = new THREE.MeshPhongMaterial({
      //map: new THREE.ImageUtils.loadTexture("/textures/galaxy_starfield.png"),
      //color: 0x000000,
      map: new THREE.ImageUtils.loadTexture("/textures/starmap.jpg"),
      side: THREE.DoubleSide,
      shininess: 0
    });
    var starField = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(starField);


          var geometry = new THREE.SphereGeometry( 5, 32, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0x0B5394} );
        material.wireframe = true;
        var sphere = new THREE.Mesh( geometry, material );  
    

    
    
    // Spheric stars
var axesHelper = new THREE.AxesHelper( 500 );
scene.add( axesHelper );
    
    function createSphericStar(x, y, z, size) {
        geometry = new THREE.SphereGeometry( 7, 32, 32 );
        material = new THREE.MeshBasicMaterial( {color: 0x0B5394} );
        material.wireframe = true;
        sphere = new THREE.Mesh( geometry, material );
            sphere.position.x = x;
            sphere.position.y = y;
            sphere.position.z = z;      
        return sphere;

    }

 setTimeout(function(){
 
    for (var i = 0; i < myObj.length; i++) {

    var x_axis = myObj[i].Cases/parseInt(myObj[i].Population);
    var y_axis = myObj[i].Deaths/myObj[i].Cases;
    var z_axis = myObj[i].Big_Box_Stores;

    var x_scaled = (x_axis/0.092174483);
    var y_scaled = (y_axis/0.1617647059);
    var z_scaled = (z_axis-33.07843137/177-33.07843137);






   //f(x)= (x -min/ max -min)*100
    //how to scale these values across grid
    ///addd box for reference
    ///hover highlighter


    scene.add(createSphericStar(x_scaled, y_scaled, z_scaled));


                var earthDiv = document.createElement( 'div' );
                earthDiv.className = 'label';
                earthDiv.textContent = myObj[i].county;
                earthDiv.style.marginTop = '-1em';
                var earthLabel = new THREE.CSS2DObject( earthDiv );
                earthLabel.position.set( 0, 5, 0 );
                sphere.add( earthLabel );
    }
    }, 3000);
    
    
    var name = 'myObj[i].name';
var canvas = document.createElement('canvas');
var ctx = canvas.getContext("2d");
    ctx.font="20px Georgia";
    ctx.fillText(name,10,50);

var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true; //just to make sure it's all up to date.

var label = new THREE.Mesh(new THREE.PlaneGeometry, new THREE.MeshBasicMaterial({map:texture}));
    
    


    //
    // WINDOW RESIZE
    window.addEventListener('resize', function () {
        renderer.setSize(window.innerWidth, window.innerHeight);
        labelRenderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }); 


    //
    // ANIMATION LOOP
    function animate() {
        requestAnimationFrame(animate);
        
        
        render();       
        update();
    }
    function update() {
        controls.update();        
        // 
 
        
        
    }
    
    function render() {
        
        
        var time = Date.now() * 0.005;
        
        //particleSystem.rotation.z = 0.01 * time;
        //var sizes = particles_geometry.attributes.size.array;
    
        // for ( var i = 0; i < particles; i ++ ) {
        //     sizes[ i ] = 5 * ( 1 + Math.sin( 0.1 * i + time ) );
        // }
        // particles_geometry.attributes.size.needsUpdate = true;      
    
        
        
        
        renderer.render( scene, camera );
        labelRenderer.render( scene, camera );
        //label.LookAt(camera.position);
    }

    animate();